export interface Product {
    title: string;
    category: string;
    price: number;
    description: string;
    images: string[];
    id: number;
    discountPercentage: number;
    availabilityStatus: string;
    rating: number;
    quantity?: number;
    brand: string;
    sku: string;
    warrantyInformation: string;
    shippingInformation: string;
    returnPolicy: string;
}
export interface User {
    id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone
}