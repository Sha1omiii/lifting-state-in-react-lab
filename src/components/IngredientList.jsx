// src/components/IngredientList.jsx
const IngredientList = ({ ingredients, addToBurger }) => {
    return ( 
        <>
            <ul>
            {/* // map through props.ingredients     */}
                {ingredients.map((ingredient, index) => (
                    <li style={{backgroundColor: ingredient.color}} key={index}>
                        {ingredient.name}
                        <button onClick={() => addToBurger(ingredient)}>Add</button>
                    </li>
                ))}
            </ul>; 
        </>
       
    ) 
    
};
  
export default IngredientList;
  