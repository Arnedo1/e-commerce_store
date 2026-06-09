import { useContext } from 'react';
import { IoIosSearch } from 'react-icons/io';
import {
    IoPersonOutline,
    IoBagHandleOutline,
    IoHeartOutline,
} from 'react-icons/io5';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { ProductContext } from '../context/ProductContext';

const MainHeader = () => {
    const auth = useContext(AuthContext);
    const product = useContext(ProductContext);
    if (!auth || !product) return null;

    return (
        <div className='h-20 sticky top-11 z-50 w-full bg-white flex justify-center items-center'>
            <div className='w-314 flex items-center justify-between px-4 lg:px-10 text-blue-950'>
                
                <Link to='/'>
                    <img
                        src='src/assets/logo_winkel.jpg'
                        alt='logo'
                        className='h-20'
                    />
                </Link>

                <div className='hidden md:flex items-center bg-blue-50 min-w-80 h-13 rounded-4xl px-2'>
                    <input
                        placeholder='Doorzoek onze catalogus'
                        className='h-8 w-80 ml-4 focus:outline-none bg-transparent'
                        onChange={(e) => product.setSearchTerm(e.target.value)}
                        value={product.searchTerm}
                    />
                    <div className='w-10 h-10 rounded-4xl bg-blue-950 flex justify-center items-center cursor-pointer'>
                        <IoIosSearch className='size-6 text-white' />
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    
                    <div className='relative'>
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

                    <div className='relative'>
                        <Link to='/favorites'>
                            <div className='h-11 w-11 rounded-full flex items-center justify-center bg-blue-50'>
                                <IoHeartOutline className='size-6 cursor-pointer' />
                            </div>
                            <div className='absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gray-400 text-white text-xs flex justify-center items-center'>
                                {product.favoritesItems.length}
                            </div>
                        </Link>
                    </div>

                    <div className='relative'>
                        <Link to='/Cart'>
                            <div className='h-11 w-11 rounded-full flex items-center justify-center bg-blue-50'>
                                <IoBagHandleOutline className='size-6 cursor-pointer' />
                            </div>
                        </Link>
                        <div className='absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gray-400 text-white text-xs flex justify-center items-center'>
                            {product.cartItems.reduce(
                                (acc, item) => item.quantity + acc,
                                0
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;