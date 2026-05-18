import Image from "next/image";

export function Product() {
    return (
        <div className="">
            <Image 
                width={200}
                height={300}
                alt=""
                src={"https://www.pinterest.fr/pin/290834088411746649/"}
            />
            <div className="flex flex-co">
                <p className="text-lg">{}</p>
                <p className="text-base">{}</p>
            </div>
        </div>
    )
}
