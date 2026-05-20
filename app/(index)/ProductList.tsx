"use server"

import { getProducts } from "@/actions"
import { Product } from "./Product"

export async function ProductList() {
    const { products } = await getProducts()

    return (
        <div className="min-h-4xl py-6 flex flex-wrap gap-6 items-center justify-center bg-second font-sans">
            {products.map(product => (
                <Product product={product} key={product.id} />
            ))}
        </div>    
    )
}
