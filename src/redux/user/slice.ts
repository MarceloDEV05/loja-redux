import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
//precisa importar o PayloadAction


//define o tipo da propriedade do usuario
interface UserProps{
  
  nome: string;
  email: string;
  senha: string;
};

//define o tipo do estado que o reducer vai receber
export type UserState = {
  user: UserProps | null;
};

//tipando com o estado inicial/novo valor do usuario
const initialState:UserState = {
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState:initialState,
    reducers: {
        //precisa tipar o payload que ira receber, tipei com userProps
    createUser:(state, action:PayloadAction<UserProps>)=> {
      state.user = action.payload;
     },
    
    }
})

export const { createUser } = userSlice.actions
export default userSlice.reducer