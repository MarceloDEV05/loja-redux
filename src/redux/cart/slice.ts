import { createSlice,type PayloadAction } from "@reduxjs/toolkit";
 
export interface Produto{
    id:string;
    price: number;
    name: string;
    imageUrl: string;
}

export interface ProdutoInCart{
    id:string;
    price: number;
    name: string;
    imageUrl: string;
    quantidade: number;
}


interface CartState {
  products: ProdutoInCart[],
  totalPrice: number
}

export const initialState:CartState = {
  products: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
      reducers: {
        addItemCart: (state, action:PayloadAction<ProdutoInCart>) => {
          const produto = state.products.find((item) => item.id === action.payload.id)
          if(produto){
            produto.quantidade += action.payload.quantidade
          }else{
            state.products.push(action.payload)
          }

        },

        deleteItemCart: (state,action) => {
          state.products = state.products.filter(item => item.id !== action.payload)
        },

        addItemQuantity: (state, action:PayloadAction<string>) => {
          	const item = state.products.find(produto => produto.id === action.payload)
            if(item){
              item.quantidade += 1
            }
        },

        removeItemQuantity: (state,action:PayloadAction<string>) => {
          	const item = state.products.find(produto => produto.id === action.payload)
            if(item && item.quantidade > 1){
              item.quantidade -= 1
            }
        },
          sumTotalPrices: (state) => {
          const total = state.products.reduce((acc, produto) => {
            return acc + produto.price * produto.quantidade
          },0)
        state.totalPrice = total;
      }
}})

export const { addItemCart, deleteItemCart, addItemQuantity, removeItemQuantity, sumTotalPrices} = cartSlice.actions
export default cartSlice.reducer