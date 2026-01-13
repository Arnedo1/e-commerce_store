interface ProductItemList {
    image: string;
    id: number;
    description: string;
    title: string;
    rating: { rate: number; count: number };
    category: string;
    price: number;
}
interface ProductCardProps {
    item: ProductItemList;
    key: number;
    cartList: CartItemList[];
    setCartList: (value: CartItemList[]) => void;
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

const ProductCard = (props: ProductCardProps) => {
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

    return (
        <div className='flex flex-col items-center'>
            <div className='h-70 w-70 md:w-60 m-4 mb-2 xl:w-50 overflow-hidden border pt-3 flex justify-center flex-col items-center gap-2 rounded-xl border-gray-300 relative'>
                <img
                    className='w-38'
                    src={props.item.image}
                    alt=''
                />
            </div>
            <button
                onClick={() => addToCart()}
                className='h-8 w-50 active:translate-y-[0.5px] cursor-pointer shadow shadow-black/20 rounded mb-2 text-white bg-orange-500 font-semibold'>
                In winkelwagen
            </button>
            <div className='flex flex-col px-5 w-60 justify-center items-center mb-5'>
                <div>{props.item.title}</div>
                <div className='flex'>
                    <span className='ml-2'>€{props.item.price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;