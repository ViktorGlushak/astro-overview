import { IProduct } from "../types"
import { useState } from "preact/hooks"

interface ProductCardProps {
    product: IProduct
}

export default function ProductCard({ product }: ProductCardProps) {
    const [details, setDetails] = useState(false)
    const toggle = () => setDetails(prev => !prev)
    return (
        <div className="border rounded mb-2 p-3 flex flex-col justify-center items-center">
            <h2 className="text-lg text-center font-bold">{product.title}</h2>
            <p className="font-bold text-right">{product.price}р</p>
            <img src={product.image} class="w-1/6" />
            <a href={`product/${product.id}`}>Open product</a>
            <br />
            <button
                onClick={toggle}
                className="border rounded px-2 py-4 bg-green-800 text-white">
                Toggle Description
            </button>
            {details && <p>{product.description}</p>}
        </div>
    )
}