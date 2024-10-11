import { createSlice } from "@reduxjs/toolkit";
import { products } from "../components/Products";

const initialState = {
    heyCart : [],
}

export const newCart = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const ides = products.map(item => item.id);
            const existingItem = state.heyCart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.count += 1;
                return;
            } 
            else if (ides.includes(action.payload.id)) {
                const data = {
                    id: action.payload.id,
                    imageUrl: action.payload.imageUrl,
                    name: action.payload.name,
                    price: action.payload.price,
                    count: 1
                };
                state.heyCart.push(data)
            } 
            else {
                console.log("Item not found in products", action.payload.id);
            }
            
        },
        subItem: (state, action) => {
            const existingItem = state.heyCart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.count -= 1;
            }
        },
        deleteItem: (state, action) => {
           const del = state.heyCart.find(item => item.id === action.payload.id);
            if(del){
                del.count = del.count* 0;
            }

        },
        clearCart: (state) => {
            state.heyCart = []
        }
    }
})

export const { addItem , subItem , deleteItem , clearCart } = newCart.actions;

export default newCart.reducer