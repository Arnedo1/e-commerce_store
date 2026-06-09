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
        <div className='flex items-center gap-5 py-4 border-b border-gray-200'>
            <div className='border h-50 w-40 flex justify-center items-center border-gray-200'>
                <img
                    src={item.images[0]}
                    alt={item.title}
                    className='h-40 w-40 object-contain'
                />
            </div>
            <div className='flex flex-col gap-1 flex-1'>
                <div className='flex justify-between'>
                    <div className='font-medium'>{item.title}</div>
                </div>

                <div className='font-light text-[15px] max-w-100 line-clamp-2'>
                    {item.description}
                </div>
                <div className='text-sm font-light text-gray-400 line-through'>
                    € {item.price}
                </div>
                <div className='font-light'>€ {discountPrice.toFixed(2)}</div>
                <div className='flex items-center gap-3'>
                    <div className='flex'>
                        <button
                            onClick={() => product.decreseProduct(item)}
                            className='h-8 w-8 bg-blue-50 flex items-center justify-center cursor-pointer hover:bg-blue-100'>
                            −
                        </button>
                        <span className='w-8 flex justify-center items-center'>
                            {item.quantity}
                        </span>
                        <button
                            onClick={() => product.addProduct(item, 1)}
                            className='h-8 w-8 bg-blue-50 flex items-center justify-center cursor-pointer hover:bg-blue-100'>
                            +
                        </button>
                        <button
                            onClick={() => product.removeProduct(item)}
                            className='text-gray-400 ml-5 hover:text-red-500 cursor-pointer text-sm'>
                            Verwijder
                        </button>
                    </div>
                </div>
                <div className='font-semibold mt-2'>
                    <span className='font-light text-[14px]'>Subtotal: </span>€{' '}
                    {subTotal.toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default CartItem;
