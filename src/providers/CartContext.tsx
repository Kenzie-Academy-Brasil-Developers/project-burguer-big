import { createContext, useState } from "react";

import { iCartContext, iChildren, iProduct } from "../interfaces";

export const CartContext = createContext<iCartContext>({} as iCartContext);

export const CartProvider = ({ children }: iChildren) => {
  const [currentSale, setCurrentSale] = useState<iProduct[]>([] as iProduct[]);
  const [isModal, setIsModal] = useState(false);

  const addCart = (data: iProduct) => {
    setCurrentSale([...currentSale, data]);
  };

  const deleteCart = (data: iProduct) => {
    const newList = currentSale.filter((item) => item.id !== data.id);
    setCurrentSale(newList);
  };

  return (
    <CartContext.Provider
      value={{
        currentSale,
        setCurrentSale,
        addCart,
        setIsModal,
        isModal,
        deleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
