import type { RootState } from "../store";

export const selectCartProductsQuantity = (state: RootState) => state.cart.products.reduce((acc, curr) => 
acc + curr.quantidade, 0
)

export const selectTotalPrice = (state: RootState) => state.cart.products.reduce((acc, curr) => 
    acc + curr.price * curr.quantidade,0
)