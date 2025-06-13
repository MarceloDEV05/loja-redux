
import { Cart } from "../../components/Cart"
import { Container } from "../../components/Container"
import products from "../../produtos/produtos"
import { type Produto } from "../../redux/cart/slice"
import { addItemCart } from "../../redux/cart/slice"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../redux/store"
import { closeCart } from "../../redux/cartUI/slice"


export const Home = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector((state: RootState) => state.cartUI.isOpen);

    function handleAddCart(produto: Produto){
     dispatch(addItemCart({
        ...produto,
        quantidade:1
     }))
    }


    return (
        
        <div className="w-full flex flex-col h-full pb-6 bg-white px-16">
            <h1 className="text-3xl font-medium text-center pt-25 mb-15">Moda Feminina</h1>

            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((produto) => (
            <section key={produto.id} className="mt-4 hover:scale-105 duration-300">
                <article>
                    <img src={produto.imageUrl} alt=""
                    className="w-full h-100 object-cover rounded-lg shadow-2xl "
                    />
                </article>
                <div>
                    <h1>{produto.name}</h1>
                    <p>{produto.price.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</p>
                </div>

                <button onClick={() => handleAddCart(produto)} className="flex w-full justify-center items-center bg-purple-500 p-2 text-white rounded-md">Adicionar ao carrinho</button>
            </section>
            ))}
            </main>

            { isOpen  && <>
                <div className="fixed inset-0 bg-black/70 z-40 " onClick={() => dispatch(closeCart())}></div>

             <Cart /> 
             </>}
        </div>
    )
}