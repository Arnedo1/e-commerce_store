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
                        <IoMdHeart
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                product.removeFavorites(item);
                            }}
                            className='size-6 text-red-600 cursor-pointer'
                        />
                    </div>

                    <div className='font-light text-[15px] max-w-100 line-clamp-2'>
                        {item.description}
                    </div>
                    <div className='text-sm font-light text-gray-400 line-through'>
                        € {item.price}
                    </div>
                    <div className='font-light'>
                        € {discountPrice.toFixed(2)}
                    </div>
                    <div className='flex items-center gap-3'></div>
                </div>
            </div>
        </Link>
    );
};

export default FavoritesItem;
