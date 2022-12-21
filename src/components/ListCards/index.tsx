import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { UserContext } from "../../providers/UserContext";
import { StyledUl } from "./style";

export const ListCards = () => {
  const { listProduct } = useContext(UserContext);
  const { addCart } = useContext(CartContext);

  return (
    <StyledUl>
      {listProduct?.map((item) => {
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
            <button type="button" onClick={() => addCart(item)}>
              Adicionar
            </button>
          </li>
        );
      })}
    </StyledUl>
  );
};
