import { AiOutlineDelete } from 'react-icons/ai';

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
interface CartItemProps {
    item: CartItemList;
    cartList: CartItemList[];
    setCartList: (value: CartItemList[]) => void;
}

const CartItem = (props: CartItemProps) => {
    const total = props.item.quantity * props.item.price;

    const addToCart = () => {
        const exists = props.cartList.find((item) => item.id === props.item.id);
        if (exists) {
            props.setCartList(
                props.cartList.map((item) =>
                    item.id === props.item.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            props.setCartList([
                ...props.cartList,
                { ...props.item, quantity: 1 },
            ]);
        }
    };

    const decreaseCart = () => {
        const exists = props.cartList.find((item) => item.id === props.item.id);
        if (exists && exists.quantity > 1) {
            props.setCartList(
                props.cartList.map((item) =>
                    item.id === props.item.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
        } else {
            props.setCartList(
                props.cartList.filter((item) => item.id !== props.item.id)
            );
        }
    };

    const onDelete = () => {
        props.setCartList(
            props.cartList.filter((item) => item.id !== props.item.id)
        );
    };

    return (
        <div className='flex p-5 items-center lg:justify-between lg:w-180 justify-between sm:justify-center border-b ml-5 border-gray-200'>
            <div className='flex flex-col items-center gap-2'>
                <img
                    className='w-13 mx-4'
                    src={props.item.image}
                    alt=''
                />
                {/* mobilce cart img and quantity + - */}
                <div className='w-30 lg:hidden flex items-center justify-between px-5 border-gray-300 h-12 lg:border'>
                    <div
                        onClick={() => decreaseCart()}
                        className='cursor-pointer'>
                        -
                    </div>
                    <div>{props.item.quantity}</div>
                    <div
                        onClick={() => addToCart()}
                        className='cursor-pointer'>
                        +
                    </div>
                </div>
            </div>
            <div>
                {/* mobile cartitem price, title and delete */}
                <div className='lg:hidden flex flex-col max-w-70 sm:w-100 sm:ml-20 gap-1 ml-3 wrap-break-word'>
                    <div>{props.item.title}</div>
                    <div className='flex justify-between mr-5'>
                        <div>€ {total.toFixed(2)}</div>
                        <div
                            onClick={() => onDelete()}
                            className='cursor-pointer'>
                            <AiOutlineDelete className='size-6 mr-5' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-4 hidden lg:block w-80'>
                <div>{props.item.title}</div>
                <div className='hidden lg:block'>
                    <span className='mr-1'>€</span>
                    {props.item.price.toFixed(2)}
                </div>
            </div>
            <div className='w-30 hidden lg:flex items-center justify-between px-5 border-gray-300 h-12 border'>
                <div
                    onClick={() => decreaseCart()}
                    className='cursor-pointer'>
                    -
                </div>
                <div>{props.item.quantity}</div>
                <div
                    onClick={() => addToCart()}
                    className='cursor-pointer '>
                    +
                </div>
            </div>
            <div className='hidden lg:block'>€ {total.toFixed(2)}</div>
            <div
                onClick={() => onDelete()}
                className='cursor-pointer hidden lg:block'>
                <AiOutlineDelete className='size-6' />
            </div>
        </div>
    );
};

export default CartItem;
