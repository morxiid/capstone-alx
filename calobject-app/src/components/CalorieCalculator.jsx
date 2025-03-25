import { useState } from "react"
import MealSuggestion from "./MealSuggestion";

function CalorieCalculator(){
    //Declaring Variables Value with useState Hook
    const[age, setAge] = useState("");
    const[gender, setGender] = useState("");
    const[weight, setWeight] = useState("");
    const[height, setHeight] = useState("");
    const[activity, setActivity] = useState("");
    const[objective, setObjective] = useState("");
    const[Kcal, setKcal] = useState(0);
    const[showResult, setShowResult] = useState(false);

    const storedData = JSON.parse(localStorage.getItem("user"));
    const username = storedData ? storedData.username : "user";
    
    
    //Function that calculate calorie based on inputs value
    function Calculator(){
        //converting string value to number
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height);
        const ageNum = parseFloat(age);
        const activityNum = parseFloat(activity);

        //BMR
        let BMR = 0;
        if (gender === "female") {
            BMR = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161
        } else {
            BMR = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5
        }

        //TDEE 
        let TDEE = BMR * activityNum;

        //Final Result Kcal
        let Kcal = 0
        if(objective === "Lose"){
            Kcal = TDEE - 500;
        }else if(objective === "Gain"){
            Kcal = TDEE + 500;
        }else{
            Kcal = TDEE
        }
        Kcal = Math.round(Kcal * 100) / 100;
        setKcal(Kcal)
        setShowResult(true);
    }

    

    return(
        <div>
            <h2>Welcome <span>{username && username.charAt(0).toUpperCase() + username.slice(1)}</span> !</h2>
            <p>Enter the current informations, please.</p>
            <form action="">
                <label>Age:</label>
                <input type="number" min="0" value={age} onChange={(e) => {setAge(e.target.value); setShowResult(false)}}/><br />

                <div>
                <label>Gender :</label>
                <input type="radio" value="male" checked={gender == "male"} onChange={(e) => {setGender(e.target.value); setShowResult(false)}}/>Male
                <input type="radio" value="female" checked={gender == "female"} onChange={(e) => {setGender(e.target.value); setShowResult(false)}}/>Female
                </div>
                <br />
                <label>Weight Kg*:</label>
                <input type="number" min="0" value={weight}  onChange={(e) => {setWeight(e.target.value); setShowResult(false)}}/><br />

                <label>Height Cm*:</label>
                <input type="number" min="0" value={height}  onChange={(e) => {setHeight(e.target.value); setShowResult(false)}}/><br />
                
                <label>Activity Level:</label>
                <select name="Activity Level" value={activity}  onChange={(e) => {setActivity(e.target.value); setShowResult(false)}}>
                    <option value="1.2">Sedentary (little/no exercise)</option>
                    <option value="1.375">Lightly active (1–3 days/week)</option>
                    <option value="1.55">Moderately active (3–5 days/week)</option>
                    <option value="1.725">Very active (6–7 days/week)</option>
                    <option value="1.9">Super active (athlete, twice/day workouts)</option>
                </select><br />

                <label>Objective:</label>
                <select name="Objective" value={objective}  onChange={(e) => {setObjective(e.target.value); setShowResult(false)}}>
                    <option value="Lose">Lose Weight</option>
                    <option value="Gain">Gain Weight</option>
                    <option value="Maintain">Maintain</option>
                </select>
            </form>
            <button onClick={() => Calculator()}>Calculate</button>
            {showResult && (<p>Your daily calorie needs is: {Kcal}</p>)} 
        </div>
    )
}

export default CalorieCalculator