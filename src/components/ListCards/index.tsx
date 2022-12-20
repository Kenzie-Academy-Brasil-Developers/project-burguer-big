import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";

export const ListCards = () => {
  const { listProduct } = useContext(UserContext);

  return (
    <ul>
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
            <button type="button" onClick={() => console.log("oi")}>
              Adicionar
            </button>
          </li>
        );
      })}
    </ul>
  );
};
