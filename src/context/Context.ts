import { Dispatch, SetStateAction, createContext } from "react";
import { IParameter, InputState } from "../types/types";

export interface MyContextProps {
  dataSite: null | string,
  setDataSite: Dispatch<SetStateAction<InputState>>,
  formDataPix: IParameter,
  setFormDataPix: Dispatch<SetStateAction<IParameter>>,
  handleDownload: () => void
}

export const Context = createContext<MyContextProps | undefined>(undefined)