
export interface Product {
    id: string
    slug: string
    name: string

    description?: string | null
    price:  number
    stock: number

    authorId: string
    authorName: string

    imageId: string
    imageSrc: string
}
