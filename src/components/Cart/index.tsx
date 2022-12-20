import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Cart = () => {
  const { currentSale } = useContext(UserContext);
 console.log(currentSale);

//   return (
//     <div>
//       <h4>Carrinho</h4>
//       <ul>
//         {currentSale?.map((item) => {
//           const { category, id, img, name, price } = item;
//           return (
//             <li key={id}>
//               <div>
//                 <img src={img} alt="" />
//                 <div>
//                   <h4>{name}</h4>
//                   <p>{category}</p>
//                   <p>{price}</p>
//                 </div>
//               </div>
//               <button type="button">Remover</button>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
};
