import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { useState } from "react"
import { useDispatch } from "react-redux"

import { createUser } from "../../redux/user/slice"

export const Login = () => {
  const dispath = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const handleLogin = () => {
      dispath(createUser({
        nome: name,
        email: email,
        senha: password
      }))

      navigate('/', { replace: true})
    }



    return(
        <div className=" flex flex-col w-full h-screen items-center justify-center px-4 ">
            
          <div className="flex w-full items-center max-w-3xl h-90 justify-center drop-shadow-2xl">
            <div className="bg-black h-full flex w-full items-center justify-center rounded-l-2xl">
            <Link to="/">
              <h1 className="text-2xl font-bold text-white">Store<strong className="text-purple-700">REDUX</strong></h1>
            </Link>
            </div>
            <form className="bg-white w-full gap-8 flex flex-col h-full px-6 rounded-r-2xl">

             <h1 className="text-center pt-5 text-black font-medium text-2xl ">Faça o Login</h1>

            <div className="flex flex-col mt-2 gap-4">


             <input type="text"
              placeholder="Digite seu nome"
              className="border-b-2 w-full rounded-md p-2 border-gray-300"
              required
              value={name}
              onChange={ (e) => setName(e.target.value)}
             />
             <input type="email"
              placeholder="Digite seu email"
              className="border-b-2 w-full rounded-md p-2 border-gray-300"
              required
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
             />
             <input type="password"
              placeholder="Digite sua senha"
              className="border-b-2 w-full rounded-md p-2 border-gray-300"
              required
              value={password}
              onChange={ (e) => setPassword(e.target.value)}
             />

             </div>

             <button onClick={handleLogin} className="border rounded-md bg-purple-600 p-2 mt-5 text-white font-medium">
                Acessar
             </button>
            </form>
         </div>
        </div>
    )
}