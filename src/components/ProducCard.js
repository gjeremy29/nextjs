import Image from "next/image";
import Link from "next/link";
import Raiting from "./Raiting";
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart';

export default function ProductCard({ product, index }) {
    const { addItem } = useShoppingCart();

    function onAddToCart(event) {
        event.preventDefault();
        addItem(product)
    }


    return(
        <Link href={'/products/${product.id}'} 
        className="border-2 rounded-md group overflow-hidden">

            <div className="relative w-full h-64">
                <Image 
                priority={index === 0} 
                src={product.image} 
                alt={product.name} 
                fill 
                sizes="100%"
                style={{
                    objectFit: "contain",
                }}
                />
            </div>

            <div className="p-6 bg-white">
                <p className="font-semibold text-lg">{product.name}</p>
                <Raiting />
                <div className="mt-4 flex items-center justify-between space-x-2">
                    <div>
                        <p className="text-gray-500">Price</p>
                        <p className="text-lg font-semibold">{formatCurrencyString({
                            currency: product.currency,
                            value: product.price,
                        })}</p>
                    </div>
                    <button onClick={onAddToCart} className="border rounded-lg py-1 px-4">Add to Cart</button>
                </div>
            </div>
        </Link>
    )
}