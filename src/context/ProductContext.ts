import { createContext } from "react"
import type { Product } from "../data/type"

export interface ProductContextType {
itemList:Product[]
setItemList:(value:Product[])=>void
filter:boolean
setFilter:(value:boolean)=>void
cartItems:Product[]
setCartItems:(value:Product[])=>void
addProduct:(value:Product, count:number)=>Promise<void>;
removeProduct:(value:Product)=>void
decreseProduct:(value:Product)=>Promise<void>;
addToCartModal:boolean
setAddToCartModal:(value:boolean)=>void
total:number
checkoutModal:boolean
setCheckoutModal:(value:boolean)=>void
filteredPrice:number
setFilteredPrice:(value:number)=>void
filteredRating:number
setFilteredRating:(value:number)=>void
filteredCategory:string
setFilteredCategory:(value:string)=>void
searchTerm:string
setSearchTerm:(value:string)=>void
favoritesItems:Product[]
setFavoritesItems:(value:Product[])=>void
getFavorites:(products:Product[])=>void
addFavorites:(value:Product)=>Promise<void>;
removeFavorites:(value:Product)=>Promise<void>
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined)
