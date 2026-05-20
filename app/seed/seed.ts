import { prisma } from "@/lib"

export const data = async () => {
    console.info("Datos eliminados")

    const [municipio, _] = await Promise.all([
        prisma.author.create({ data: { name: "Municipio del Cielo" } }),
        prisma.author.create({ data: { name: "Berte" } }),
    ])

    const product = await prisma.product.create({
        data: {
            authorId: municipio.id,
            name: "Le dicen viajar",
            slug: "pintura_le_dicen_viajar",
            stock: 1,
            price: 230000,
        },
    })

    await prisma.productImage.create({
        data: {
            url: "/img.png",
            productId: product.id,
        },
    })

    console.info("Datos insertados")
}

data()