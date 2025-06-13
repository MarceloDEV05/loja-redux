import { Link } from "react-router-dom"
import { Container } from "../../components/Container"

import { FiUser, FiLogOut, FiSave } from "react-icons/fi"

import { useSelector, useDispatch } from "react-redux"
import {type RootState } from "../../redux/store"

export const Perfil = () => {
     const { user } = useSelector((state: RootState) => state.user);

    return(
        <Container>
            <div className="flex flex-col items-center justify-center w-full h-full">
                
                { user && (
                    <>
                    <section className="mt-10 border-2 w-10 h-10 rounded-full flex items-center justify-center">
                        <FiUser size={30} />
                    </section>
                    <section className="flex flex-col items-center justify-center text-gray-500 leading-4 mt-1">
                            <h1>{user.nome}</h1>
                            <p>{user.email}</p>
                        </section>
                    </>
                )}

                <form className="flex flex-col w-full justify-center mt-5">

                    <h2 className="text-center font-bold text-md">Meus Dados</h2>

                    <div className="flex items-center justify-center w-full gap-2 mt-3">
                    <input type="date" placeholder="data" className="border-2 border-gray-300 rounded-md w-full flex-1 px-2" />
                    <input type="text" placeholder="insira o CPF" className="border-2 border-gray-300 rounded-md w-full flex-1 px-2" />
                    </div>
                    
                    <div className="flex items-center justify-center w-full gap-2 mt-3">
                    <input type="text" placeholder="Insira o CEP" className="border-2 border-gray-300 rounded-md w-full flex-1 px-2" />
                    <input type="text" placeholder="Insira o Telefone" className="border-2 border-gray-300 rounded-md w-full flex-1 px-2" />
                    </div>
                    <div className="flex flex-col w-full gap-2 mt-3">
                        <input type="text" placeholder="Insira seu Endereço" className="border-2 px-2 border-gray-300 rounded-md" />
                        <input type="text" placeholder="Insira o numero da residencia" className="border-2 border-gray-300 rounded-md px-2"/>
                    </div>
                    

                    <button className="mt-5 flex items-center justify-center text-white gap-2 rounded-md bg-purple-500 p-1">
                        Salvar Dados <FiSave/>
                        </button>

                    <Link to='/login'>
                    <button className="mt-3 flex items-center justify-center w-full gap-2 p-1 rounded-md bg-red-500 text-white">Sair da conta <FiLogOut/>
                    </button>
                    </Link>
                   
                </form>
               
               <div className="absolute left-4 bottom-2 ">
                    
               </div>
            </div>

        </Container>
    )
}