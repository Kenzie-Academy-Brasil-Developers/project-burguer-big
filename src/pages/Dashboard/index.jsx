import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";

export const Dashboard = () => {
    const {
        getProducts,
        tokenUser,
      } = useContext(UserContext);

      useEffect(() => {
          getProducts(tokenUser);
          console.log("oi");
      }, []);

    return (
        <div>
            <header>
                <h1>Hamburgueria</h1>
            </header>
        </div>
    )
}