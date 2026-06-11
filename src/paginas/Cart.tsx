import { Link } from 'react-router';
import { IoPersonOutline } from 'react-icons/io5';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ProductContext } from '../context/ProductContext';
import CartItem from '../components/CartItem';
import logo from '../assets/logo_winkel.jpg';

const Cart = () => {
    const auth = useContext(AuthContext);
    const product = useContext(ProductContext);
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
                        Shopping cart
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 lg:gap-10 items-start'>
                        <div className='flex-1'>
                            {product.cartItems.length === 0 ? (
                                <div className='text-gray-400 font-light'>Your cart is empty</div>
                            ) : (
                                product.cartItems.map((item) => <CartItem item={item} key={item.id} />)
                            )}
                        </div>
                        <div className='w-full border border-gray-200 p-6 flex flex-col gap-4'>
                            <div className='text-lg font-medium'>Order summary</div>
                            <div className='flex justify-between text-sm text-gray-500'>
                                <span>Items ({product.cartItems.reduce((acc, item) => item.quantity + acc, 0)})</span>
                                <span>€ {product.total.toFixed(2)}</span>
                            </div>
                            <div className='flex justify-between text-sm text-gray-500'>
                                <span>Shipping</span>
                                <span className='text-green-500'>Free</span>
                            </div>
                            <div className='border-t border-gray-200 pt-4 flex justify-between font-semibold'>
                                <span>Total</span>
                                <span>€ {product.total.toFixed(2)}</span>
                            </div>
                            <button
                                onClick={() => product.setCheckoutModal(true)}
                                className='h-11 w-full bg-blue-950 text-white font-semibold hover:bg-blue-900 active:translate-y-px transition-all cursor-pointer'>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;