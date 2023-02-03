import { it } from "mocha";
import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [catg, setCatg] = useState('All')
function handleChange(event){
  setCatg(event.target.value)
}

const filteredList = items.filter(item => {

  if (catg === 'All'){
    return true
  }
  else {return catg === item.category}})

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
