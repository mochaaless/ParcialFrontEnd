

export type Definition = {
    definition: string,
    example: string
}

export type Meaning = {
    definitions: Definition[]
    synonyms: string[]
}

export type Word = {
    word: string,
    meanings: Meaning[]
}