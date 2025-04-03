import { useState } from "react";
import meals from "../meals.json";

function MealSuggestion({kcal}){ 

    const mealKcal = kcal / 6;

    const[showMeals, setShowMeals] = useState(false);

    const firstCategory = meals.groupOne;
    const secondCategory = meals.groupTwo;
    const thirdCategory = meals.groupThree;
    const fourthCategory = meals.groupFour
    
    //function to display meals 
    function displayMeals(){
        if(mealKcal){
          setShowMeals(true);
        }
    };


    return(
        <div>
            <div>
                <h2>Meal Suggestion Based on your objective</h2>
                {!showMeals ? (
                    <>
                    <button onClick={displayMeals}>Generate Meals</button>
                    </>
                ):(<p>click on the meal to see the ingredients</p>)}
                
            </div>
            <div>
                {showMeals ? (
                    <>
                    {mealKcal > 100 &&  //meal calorie more than 100
                    mealKcal <= 300 && //meal calorie under or equal 300
                    firstCategory.filter(meal => meal.kcal !=0 && meal.kcal <= 300).length > 0 && (
                        <div style={{display:"flex", gap: "10px", padding:"20px"}}>
                            {firstCategory
                            .map(meal => (
                                <div key={meal.id}>
                                <img src={meal.image} alt="meal photo" style={{width:"80px", height:"80px"}}/>
                                <h4>{meal.title}</h4>
                                <p>Kcal: <b>{meal.kcal}</b></p>
                                </div>
                            ))}
                        </div>
                    )}
                    {mealKcal > 300 &&
                    mealKcal <= 400 &&
                    secondCategory.filter(meal => meal.kcal !=0 && meal.kcal <= 400).length > 0 && (
                        <div style={{display:"flex", gap:"10px", padding:"20px"}}>
                            {secondCategory
                            
                            .map(meal => (
                                <div key={meal.id}>
                                    <img src={meal.image} alt="meal photo" style={{width:"80px", height:"80px"}}/>
                                    <h4>{meal.title}</h4>
                                    <p>Kcal: <b>{meal.kcal}</b></p>
                                </div>
                            ))}
                        </div>
                    )}
                    {mealKcal > 400 &&
                    mealKcal <= 500 &&
                    thirdCategory.filter(meal => meal.kcal !=0 && meal.kcal <= 500).length > 0 && (
                        <div style={{display:"flex",gap:"10px",padding:"20px"}}>
                            {thirdCategory
                            .map(meal => (
                                <div key={meal.id}>
                                    <img src={meal.image} alt="meal photo" style={{width:"80px", height:"80px"}}/>
                                    <h4>{meal.title}</h4>
                                    <p>Kcal: {meal.kcal}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {mealKcal > 500 &&
                    mealKcal <= 600 &&
                    fourthCategory.filter(meal => meal.kcal !=0 && meal.kcal <= 600).length > 0 && (
                        <div style={{display:"flex", gap:"10px", padding:"20px"}}>
                            {fourthCategory
                            .map(meal => (
                                <div key={meal.id}>
                                    <img src={meal.image} alt="meal photo" style={{width:"80px", height:"80px"}}/>
                                    <h4>{meal.title}</h4>
                                    <p>Kcal: {meal.kcal}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    </>):(<p>Please! Calculate your daily needs.</p>)}
            </div>
       </div>
    );
};

export default MealSuggestion