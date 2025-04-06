import { useState } from "react";
import meals from "../meals.json";
import MealDetails from "./MealDetails";

function MealSuggestion({kcal}){ 

    const mealKcal = kcal / 6;
    const[showMeals, setShowMeals] = useState(false);
    const[selectedMeal, setSelectedMeal] = useState(null);

    const firstCategory = meals.groupOne;
    const secondCategory = meals.groupTwo;
    const thirdCategory = meals.groupThree;
    const fourthCategory = meals.groupFour;
    
    //function to display meals 
    function displayMeals(){
        if(mealKcal){
          setShowMeals(true);
        }
    };


    return(
        <div className="mt-10 mt-[5%] max-w-6xl m-auto items-center items-center">
            <div className="">
                <div className="flex gap-2 items-center">
                    <div className="w-2 h-12 bg-lime-500 rounded"></div>
                    <div>
                        <h2 className="font-bold text-2xl">Meal Suggestion</h2>
                        <p>Based on your clalorie needs</p>
                    </div>
                </div>
                <div className="max-w-4xl md:flex w-full max-w-xs mx-auto  items-center justify-center">
                    {!showMeals ? (
                        <>
                        <button className="btn" onClick={displayMeals}>Generate Meals</button>
                        </>
                    ):(<p className="font-bold">Click on the meal to see the ingredients</p>)}
                </div>    
            </div>
                <div className="overflow-x-auto space-x-4">
                    {showMeals ? (
                        <>
                        {mealKcal > 100 &&  //meal calorie more than 100
                        mealKcal <= 300 && //meal calorie under or equal 300
                        firstCategory.filter(meal => meal.kcal !=0 && meal.kcal <= 300).length > 0 && (
                            <div className="crd">
                                {firstCategory
                                .map(meal => (
                                    <div>
                                        <div className="dv" key={meal.id} onClick={() => setSelectedMeal(meal)}>
                                            <img src={meal.image} alt="meal photo" className="img"/>
                                            <h4 className="txt">{meal.title}</h4>
                                            <p>Kcal: <b>{meal.kcal}</b></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {mealKcal > 300 &&
                        mealKcal <= 400 &&
                        secondCategory.filter(meal => meal.kcal !=0 && meal.kcal <= 400).length > 0 && (
                            <div className="crd">
                                {secondCategory
                                .map(meal => (
                                    <div className="dv" key={meal.id} onClick={() => setSelectedMeal(meal)}>
                                        <img src={meal.image} alt="meal photo" className="img"/>
                                        <h4 className="txt">{meal.title}</h4>
                                        <p>Kcal: <b>{meal.kcal}</b></p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {mealKcal > 400 &&
                        mealKcal <= 500 &&
                        thirdCategory.filter(meal => meal.kcal !=0 && meal.kcal <= 500).length > 0 && (
                            <div className="crd">
                                {thirdCategory
                                .map(meal => (
                                    <div>
                                        <div className="dv" key={meal.id} onClick={() => setSelectedMeal(meal)}>
                                            <img src={meal.image} alt="meal photo" className="img"/>
                                            <h4 className="txt">{meal.title}</h4>
                                            <p>Kcal: <b>{meal.kcal}</b></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {mealKcal > 500 &&
                        mealKcal <= 600 &&
                        fourthCategory.filter(meal => meal.kcal !=0 && meal.kcal <= 600).length > 0 && (
                            <div className="crd">
                                {fourthCategory
                                .map(meal => (
                                    <div className="dv" key={meal.id} onClick={() => setSelectedMeal(meal)}>
                                        <img src={meal.image} alt="meal photo" className="img"/>
                                        <h4 className="txt">{meal.title}</h4>
                                        <p>Kcal: <b>{meal.kcal}</b></p>
                                    </div>
                                ))}
                            </div>
                        )}
                        </>):(<p>Please! Calculate your daily needs.</p>)}
                        {selectedMeal &&
                            <MealDetails meal={selectedMeal} handleClose={() => setSelectedMeal(null)} />}
            </div>
        </div>
    );
};

export default MealSuggestion