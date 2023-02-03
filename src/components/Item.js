import React, {useState} from "react";

function Item({ name, category }) {

  const [InCart, setInCart] = useState("")
  function handleClick(event){
    {InCart === "" ? setInCart('in-cart') : setInCart("")}
  }


  return (
    <li className={InCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{InCart === "" ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
