function readOnlyArr(arr: ReadonlyArray<any>) {
    console.log(arr)
}

let arr: ReadonlyArray<any> = ["god", 143, 1, true]
// arr.push(false) // raises error bcz arr is readonly
readOnlyArr(arr)

