export const resetFetch = (...props: any[]) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("SUCCESS") }, 300)
    })
}