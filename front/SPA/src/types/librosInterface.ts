export default interface BooksInterface {
    _id?: number | id,
    title: string,
    isbn?: string,
    pageCount: number,
    publishedDate?: publishedDate
    thumbnailUrl?: string,
    shortDescription?: string,
    longDescription?: string,
    status: string,
    authors: string[],
    categories: string[]
}


export interface publishedDate{
    $date: string
}

export interface id{
    $oid: string
}