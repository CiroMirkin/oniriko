"use server"

import { prisma } from "@/lib"
import { Product } from "@/models"

export const getProducts = async () => {
    try {
        const products = await prisma.product.findMany({
            orderBy: {
                name: "desc",
            },
            select: {
                id: true,
                slug: true,
                stock: true,
                description: true,
                name: true,
                price: true,
                author: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                ProductImage: {
                    select: {
                        id: true,
                        url: true,
                    }
                }
            },
        })

        const productParsed: Product[] = products.map(({ author, ProductImage, ...p }) => ({
            authorName: author.name,
            authorId: author.id,
            imageId: ProductImage[0].id,
            imageSrc: ProductImage[0].url,
            ...p,
        }))

        return {
            ok: true,
            products: productParsed
        }
    }
    catch (e) {
        console.error("Error al obtener productos.")
        return {
            ok: false,
            products: [],
        }
    }
}
