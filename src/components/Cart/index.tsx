import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { StyledCart, StyledDiv } from "./style";

import iconDelete from "../../assets/icon-delete.svg";
import { iProduct } from "../../interfaces";

export const Cart = () => {
  const { Total, currentSale, deleteCart, setIsModal } =
    useContext(CartContext);

  return (
    <StyledCart>
      <StyledDiv>
        <div>
          <h4>Carrinho de compras</h4>
          <button onClick={() => setIsModal(false)}>X</button>
        </div>

        {currentSale && currentSale.length > 0 ? (
          <ul>
            {currentSale.map((item: iProduct, index: number) => (
              <li key={index}>
                <div>
                  <img src={item.img} alt="Imagem do Produto" />
                  <div>
                    <h4>{item.name}</h4>
                  </div>
                </div>
                <button type="button" onClick={() => deleteCart(index)}>
                  <img src={iconDelete} alt="Lixeira" />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Adicione itens ao carrinho</p>
        )}
        <span>Total R$ {Total.toFixed(2)}</span>
      </StyledDiv>
    </StyledCart>
  );
};
