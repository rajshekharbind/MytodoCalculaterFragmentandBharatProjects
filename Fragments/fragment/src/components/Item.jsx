import styles from "./Item.module.css";

const Item =({ foodItem ,handleBuyButtonClicked})=>{
    //  const handleBuyButtonClicked =(event)=>{
    //     console.log(event);
    //     console.log(`${foodItem} being bought`)
    //  };



    return(
        <li className={`${styles["Kg-item"]} list-group-item `} >
           <span className={styles["Kg-span"]}>{foodItem}</span> 
           <button
            className={`${styles.button} btn btn-info`}
            onClick={(handleBuyButtonClicked)}>
                Buy
                </button>

            </li>
    );
};
export default Item;