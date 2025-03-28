

export type Definition = {
    definition: string,
    example: string
}

export type Meaning = {
    definitions: Definition[]
}

export type Word = {
    word: string,
    meanings: Meaning[]
}