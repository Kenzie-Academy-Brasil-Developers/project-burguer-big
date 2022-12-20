import { useContext, useEffect } from "react";
import { Cart } from "../../components/Cart";
import { ListCards } from "../../components/ListCards";
import { UserContext } from "../../providers/UserContext";

export const Dashboard = () => {
  const {
    getProducts,
    tokenUser,
    listProduct,
    setListProduct,
    goLogout,
    inputValue,
    setInputValue,
    currentSale, 
    setCurrentSale,
  } = useContext(UserContext);

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
    console.log(includesItem);
    includesItem.length > 0
      ? setListProduct(includesItem)
      : getProducts(tokenUser);
  };

  const submit = (event) => {
    event.preventDefault();
    filterCards(inputValue);
  };


  return (
    <div>
      <header onSubmit={submit}>
        <div>
          <h1>Logo</h1>
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
              <button type="submit">Pesquisar</button>
            </form>
            <button type="button" onClick={()=> console.log(currentSale)}>Carrinho</button>
            <button onClick={() => goLogout()}>Logout</button>
          </div>
        </div>
      </header>
      <main>
        <ListCards />
      </main>
    </div>
  );
};
