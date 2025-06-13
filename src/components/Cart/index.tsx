import { FiTrash } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { addItemQuantity,  deleteItemCart, removeItemQuantity } from "../../redux/cart/slice";
import { type ProdutoInCart } from "../../redux/cart/slice";

import { selectTotalPrice } from "../../redux/cart/cart.selectors";

export const Cart = () => {
    const products = useSelector((state: RootState) => state.cart.products);
    const totalPrices = useSelector(selectTotalPrice)
    const dispatch = useDispatch()

 

    function handleDeleteItem(id:string){
        console.log(id)
        dispatch(deleteItemCart(id))
    }

    function handleAddItemQuantity(id:string){
        dispatch(addItemQuantity(id))
    }

    function handleRemoveItemQuantity(id:string){
        dispatch(removeItemQuantity(id))
    }

    return (
        <div className="fixed top-0 right-0 h-full w-full max-w-sm lg:max-w-xl  bg-white shadow-lg z-50 p-4 overflow-auto">
            <h1 className="text-center pt-20 font-medium text-2xl">
                Meu Carrinho
            </h1>
            {products &&
                products.map((produto: ProdutoInCart) => (
            
                        <section
                            key={produto.id}
                            className="mt-8 flex justify-between items-center"
                        >
                            <article className="flex items-center justify-center px-8 gap-6">
                                <img
                                    src={produto.imageUrl}
                                    alt=""
                                    className="lg:h-60 lg:w-40 h-30 w-20 object-cover rounded-lg shadow-2xl"
                                />

                                <div className="flex flex-col w-full">
                                    <h1 className="text-xl font-medium lg:w-40 w-20 truncate whitespace-nowrap overflow-hidden">
                                        {produto.name}
                                    </h1>
                                    <p>
                                        {produto.price.toLocaleString("pt-br", {
                                            style: "currency",
                                            currency: "BRL",
                                        })}
                                    </p>
                                </div>
           
                            </article>

                            <div className="flex gap-6">
                                <div className="flex items-center gap-2 ">
                                    <button 
                                    onClick={() => handleRemoveItemQuantity(produto.id)}
                                    className="w-7 text-xl rounded-md flex items-center justify-center bg-purple-500 text-white cursor-pointer">
                                       -
                                    </button>

                                    <span>{produto.quantidade}</span>

                                    <button
                                    onClick={() => handleAddItemQuantity(produto.id)}
                                    className="w-7  text-xl rounded-md flex items-center justify-center bg-purple-500 text-white cursor-pointer">
                                        +
                                    </button>
                                </div>

                                <button onClick={() => handleDeleteItem(produto.id)}>
                                    <FiTrash size={28} />
                                </button>
                            </div>
                        </section>    
                      ))}

                      {products.length > 0 && (
                        <div className="fixed bottom-0 right-0 bg-white flex  items-center justify-between drop-shadow-2xl w-full max-w-sm lg:max-w-xl px-6 py-6 mt-20">
                        <h1 className="font-bold text-2xl">Valor Total: {totalPrices.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</h1>
                        <button className="border p-2 bg-purple-500 text-white rounded-md flex items-center justify-center cursor-pointer">Finalizar pedido</button>
                      </div>
                      )}
              </div>
        );
    };
