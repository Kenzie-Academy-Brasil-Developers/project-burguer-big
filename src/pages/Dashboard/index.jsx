import { useContext, useEffect } from "react";
import { Cart } from "../../components/Cart";
import { ListCards } from "../../components/ListCards";
import { UserContext } from "../../providers/UserContext";
import { CartContext } from "../../providers/CartContext";

import logo from "../../assets/logo.svg";
import cart from "../../assets/icon-cart.svg";
import logout from "../../assets/icon-logout.svg";
import search from "../../assets/icon-search.svg";
import { StyledHeader } from "./style";

export const Dashboard = () => {
  const {
    getProducts,
    tokenUser,
    listProduct,
    setListProduct,
    goLogout,
    inputValue,
    setInputValue,
  } = useContext(UserContext);

  const { setIsModal, isModal } = useContext(CartContext);

  useEffect(() => {
    getProducts(tokenUser);
    // eslint-disable-next-line
  }, []);

  const filterCards = (inputValue) => {
    const includesItem = listProduct.filter(
      (item) =>
        item.name.toLowerCase().includes(inputValue) ||
        item.category.toLowerCase().includes(inputValue)
    );

    includesItem.length > 0
      ? setListProduct(includesItem)
      : getProducts(tokenUser);
  };

  const submit = (event) => {
    event.preventDefault();
    filterCards(inputValue);
  };

  return (
    <>
      {isModal && <Cart />}
      <StyledHeader onSubmit={submit}>
        <section>
          <img src={logo} alt="" />
          <div>
            <form>
              <input
                type="text"
                placeholder="Digitar Pesquisa"
                value={inputValue}
                onChange={(event) =>
                  setInputValue(event.target.value.toLowerCase())
                }
              ></input>
              <button type="submit">
                <img src={search} alt="Buscar" />
              </button>
            </form>
            <button type="button" onClick={() => setIsModal(true)}>
              <img src={cart} alt="Carrinho" />
            </button>
            <button onClick={() => goLogout()}>
              <img src={logout} alt="Sair" />
            </button>
          </div>
        </section>
      </StyledHeader>
      <main>
        <ListCards />
      </main>
    </>
  );
};
