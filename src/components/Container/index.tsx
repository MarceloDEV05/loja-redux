import type { ReactNode } from "react"

interface ContainerProp{
    children: ReactNode
}

export const Container = ({ children }: ContainerProp) => {
    return(
        <div className="w-full h-full bg-white lg:max-w-3xl max-w-sm mx-auto justify-center items-center mt-50 px-4 pb-8 drop-shadow-2xl rounded-md">

             { children }
             
         </div>
    )
}