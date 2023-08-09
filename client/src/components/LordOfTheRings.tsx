import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Checkbox } from '../common/components/Checkbox';

interface book {
    _id?: string,
    name?: string,
    chapters?: Array<object>
    total?: number,
    finished?: boolean
}

interface chapter {
    _id: string,
    chapterName: string
}

export const LordOfTheRings = () => {
    const [books, setBooks] = useState<Array<book>>([]);
    const [filteredBooks, setFilteredBooks] = useState<Array<book>>([]);
    const [openId, setOpenId] = useState("");
    const [finished, setFinished] = useState(false);


    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        const { data } = await axios.get<{ docs: Array<Partial<book>>, total: number }>('https://the-one-api.dev/v2/book'/* , { headers: { Authorization: 'Bearer ' + 'KgiiGtrZSA3N_LXabaSZ' } } */)
        console.log('data: ', data);
        const { docs } = data
        const books = docs.map(book => { book.finished = false; return book })
        setBooks(books)
    }

    const getChapters = async (id: string) => {
        const { data } = await axios.get<{ docs: Array<Partial<chapter>>, total: number }>(`https://the-one-api.dev/v2/book/${id}/chapter`)
        console.log('data: ', data);
        setBooks(prev => {
            const currentBook = prev.findIndex(book => book._id === id);
            const chapters = [...data.docs]
            const total = data.total || prev[currentBook].chapters?.length
            prev[currentBook] = {
                _id: prev[currentBook]._id,
                name: prev[currentBook].name,
                total: total,
                chapters: chapters
            }
            return [...prev]
        });
        setOpenId(prev => prev !== id ? id : '');
    }

    const changeFinished = (index: number) => {
        setBooks(prev => {
            const change = [...prev];
            change[index] = { ...prev[index], finished: !prev[index].finished }
            return change
        })
    }

    const setFilteredBooksButton = () => {
        setFinished(prev => !prev)
        const filtered = books.filter(book => !book.finished).map((book, i) => ({ ...book, name: `book ${i + 1} - ${book.name}` }));
        setFilteredBooks(filtered)
    }


    return (
        <div>
            <h1>Lord Of The Rings</h1>
            <button onClick={setFilteredBooksButton}>{`Show ${!finished ? 'un' : ''}finished!`}</button>
            {/* <h2>The books:</h2> */}
            {!finished ? books.map((b, i) => (
                <React.Fragment key={i}>
                    <div className="flex" style={{ display: 'flex' }}>
                        <Checkbox withMargin={true} isChecked={Boolean(b.finished)} onClick={() => changeFinished(i)} />
                        <div style={{ fontWeight: 900, cursor: 'pointer' }} onClick={() => getChapters(b._id!)}>{b.name}</div>
                        <div style={{
                            height: openId === b._id ? 'fit-content' : 0, overflow: 'hidden'
                        }}>
                            {b.chapters && b.chapters.length && b.chapters.map((c, j) => (
                                <div>{c["chapterName" as keyof book["chapters"]]}</div>
                            ))}
                        </div>
                    </div>
                </React.Fragment>)) :
                filteredBooks.map((b, i) => (
                    <React.Fragment key={i}>
                        <div className="flex" style={{ display: 'flex' }}>
                            <Checkbox withMargin={true} isChecked={Boolean(b.finished)} onClick={() => changeFinished(i)} />
                            <div style={{ fontWeight: 900, cursor: 'pointer' }} onClick={() => getChapters(b._id!)}>{b.name}</div>
                            <div style={{
                                height: openId === b._id ? 'fit-content' : 0, overflow: 'hidden'
                            }}>
                                {b.chapters && b.chapters.length && b.chapters.map((c, j) => (
                                    <div>{c["chapterName" as keyof book["chapters"]]}</div>
                                ))}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
        </div>
    );
};
