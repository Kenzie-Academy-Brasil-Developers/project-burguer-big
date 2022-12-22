import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { StyledCart, StyledDiv } from "./style";

import iconDelete from "../../assets/icon-delete.svg";

export const Cart = () => {
  const { Total, currentSale, deleteCart, setIsModal } = useContext(CartContext);

  return (
    <StyledCart>
      <StyledDiv>
        <div>
          <h4>Carrinho de compras</h4>
          <button onClick={() => setIsModal(false)}>X</button>
        </div>
        <ul>
          {currentSale?.map((item) => {
            const { id, img, name } = item;
            return (
              <li key={id}>
                <div>
                  <img src={img} alt="" />
                  <div>
                    <h4>{name}</h4>
                    {/* <div>
                      <button>-</button>
                      <span>0</span>
                      <button>+</button>
                    </div> */}
                  </div>
                </div>
                <button type="button" onClick={() => deleteCart(item)}>
                  <img src={iconDelete} alt="" />
                </button>
              </li>
            );
          })}
        </ul>
        <span>Total R$ {Total}</span>
      </StyledDiv>
    </StyledCart>
  );
};
