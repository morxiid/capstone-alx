
function MealDetails({meal, handleClose}) {
    

    return(
        <div>
            <img src={meal.image} alt="" />
            <h2>{meal.title}</h2>
            <p>Calories: <b>{meal.kcal}</b> Kcal</p>
            <h4>Ingredients:</h4>
            <ul>
                {meal.ingredients.map((ingredients, index) => (
                    <li key={index}>{ingredients}</li>
                ))}
            </ul>
            <button onClick={handleClose}>Close</button>
        </div>
    );
}

export default MealDetails