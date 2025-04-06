
function MealDetails({meal, handleClose}) {
    

    return(
        <div className="pt-10 m-auto ">
            <div className=" m-auto w-[40%] space-y-3 shadow-2xl h-auto">
                <img src={meal.image} alt="meal image" className="w-full p-3 h-80 rounded-3xl"/>
                <div className="px-3 space-y-3">
                    <div className="">
                        <h2 className="font-bold text-2xl">{meal.title}</h2>
                        <p>Calories: <b>{meal.kcal}</b> Kcal</p>
                    </div>
                    <h4 className="text-lg">Ingredients:</h4>
                    <ul className="">
                        {meal.ingredients.map((ingredients, index) => (
                            <li key={index}>{ingredients}</li>
                        ))}
                    </ul>
                    <button className="btn" onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default MealDetails