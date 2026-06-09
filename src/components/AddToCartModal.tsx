import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import type { Product } from '../data/type';
import { useNavigate } from 'react-router';

const AddToCartModal = ({ item }: { item: Product }) => {
    const nav = useNavigate();
    const product = useContext(ProductContext);
    if (!product) return null;

    const discount = (item.price * item.discountPercentage) / 100;
    const discountPrice = item.price - discount;
    const totalItems = product.cartItems.reduce(
        (acc, i) => i.quantity + acc,
        0
    );

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className='w-90 bg-white shadow-xl flex flex-col'>
            {/* Header */}
            <div className='border-b border-gray-200 px-6 py-4 flex items-center gap-2'>
                <div className='h-2 w-2 rounded-full bg-green-500' />
                <span className='text-sm font-medium'>Added to cart</span>
                <span className='ml-auto text-sm text-gray-400'>
                    {totalItems} item(s) — € {product.total.toFixed(2)}
                </span>
            </div>

            {/* Product */}
            <div className='flex gap-4 px-6 py-5 border-b border-gray-200'>
                <div className='border border-gray-200 h-24 w-24 flex items-center justify-center shrink-0'>
                    <img
                        src={item.images[0]}
                        alt={item.title}
                        className='h-20 w-20 object-contain'
                    />
                </div>
                <div className='flex flex-col gap-1 justify-center'>
                    <div className='text-xs text-gray-400 uppercase tracking-wide'>
                        {item.category}
                    </div>
                    <div className='text-sm font-medium line-clamp-2'>
                        {item.title}
                    </div>
                    <div className='flex items-center gap-3 mt-1'>
                        <span className='text-gray-400 text-xs line-through'>
                            € {item.price}
                        </span>
                        <span className='text-blue-950 font-semibold text-sm'>
                            € {discountPrice.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Knoppen */}
            <div className='flex flex-col gap-3 px-6 py-5'>
                    <button
                        onClick={() => {
                            product.setAddToCartModal(false);
                            nav('/cart');
                        }}
                        className='w-full h-10 bg-blue-950 text-white text-sm font-semibold hover:bg-blue-900 active:translate-y-px transition-all cursor-pointer'>
                        Go to cart
                    </button>
                <button
                    onClick={() => {
                        product.setAddToCartModal(false);
                        nav('/');
                    }}
                    className='w-full h-10 border border-blue-950 text-blue-950 text-sm font-medium hover:bg-blue-50 transition-colors cursor-pointer'>
                    Continue shopping
                </button>
            </div>
        </div>
    );
};

export default AddToCartModal;
