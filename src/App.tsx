import InfoBar from './InfoBar';
import MainHeader from './MainHeader';
import ProductList from './ProductList';
import Filter from './Filter';
import CategoryNav from './CategoryNav';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Cart from './Cart';
import { useState, useEffect } from 'react';
import RegisterModal from './RegisterModal';

interface CartItemList {
    image: string;
    id: number;
    description: string;
    title: string;
    rating: { rate: number; count: number };
    category: string;
    price: number;
    quantity: number;
}

const App = () => {
    const [priceFilter, setPriceFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const [cartList, setCartList] = useState<CartItemList[]>(() => {
        const saved = localStorage.getItem('itemlist');
        return saved ? JSON.parse(saved) : [];
    });

    const [priceTotal, setPriceTotal] = useState<number>(0);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [termFilter, setTermFilter] = useState<string>('');
    const [registreren, setRegistreren] = useState<boolean>(false);
    const [menuMobile, setMenuMobile] = useState<boolean>(false);
    const [mobileFilter, setMobileFilter] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (registreren) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [registreren]);

    return (
        <BrowserRouter basename='/e-commerce_store/'>
            {registreren && (
                <RegisterModal
                    registreren={registreren}
                    setRegistreren={setRegistreren}
                />
            )}

            <Routes>
                <Route
                    path='/'
                    element={
                        <div className='bg-white'>
                            <div className='hidden md:block'>
                                <InfoBar />
                            </div>
                            <MainHeader
                                totalItems={totalItems}
                                setTotalItems={setTotalItems}
                                cartList={cartList}
                                priceTotal={priceTotal}
                                setPriceTotal={setPriceTotal}
                                termFilter={termFilter}
                                setTermFilter={setTermFilter}
                                registreren={registreren}
                                setRegistreren={setRegistreren}
                            />
                            <CategoryNav
                                categoryFilter={categoryFilter}
                                setCategoryFilter={setCategoryFilter}
                                menuMobile={menuMobile}
                                setMenuMobile={setMenuMobile}
                                termFilter={termFilter}
                                setTermFilter={setTermFilter}
                            />
                            <div className='p-4 gap-6 flex justify-center'>
                                <div className='flex'>
                                    <div className='hidden lg:block'>
                                        <Filter
                                            ratingFilter={ratingFilter}
                                            setRatingFilter={setRatingFilter}
                                            priceFilter={priceFilter}
                                            setPriceFilter={setPriceFilter}
                                            menuMobile={menuMobile}
                                            setMenuMobile={setMenuMobile}
                                            mobileFilter={mobileFilter}
                                            setMobileFilter={setMobileFilter}
                                        />
                                    </div>
                                    <div className='lg:w-200 xl:w-240'>
                                        <ProductList
                                            priceFilter={priceFilter}
                                            setPriceFilter={setPriceFilter}
                                            cartList={cartList}
                                            setCartList={setCartList}
                                            ratingFilter={ratingFilter}
                                            categoryFilter={categoryFilter}
                                            setCategoryFilter={
                                                setCategoryFilter
                                            }
                                            termFilter={termFilter}
                                            mobileFilter={mobileFilter}
                                            setMobileFilter={setMobileFilter}
                                            setRatingFilter={setRatingFilter}
                                            loading={loading}
                                            setLoading={setLoading}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                />
                <Route
                    path='/cart'
                    element={
                        <Cart
                            totalItems={totalItems}
                            setTotalItems={setTotalItems}
                            cartList={cartList}
                            priceTotal={priceTotal}
                            setPriceTotal={setPriceTotal}
                            setCartList={setCartList}
                            categoryFilter={categoryFilter}
                            setCategoryFilter={setCategoryFilter}
                            termFilter={termFilter}
                            setTermFilter={setTermFilter}
                            registreren={registreren}
                            setRegistreren={setRegistreren}
                            menuMobile={menuMobile}
                            setMenuMobile={setMenuMobile}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
