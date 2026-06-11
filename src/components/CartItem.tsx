import { useContext } from 'react';
import type { Product } from '../data/type';
import { ProductContext } from '../context/ProductContext';

const CartItem = ({ item }: { item: Product }) => {
    const product = useContext(ProductContext);
    if (!product) return null;
    const discount = (item.price * item.discountPercentage) / 100;
    const discountPrice = item.price - discount;
    const subTotal = discountPrice * item.quantity;

    return (
        <div className='flex items-center gap-3 md:gap-5 py-4 border-b border-gray-200'>
            <div className='border h-28 w-24 md:h-50 md:w-40 flex justify-center items-center border-gray-200 shrink-0'>
                <img src={item.images[0]} alt={item.title} className='h-24 w-24 md:h-40 md:w-40 object-contain' />
            </div>
            <div className='flex flex-col gap-1 flex-1 min-w-0'>
                <div className='font-medium text-sm md:text-base truncate'>{item.title}</div>
                <div className='font-light text-xs md:text-[15px] line-clamp-2 text-gray-600'>{item.description}</div>
                <div className='text-xs font-light text-gray-400 line-through'>€ {item.price}</div>
                <div className='font-light text-sm'>€ {discountPrice.toFixed(2)}</div>
                <div className='flex items-center gap-3'>
                    <div className='flex'>
                        <button onClick={() => product.decreseProduct(item)}
                            className='h-7 w-7 md:h-8 md:w-8 bg-blue-50 flex items-center justify-center cursor-pointer hover:bg-blue-100 text-sm'>−</button>
                        <span className='w-7 md:w-8 flex justify-center items-center text-sm'>{item.quantity}</span>
                        <button onClick={() => product.addProduct(item, 1)}
                            className='h-7 w-7 md:h-8 md:w-8 bg-blue-50 flex items-center justify-center cursor-pointer hover:bg-blue-100 text-sm'>+</button>
                        <button onClick={() => product.removeProduct(item)}
                            className='text-gray-400 ml-3 md:ml-5 hover:text-red-500 cursor-pointer text-xs md:text-sm'>Verwijder</button>
                    </div>
                </div>
                <div className='font-semibold mt-1 text-sm'>
                    <span className='font-light text-xs md:text-[14px]'>Subtotal: </span>€ {subTotal.toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default CartItem;