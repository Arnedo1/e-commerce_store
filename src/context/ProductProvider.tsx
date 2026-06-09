/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState,useContext } from 'react';
import { ProductContext } from './ProductContext';
import type { ReactNode } from 'react';
import type { Product } from '../data/type';
import { AuthContext } from './AuthContext';

const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [itemList, setItemList] = useState<Product[]>([]);
    const [filter, setFilter] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [addToCartModal, setAddToCartModal] = useState<boolean>(false);
    const [checkoutModal, setCheckoutModal] = useState<boolean>(false);
    const [filteredPrice, setFilteredPrice] = useState<number>(null);
    const [filteredRating, setFilteredRating] = useState<number>(null);
    const [filteredCategory, setFilteredCategory] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [favoritesItems, setFavoritesItems] = useState<Product[]>([]);

    const auth = useContext(AuthContext)

    const total = cartItems.reduce((acc, item) => {
        const discount = (item.price * item.discountPercentage) / 100;
        const discountPrice = item.price - discount;
        return acc + discountPrice * (item.quantity ?? 1);
    }, 0);

    useEffect(() => {
        const fetchCart = async () => {
            if (!auth?.currentUser) return;
            try {
                const res = await fetch(`http://localhost:3000/cart?user_id=${auth.currentUser.id}`);
                const cartData = await res.json();
                console.log('cartData:', cartData);

                if (!Array.isArray(cartData)) return;

                const fullItems = cartData.map((cartItem) => {
                    const product = itemList.find(
                        (p) => p.id === cartItem.product_id
                    );
                    return { ...product, quantity: cartItem.quantity };
                });

                setCartItems(fullItems);
            } catch (error) {
                console.log(error);
            }
        };

        if (itemList.length > 0) fetchCart();
    }, [itemList]);

    useEffect(() => {
        if (auth?.currentUser && itemList.length > 0) {
            getFavorites(itemList)
        } else {
            setFavoritesItems([])
            setCartItems([])
        }
    }, [auth?.currentUser])

    const addProduct = async (product: Product, count: number) => {
        if (!auth?.currentUser) return;
        try {
            await fetch('http://localhost:3000/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: auth.currentUser.id,
                    product_id: product.id,
                    quantity: 1,
                }),
            });

            const exists = cartItems.find((item) => item.id === product.id);
            if (exists) {
                setCartItems(
                    cartItems.map((item) =>
                        item.id === product.id
                            ? {
                                  ...item,
                                  quantity: (item.quantity ?? 0) + count,
                              }
                            : item
                    )
                );
            } else {
                setCartItems([...cartItems, { ...product, quantity: count }]);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const decreseProduct = async (product: Product) => {
        if (!auth?.currentUser) return;
        try {
            await fetch('http://localhost:3000/cart', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: auth.currentUser.id,
                    product_id: product.id,
                }),
            });

            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
            if (product.quantity === 1) removeProduct(product);

        } catch (error) {
            console.error(error);
        }
    };

    const removeProduct = async (product: Product) => {
        if (!auth?.currentUser) return;
        try {
            await fetch('http://localhost:3000/cart', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: auth.currentUser.id, product_id: product.id }),
            });
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } catch (error) {
            console.log(error);
        }
    };

    const getFavorites = async (itemList: Product[]) => {
        if (!auth?.currentUser) return;
        try {
            const res = await fetch(
                `http://localhost:3000/favorites?user_id=${auth.currentUser.id}`
            );
            const data = await res.json();

            const fullItems = data
            .map((favItem) => itemList.find((p) => p.id === favItem.product_id))
            .filter(Boolean);

            setFavoritesItems(fullItems);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products');
                const data = await res.json();
                setItemList(data.products);
                await getFavorites(data.products)
            } catch (error) {
                console.log(error);
            }
        };
        fetchItems();
    }, []);

    const addFavorites = async (product: Product) => {
        if (!auth?.currentUser) return;
        try {
            const res = await fetch('http://localhost:3000/favorites', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: auth.currentUser.id,
                    product_id: product.id,
                }),
            });
            await res.json();
            getFavorites(itemList);
        } catch (error) {
            console.log(error);
        }
    };

    const removeFavorites = async (item: Product) => {
        if (!auth?.currentUser) return;
        try {
            const res = await fetch('http://localhost:3000/favorites', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: auth.currentUser.id,
                    item_id: item.id,
                }),
            });
            await res.json();
            getFavorites(itemList);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ProductContext.Provider
            value={{
                itemList,
                setItemList,
                filter,
                setFilter,
                cartItems,
                setCartItems,
                addProduct,
                removeProduct,
                decreseProduct,
                addToCartModal,
                setAddToCartModal,
                total,
                checkoutModal,
                setCheckoutModal,
                filteredPrice,
                setFilteredPrice,
                filteredRating,
                setFilteredRating,
                filteredCategory,
                setFilteredCategory,
                searchTerm,
                setSearchTerm,
                favoritesItems,
                setFavoritesItems,
                getFavorites,
                addFavorites,
                removeFavorites
            }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
