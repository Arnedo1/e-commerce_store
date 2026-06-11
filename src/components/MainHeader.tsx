import { useContext } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoPersonOutline, IoBagHandleOutline, IoHeartOutline } from 'react-icons/io5';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { ProductContext } from '../context/ProductContext';
import logo from '../assets/logo_winkel.jpg';

const MainHeader = () => {
    const auth = useContext(AuthContext);
    const product = useContext(ProductContext);
    if (!auth || !product) return null;

    return (
        <div className='h-16 md:h-20 sticky top-11 z-50 w-full bg-white flex justify-center items-center'>
            <div className='w-full max-w-7xl flex items-center justify-between px-4 lg:px-10 text-blue-950'>
                <Link to='/'>
                    <img src={logo} alt='logo' className='h-12 md:h-20' />
                </Link>

                <div className='hidden md:flex items-center bg-blue-50 min-w-60 lg:min-w-80 h-11 md:h-13 rounded-4xl px-2'>
                    <input
                        placeholder='Doorzoek onze catalogus'
                        className='h-8 w-full ml-4 focus:outline-none bg-transparent text-sm'
                        onChange={(e) => product.setSearchTerm(e.target.value)}
                        value={product.searchTerm}
                    />
                    <div className='w-9 h-9 rounded-4xl bg-blue-950 flex justify-center items-center cursor-pointer shrink-0'>
                        <IoIosSearch className='size-5 text-white' />
                    </div>
                </div>

                <div className='flex items-center gap-2 md:gap-4'>
                    <div className='relative'>
                        <div className='h-9 w-9 md:h-11 md:w-11 rounded-full flex items-center justify-center bg-blue-50'>
                            <IoPersonOutline
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (auth.currentUser) {
                                        auth.setUserModal(!auth.userModal);
                                    } else {
                                        auth.setInlogModal(true);
                                    }
                                }}
                                className='size-5 md:size-6 cursor-pointer'
                            />
                        </div>
                    </div>

                    <div className='relative'>
                        <div onClick={() => !auth.currentUser && auth.setInlogModal(true)}>
                            <Link to={auth.currentUser ? '/favorites' : ''}>
                                <div className='h-9 w-9 md:h-11 md:w-11 rounded-full flex items-center justify-center bg-blue-50'>
                                    <IoHeartOutline className='size-5 md:size-6 cursor-pointer' />
                                </div>
                                <div className='absolute -top-1 -right-1 h-4 w-4 md:h-5 md:w-5 rounded-full bg-gray-400 text-white text-xs flex justify-center items-center'>
                                    {product.favoritesItems.length}
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='relative'>
                        <div onClick={() => !auth.currentUser && auth.setInlogModal(true)}>
                            <Link to={auth.currentUser ? '/cart' : ''}>
                                <div className='h-9 w-9 md:h-11 md:w-11 rounded-full flex items-center justify-center bg-blue-50'>
                                    <IoBagHandleOutline className='size-5 md:size-6 cursor-pointer' />
                                </div>
                            </Link>
                            <div className='absolute -top-1 -right-1 h-4 w-4 md:h-5 md:w-5 rounded-full bg-gray-400 text-white text-xs flex justify-center items-center'>
                                {product.cartItems.reduce((acc, item) => item.quantity + acc, 0)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;