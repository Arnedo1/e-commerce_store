import { useContext, useEffect} from "react";
import { AuthContext } from "../context/AuthContext";
import { ProductContext } from "../context/ProductContext";
import { IoPersonOutline } from 'react-icons/io5';
import { Link } from "react-router";
import FavoritesItem from "../components/FavoritesItem";



const Favorites = () => {
    const auth = useContext(AuthContext);
    const product = useContext(ProductContext);
   

    useEffect(() => {
        product.getFavorites(product.itemList)
    }, [product])

    if (!auth || !product) return null;

    return (


        <div className='min-h-screen'>
            {/* Header */}
            <div className='sticky top-0 z-50 bg-white flex items-center w-full border-b border-gray-300'>
                <div className='flex justify-between items-center mx-auto w-314'>
                    <Link to='/'>
                        <img src='src/assets/logo_winkel.jpg' alt='logo' className='h-20' />
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

            {/* Content */}
            <div className='flex flex-col items-center'>
                <div className='max-w-314 px-7 mt-6'>
                    <div className='border-b border-gray-300 w-150 h-14 mb-6 text-2xl font-light'>
                        Favorites
                    </div>

 
                </div>
                <div className='flex-1'>
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