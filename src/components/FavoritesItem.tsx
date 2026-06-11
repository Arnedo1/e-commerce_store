import { useContext } from 'react';
import type { Product } from '../data/type';
import { ProductContext } from '../context/ProductContext';
import { IoMdHeart } from 'react-icons/io';
import { Link } from 'react-router';

const FavoritesItem = ({ item }: { item: Product }) => {
    const product = useContext(ProductContext);
    if (!product) return null;
    const discount = (item.price * item.discountPercentage) / 100;
    const discountPrice = item.price - discount;

    return (
        <Link to={`/product/${item.id}`}>
            <div className='flex items-center gap-3 md:gap-5 py-4 border-b border-gray-200'>
                <div className='border h-28 w-24 md:h-50 md:w-40 flex justify-center items-center border-gray-200 shrink-0'>
                    <img src={item.images[0]} alt={item.title} className='h-24 w-24 md:h-40 md:w-40 object-contain' />
                </div>
                <div className='flex flex-col gap-1 flex-1 min-w-0'>
                    <div className='flex justify-between items-start'>
                        <div className='font-medium text-sm md:text-base truncate pr-2'>{item.title}</div>
                        <IoMdHeart
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); product.removeFavorites(item); }}
                            className='size-5 md:size-6 text-red-600 cursor-pointer shrink-0'
                        />
                    </div>
                    <div className='font-light text-xs md:text-[15px] line-clamp-2 text-gray-600'>{item.description}</div>
                    <div className='text-xs font-light text-gray-400 line-through'>€ {item.price}</div>
                    <div className='font-light text-sm md:text-base'>€ {discountPrice.toFixed(2)}</div>
                </div>
            </div>
        </Link>
    );
};

export default FavoritesItem;