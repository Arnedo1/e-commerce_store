import { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { IoPersonOutline } from 'react-icons/io5';
import {
    MdOutlineStarPurple500,
    MdOutlineStarHalf,
    MdOutlineStarOutline,
} from 'react-icons/md';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import AddToCartModal from '../components/AddToCartModal';

const Product = () => {
    const { id } = useParams();
    const product = useContext(ProductContext);
    const auth = useContext(AuthContext);
    const [count, setCount] = useState<number>(0);

    if (!auth || !product) return null;

    const item = product.itemList.find((p) => p.id === Number(id));
    if (!item) return <div>Product niet gevonden</div>;

    const isFavorite = product.favoritesItems.some((fav) => fav.id === item.id);

    const discount = (item.price * item.discountPercentage) / 100;
    const discountprice = item.price - discount;

    const renderStars = (rating: number) => {
        return [1, 2, 3, 4, 5].map((star) => {
            if (star <= rating)
                return (
                    <MdOutlineStarPurple500
                        key={star}
                        className='text-yellow-400'
                    />
                );
            if (star - 0.5 <= rating)
                return (
                    <MdOutlineStarHalf
                        key={star}
                        className='text-yellow-400'
                    />
                );
            return (
                <MdOutlineStarOutline
                    key={star}
                    className='text-yellow-400'
                />
            );
        });
    };

    return (
        <div className='min-h-screen'>
            {product.addToCartModal && (
                <div
                    onClick={() => product.setAddToCartModal(false)}
                    className='fixed inset-0 bg-black/70 z-100 flex justify-center items-center'>
                    <AddToCartModal item={item} />
                </div>
            )}

            <div className='sticky top-0 z-50 bg-white flex items-center w-full border-b border-gray-300'>
                <div className='flex justify-between items-center mx-auto w-314'>
                    <Link to='/'>
                        <img
                            src='../src/assets/logo_winkel.jpg'
                            alt='logo'
                            className='h-20'
                        />
                    </Link>
                    <div className='h-11 w-11 rounded-full flex items-center justify-center bg-blue-50'>
                        <IoPersonOutline
                            onClick={(e) => {
                                e.stopPropagation();
                                if (auth.currentUser) {
                                    auth.setUserModal(!auth.userModal);
                                } else {
                                    auth.setInlogModal(true);
                                }
                            }}
                            className='size-6 cursor-pointer'
                        />
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-10 mb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-314'>
                    <div className='border h-135 w-100 flex justify-center items-center border-gray-200'>
                        <img
                            className='size-100 object-contain'
                            src={item.images[0]}
                            alt={item.title}
                        />
                    </div>

                    <div className='w-100 flex flex-col gap-4'>
                        <div>
                            <div className='text-sm text-gray-400 uppercase tracking-wide mb-1'>
                                {item.category}
                            </div>
                            <div className='text-2xl font-medium'>
                                {item.title}
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                            <div className='flex items-center'>
                                {renderStars(item.rating)}
                            </div>
                            <span className='text-sm text-gray-500'>
                                {item.rating.toFixed(1)}
                            </span>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='text-gray-400 line-through font-light text-sm'>
                                € {item.price}
                            </div>
                            <div className='text-2xl font-semibold text-blue-950'>
                                € {discountprice.toFixed(2)}
                            </div>
                            <div className='text-sm text-green-500 font-medium'>
                                -{item.discountPercentage}%
                            </div>
                        </div>

                        <div className='font-light line-clamp-3 text-gray-600 text-sm leading-relaxed'>
                            {item.description}
                        </div>

                        <div className='text-sm'>
                            <span className='text-gray-400'>
                                Availability:{' '}
                            </span>
                            <span
                                className={
                                    item.availabilityStatus === 'In Stock'
                                        ? 'text-green-500'
                                        : 'text-red-400'
                                }>
                                {item.availabilityStatus}
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='w-30 items-center justify-between flex bg-blue-50 h-10 px-4'>
                                <div
                                    className='text-gray-400 text-2xl cursor-pointer'
                                    onClick={() => {
                                        if (count > 0) {
                                            setCount(count - 1);
                                        }
                                    }}>
                                    -
                                </div>
                                <div>{count}</div>
                                <div
                                    className='text-gray-600 text-2xl cursor-pointer'
                                    onClick={() => {
                                        if (count < 10) {
                                            setCount(count + 1);
                                        }
                                    }}>
                                    +
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    if (!count) {
                                        product.addProduct(item, 1);
                                    } else {
                                        product.addProduct(item, count);
                                    }
                                    setCount(0);
                                    product.setAddToCartModal(true);
                                }}
                                className='flex-1 h-10 bg-blue-950 text-white font-semibold hover:bg-blue-900 active:translate-y-px transition-all cursor-pointer text-sm'>
                                ADD TO CART
                            </button>
                        </div>

                        <button
                            onClick={() =>
                                isFavorite
                                    ? product.removeFavorites(item)
                                    : product.addFavorites(item)
                            }
                            className='w-full h-10 border rounded-4xl border-blue-950 text-blue-950 flex items-center justify-center gap-2 hover:bg-blue-50 cursor-pointer transition-colors'>
                            {isFavorite ? (
                                <IoMdHeart className='size-5 text-red-500' />
                            ) : (
                                <IoMdHeartEmpty className='size-5' />
                            )}
                            <span className='font-medium text-sm'>
                                {isFavorite
                                    ? 'Added to wishlist'
                                    : 'Add to wishlist'}
                            </span>
                        </button>

                        <div className='border-t border-gray-200 pt-4 flex flex-col gap-2 text-sm text-gray-500 font-light'>
                            <div>
                                <span className='text-gray-700 font-medium'>
                                    Brand:{' '}
                                </span>
                                {item.brand}
                            </div>
                            <div>
                                <span className='text-gray-700 font-medium'>
                                    SKU:{' '}
                                </span>
                                {item.sku}
                            </div>
                            <div>
                                <span className='text-gray-700 font-medium'>
                                    Warranty:{' '}
                                </span>
                                {item.warrantyInformation}
                            </div>
                            <div>
                                <span className='text-gray-700 font-medium'>
                                    Shipping:{' '}
                                </span>
                                {item.shippingInformation}
                            </div>
                            <div>
                                <span className='text-gray-700 font-medium'>
                                    Return policy:{' '}
                                </span>
                                {item.returnPolicy}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
