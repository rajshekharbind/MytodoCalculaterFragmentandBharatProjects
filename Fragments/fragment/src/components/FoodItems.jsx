
import Item from "./Item";

const FoodItems= ({ items}) => {
  //let foodItems = ["Dal","Green Vegitable","Roti","Salad","Milk","ghee"];
    return(
        <ul className="list-group">
     {items.map((item) => (
     <Item 
     key={item} 
     foodItem={item}
     handleBuyButtonClicked={()=> console.log(`${item} bought`)}
     ></Item>
    ))}
  </ul>
    );
};
export default FoodItems;