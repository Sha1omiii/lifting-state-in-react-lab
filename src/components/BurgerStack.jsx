
// `src/components/BurgerStack.jsx`
const BurgerStack = ({ ingredients, removeFromBurger }) => {
    return (
        <>
            <ul>
                {/* // map through props.ingredients */}
                {ingredients.length > 0 ? (
                    ingredients.map((ingredient, index) => (
                        <li style={{ backgroundColor: ingredient.color}} key={index}>
                            {ingredient.name}
                            <button onClick={() => removeFromBurger(ingredient)}>Remove</button>
                        </li>
                    ))
                ) : (
                    <li>There is no ingredients</li>
                )};
            </ul>;
        </>
    )
};
  
export default BurgerStack;
  