import { Link } from "react-router-dom";
import { FiLogIn, FiShoppingCart, FiUser } from "react-icons/fi";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { selectCartProductsQuantity } from "../../redux/cart/cart.selectors";
import { toggleCart } from "../../redux/cartUI/slice";

export const Header = () => {
    const quantityCartItens = useSelector(selectCartProductsQuantity);
    const { user } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.cartUI.isOpen);
    const products = useSelector((state: RootState) => state.cart.products);

    return (
        <header className="flex w-full justify-between top-0 px-8 h-16 bg-gray-900 items-center fixed z-99">
            <Link to="/">
                <h1 className="text-2xl font-bold text-white">
                    Store<strong className="text-purple-700">REDUX</strong>
                </h1>
            </Link>

            <div className="flex gap-8 justify-center items-center">
                <button className="flex" onClick={() => dispatch(toggleCart())}>
                    <FiShoppingCart size={26} color="#fff" />
                    {products.length > 0 && (
                        <span className="text-white rounded-full h-5 w-5 flex items-center justify-center bg-purple-500">
                            {quantityCartItens}
                        </span>
                    )}
                    {isOpen ? false : true}
                </button>

                {user ? (
                    <Link to="/profile" className="flex items-center gap-2">
                        <button>
                            <FiUser size={28} color="#ffff" />
                        </button>
                        <h1 className="text-white">
                            Olá, {user.nome.split(" ")[0]}
                        </h1>
                    </Link>
                ) : (
                    <Link to="/login">
                        <button className="flex items-center gap-2">
                            <FiLogIn size={28} color="#ffff" />
                        </button>
                    </Link>
                )}
            </div>
        </header>
    );
};
