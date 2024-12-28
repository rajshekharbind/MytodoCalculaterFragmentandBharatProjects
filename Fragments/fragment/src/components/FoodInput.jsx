 import styles from "./FoodInput.module.css"

//concept of handling event
const FoodInput = ({handleKeyDown}) =>{
    // const handleOnChange = (event) =>{
    //     console.log(event.target.value);
    //  };

 return <input type="text" placeholder="Enter Food Item here."
 className={styles.foodInput}
//  onChange={handleOnChange}/
onKeyDown={handleKeyDown}
  />
}
export default FoodInput;