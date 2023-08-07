export function ReverseArrayAndIncrease(arr) {
    return arr.reverse().map(item => item++).filter(item => item > 0).map(item => console.log(item));
}

export async function AsyncArr(array) {
    console.log("start func 1")
    let counter = 0;
    array.forEach(async (item) => {
        counter++;
        let res = await fetch(item).then(res => res.json());
        console.log('res:', res)
        console.log("counter", counter)
    })
    console.log("Done func 1.")
}
