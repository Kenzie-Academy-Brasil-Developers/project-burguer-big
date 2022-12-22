import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { UserContext } from "../../providers/UserContext";
import { GreenButton } from "../../styles/buttons";
import { StyledDivDescription, StyledDivImg, StyledUl } from "./style";

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
              <StyledDivImg>
                <img src={img} alt="Produto" />
              </StyledDivImg>
              <StyledDivDescription>
                <h4>{name}</h4>
                <p>{category}</p>
                <p>{price}</p>
                <GreenButton type="button" onClick={() => addCart(item)}>
                  Adicionar
                </GreenButton>
              </StyledDivDescription>
            </div>
          </li>
        );
      })}
    </StyledUl>
  );
};
