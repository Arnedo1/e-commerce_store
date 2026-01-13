import { Link } from 'react-router-dom';
import InfoBar from './InfoBar';
import CartItem from './CartItem';
import MainHeader from './MainHeader';
import CategoryNav from './CategoryNav';
import { IoMdArrowDropleft } from 'react-icons/io';
import { MdDone } from 'react-icons/md';
import { useState } from 'react';
import CheckoutModal from './CheckoutModal';

interface CartProps {
    totalItems: number;
    setTotalItems: (value: number) => void;
    cartList: CartItemList[];
    priceTotal: number;
    setPriceTotal: (value: number) => void;
    setCartList: (value: CartItemList[]) => void;
    categoryFilter: string;
    setCategoryFilter: (value: string) => void;
    termFilter: string;
    setTermFilter: (value: string) => void;
    registreren: boolean;
    setRegistreren: (value: boolean) => void;
    menuMobile:boolean
    setMenuMobile:(value:boolean)=>void
}

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

const Cart = (props: CartProps) => {
    const [checkout, setCheckout] = useState<boolean>(false);
    const verzending = 7.5;
    const totlalUnderLine = verzending + props.priceTotal;

    return (
        <div>
            {checkout && (
                <CheckoutModal
                    checkout={checkout}
                    setCheckout={setCheckout}
                />
            )}
           <div className='hidden md:block'>
                                <InfoBar />
                            </div>
            <MainHeader
                totalItems={props.totalItems}
                setTotalItems={props.setTotalItems}
                cartList={props.cartList}
                priceTotal={props.priceTotal}
                setPriceTotal={props.setPriceTotal}
                termFilter={props.termFilter}
                setTermFilter={props.setTermFilter}
                registreren={props.registreren}
                setRegistreren={props.setRegistreren}
            />
            <CategoryNav
                                                categoryFilter={props.categoryFilter}
                                                setCategoryFilter={props.setCategoryFilter}
                                                menuMobile={props.menuMobile}
                                                setMenuMobile={props.setMenuMobile}
                                                termFilter={props.termFilter}
                                                setTermFilter={props.setTermFilter}
            />
            <div className='lg:px-10 max-w-314 mx-auto px-auto flex flex-col justify-center lg:flex-row gap-7 py-5'>
                <div className=''>
                    <div className='lg:border rounded border-gray-200 h-auto'>
                        <div className=' pl-5 lg:flex hidden items-center text-2xl w-full rounded-t h-13 bg-gray-200'>
                            Winkelwagen
                        </div>
                        {props.cartList.length < 1 ? (
                            <div className='flex justify-center font-bold my-5'>
                                YOUR CART IS EMPTY
                            </div>
                        ) : (
                            props.cartList.map((item) => (
                                <CartItem
                                    setCartList={props.setCartList}
                                    cartList={props.cartList}
                                    item={item}
                                />
                            ))
                        )}
                    </div>
                    <div className=' w-54 mx-auto lg:mx-2 flex justify-center mt-4 items-center py-2 border'>
                        <span>
                            <IoMdArrowDropleft className='size-6' />
                        </span>
                        <Link to={'/'}>Doorgaan met winkelen</Link>
                    </div>
                </div>
                <div className='mx-auto flex flex-col items-center'>
                    <div className='border text-blue-950 font-light w-70 lg:w-70 text-[16px] rounded-t xl:w-100 sm:w-100 border-gray-200 px-6 pt-6 flex flex-col gap-2 '>
                        <div className='flex justify-between'>
                            <div>{props.totalItems} item</div>
                            <div>€ {props.priceTotal.toFixed(2)}</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>Verzending</div>
                            <div>€ {verzending.toFixed(2)}</div>
                        </div>
                        <div className='flex h-8 items-center  font-semibold bg-gray-300 justify-between'>
                            <div>Totaal (incl. btw)</div>
                            <div>€ {totlalUnderLine.toFixed(2)}</div>
                        </div>
                    </div>
                    <div className='text-red-600 border-l border-r w-70  lg:w-70 sm:w-100 xl:w-100  flex justify-center items-center border-gray-200 h-15'>
                        Heeft u een promotiecode?
                    </div>
                    <div className='h-20 bg-gray-200 w-70 xl:w-100 sm:w-100 lg:w-70 flex justify-center items-center rounded-b'>
                        <button
                            onClick={() => setCheckout(true)}
                            className='xl:h-13 h-10 rounded-md cursor-pointer text-white text-xl w-60 xl:w-85 bg-orange-400/90'>
                            Doorgaan naar betalen
                        </button>
                    </div>
                    <div className='flex pt-20 gap-3 flex-col'>
                        <div className='flex'>
                            <MdDone className='text-green-600 size-6' />
                            <span className='text-blue-950'>
                                Veilig online betalen of achteraf op factuur
                            </span>
                        </div>
                        <div className='flex'>
                            <MdDone className='text-green-600 size-6' />
                            <span className='text-blue-950'>
                                Gratis retourneren
                            </span>
                        </div>
                        <div className='flex'>
                            <MdDone className='text-green-600 size-6' />
                            <span className='text-blue-950'>
                                14 dagen bedenktijd
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;