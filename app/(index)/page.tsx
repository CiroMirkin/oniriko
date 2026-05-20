import { cn } from "@/lib";
import { ProductList } from "./ProductList";
import { titleFont } from "@/lib/font";

export default function Home() {
  return (
    <>
      <header className="w-full py-4 px-6 bg-primary text-white">
        <span className={cn("text-xl font-bold", titleFont.className)}>oniri-ko</span>
      </header>
      <div className="">
        <ProductList />
        
      </div>
    </>
  )
}

