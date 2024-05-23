import { useState, ReactNode } from "react";
import { Context, MyContextProps } from "./Context";

interface MyProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: MyProviderProps) => {
 const [data, setData] = useState('');

 const values: MyContextProps = {
  data,
  setData
 }

 return (
    <Context.Provider value={ values }>
      {children}
    </Context.Provider>
 );
};

export default Provider;