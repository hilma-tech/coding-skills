export function ReverseArrayAndIncrease(arr) {
    return arr.reverse().map(item => item++).map(item => console.log(item));
}

export async function AsyncArr(array) {
    console.log("start func 1")
    let res = 0;
    array.map(async (item) => {
        res++;
        let fetchres = await fetch(item).then(res => res.json());
        console.log('fetchres:', fetchres)
        console.log("result func 1", res)
    })
    console.log("Done func 1.")
}


export async function AsyncArr2(array) {
    console.log("start func 2")
    for (let item of array) {
        let res = await fetch(item).then(res => res.json());
        console.log("result func 2", res)
    }
    console.log("Done func 2.")
}