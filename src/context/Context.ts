import { Dispatch, SetStateAction, createContext } from "react";

type InputState = string;

export interface MyContextProps {
  data: null | string,
  setData: Dispatch<SetStateAction<InputState>>
}

export const Context = createContext<MyContextProps | undefined>(undefined)