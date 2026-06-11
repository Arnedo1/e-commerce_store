import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { ProductContext } from "../context/ProductContext";
import { IoPersonOutline } from 'react-icons/io5';
import { Link } from "react-router";
import FavoritesItem from "../components/FavoritesItem";
import logo from '../assets/logo_winkel.jpg';

const Favorites = () => {
    const auth = useContext(AuthContext);
    const product = useContext(ProductContext);

    useEffect(() => {
        product.getFavorites(product.itemList)
    }, [product])

    if (!auth || !product) return null;

    return (
        <div className='min-h-screen'>
            <div className='sticky top-0 z-50 bg-white flex items-center w-full border-b border-gray-300'>
                <div className='flex justify-between items-center mx-auto w-full max-w-7xl px-4'>
                    <Link to='/'><img src={logo} alt='logo' className='h-12 md:h-20' /></Link>
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
            </div>

            <div className='flex flex-col items-center'>
                <div className='w-full max-w-7xl px-4 md:px-7 mt-6'>
                    <div className='border-b border-gray-300 h-14 mb-6 text-xl md:text-2xl font-light'>
                        Favorites
                    </div>
                    {product.favoritesItems.length === 0 ? (
                        <div className='text-gray-400 font-light'>Your favorites list is empty</div>
                    ) : (
                        product.favoritesItems.map((item) => (
                            <FavoritesItem item={item} key={item.id} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Favorites;