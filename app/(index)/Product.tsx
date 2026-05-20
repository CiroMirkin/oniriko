import Image from "next/image";
import { formatPrice, Product as ProductModel } from "@/models";

interface Props {
    product: ProductModel
}

export function Product({ product }: Props) {
    return (
        <div className="px-2 pt-2 bg-primary shadow-xs">
            <div className="">
                <Image 
                    width={380}
                    height={300}
                    alt={ product.description || product.name }
                    src={ product.imageSrc }
                />
            </div>
            <div className="px-2 my-4 flex justify-between text-white">
                <p className="text-lg font-semibold">{ product.name }</p>
                <p className="text-base">{ formatPrice(product.price) }</p>
            </div>
        </div>
    )
}