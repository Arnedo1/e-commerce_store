import type { Product } from '../data/type';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoStarOutline } from 'react-icons/io5';
import { Link } from 'react-router';
import { ProductContext } from '../context/ProductContext';
import { useContext } from 'react';
import { IoMdHeart } from "react-icons/io";


const ProductCard = ({ item }: { item: Product }) => {
    const discount = (item.price * item.discountPercentage) / 100;
    const discountprice = item.price - discount;
    const product = useContext(ProductContext)

    return (
        <div className='flex flex-col w-60 m-4'>
            <div className='group relative border border-gray-200 h-64 flex justify-center items-center overflow-hidden'>
                <Link to={`/product/${item.id}`}>
                    <div className='absolute inset-0 group-hover:bg-black/5 transition-colors' />
                    <img
                        className='h-44 object-contain'
                        src={item.images[0]}
                        alt={item.title}
                    />
                </Link>
                <button className='absolute top-3 right-3 z-10'>
                    {product.favoritesItems.some((fav)=> fav.id === item.id) 
                    ?  <IoMdHeart
                    onClick={() => product.removeFavorites(item)}
                        className='size-5 text-red-600'
                    /> 
                    
                    : <IoMdHeartEmpty
                        onClick={() => product.addFavorites(item)}
                        className='size-5 text-gray-400 hover:text-red-400 transition-colors'
                    />}
                    
                </button>
            </div>

            <div className='pt-3 flex flex-col gap-1'>
                <div className='text-xs text-gray-400 uppercase tracking-wide'>
                    {item.category}
                </div>
                <div className='truncate font-medium text-sm'>
                    {item.title}
                </div>
                <div className='flex items-center gap-1 text-gray-400 text-xs'>
                    <IoStarOutline className='size-3' />
                    <span>{item.rating.toFixed(1)}</span>
                    <span className='ml-2'>{item.availabilityStatus}</span>
                </div>
                <div className='flex items-center gap-3 mt-1'>
                    <span className='font-semibold text-blue-950'>
                        € {discountprice.toFixed(2)}
                    </span>
                    <span className='text-gray-400 text-xs line-through'>
                        € {item.price}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;