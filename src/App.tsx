import HeaderCategoryFilter from './components/HeaderCategoryFilter';
import MainHeader from './components/MainHeader';
import { BrowserRouter, Routes, Route } from 'react-router';
import ProductList from './components/ProductList';
import InlogModal from './components/InlogModal';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import InfoHeader from './components/InfoHeader';
import Register from './paginas/Register';
import Cart from './paginas/Cart';
import Product from './paginas/Product';
import { ProductContext } from './context/ProductContext';
import CheckoutModal from './components/CheckoutModal';
import Favorites from './paginas/Favorites';
import UserModal from './components/UserModal';

const App = () => {
    const auth = useContext(AuthContext);
    const product = useContext(ProductContext);
    if (!auth || !product) return null;

    return (
        <BrowserRouter>
            <div onClick={() => auth.setUserModal(false)}>
                {auth.inlogModal && (
                    <div
                        onClick={() => {
                            auth.setInlogModal(false);
                            auth.setInlogEmail('');
                            auth.setInlogPassword('');
                            auth.setUserExists(false);
                        }}
                        className='fixed inset-0 bg-black/70 z-100 flex justify-center items-center'>
                        <InlogModal />
                    </div>
                )}
                {product.checkoutModal && (
                    <div
                        onClick={() => product.setCheckoutModal(false)}
                        className='fixed inset-0 bg-black/70 z-100 flex justify-center items-center'>
                        <CheckoutModal />
                    </div>
                )}
                <div className={`fixed top-40 right-0 z-50 transition-transform duration-300 ${
                    auth.userModal ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <UserModal />
                </div>

                <Routes>
                    <Route
                        path='/'
                        element={
                            <div>
                                <InfoHeader />
                                <MainHeader />
                                <HeaderCategoryFilter />
                                <ProductList />
                            </div>
                        }
                    />
                    <Route
                        path='/register'
                        element={<Register />}
                    />
                    <Route
                        path='/product/:id'
                        element={<Product />}
                    />
                    <Route
                        path='/Cart'
                        element={<Cart />}
                    />
                    <Route
                        path='/favorites'
                        element={<Favorites />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;