import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { StyledCart } from "./style";

export const Cart = () => {
  const { currentSale, deleteCart, setIsModal } = useContext(CartContext);
 
  return (
    <StyledCart>
      <div>
        <div>
          <h4>Carrinho de compras</h4>
          <button onClick={()=> setIsModal(false)}>X</button>
        </div>
        <ul>
          {currentSale?.map((item) => {
            const { category, id, img, name, price } = item;
            return (
              <li key={id}>
                <div>
                  <img src={img} alt="" />
                  <div>
                    <h4>{name}</h4>
                    <p>{category}</p>
                    <p>{price}</p>
                  </div>
                </div>
                <button type="button" onClick={() => deleteCart(item)}>
                  Remover
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledCart>
  );
};
