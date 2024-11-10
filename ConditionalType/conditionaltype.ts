interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLable<T extends number | string>(idOrName: T): NameOrId<T> {
    // throw "unimplemented"
}

let a = createLable("name")
console.log(a)
let b = createLable(4)
console.log(b)