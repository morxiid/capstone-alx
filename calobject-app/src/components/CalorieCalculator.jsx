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
    const[Kcal, setKcal] = useState("");
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
    };

    

    return(
        <>
        <div className="mt-[5%] max-w-6xl m-auto items-center items-center">
            <div className="flex gap-2 items-center">
                <div className="w-2 h-12 bg-lime-500 rounded"></div>
                <div>
                    <h2 className="font-bold text-2xl">Welcome <span>{username && username.charAt(0).toUpperCase() + username.slice(1)}</span> !</h2>
                    <p>Enter the current informations, please.</p>
                </div>
            </div>
            <div className="my-10 max-w-4xl md:flex">
                    <form action="">
                        <div className="md:flex md:gap-20">
                            <div className="space-y-4">
                                <div className="">
                                    <label className="font-bold">Age  : </label>
                                    <input className="inpt" type="number" min="0" value={age} onChange={(e) => {setAge(e.target.value); setShowResult(false)}}/><br />
                                </div>
                                <div className="">
                                    <label className="font-bold">Weight Kg : </label>
                                    <input className="inpt" type="number" min="0" value={weight}  onChange={(e) => {setWeight(e.target.value); setShowResult(false)}}/><br />
                                </div>
                                <div>
                                    <label className="font-bold">Height Cm : </label>
                                    <input className="inpt" type="number" min="0" value={height}  onChange={(e) => {setHeight(e.target.value); setShowResult(false)}}/>
                                </div>
                            </div>
                            

                            <div className="space-y-4">
                                <div>
                                    <label className="font-bold">Activity Level : </label>
                                    <select className="inpt" name="Activity Level" value={activity}  onChange={(e) => {setActivity(e.target.value); setShowResult(false)}}>
                                        <option value="1.2">Sedentary (little/no exercise)</option>
                                        <option value="1.375">Lightly active (1–3 days/week)</option>
                                        <option value="1.55">Moderately active (3–5 days/week)</option>
                                        <option value="1.725">Very active (6–7 days/week)</option>
                                        <option value="1.9">Super active (athlete, twice/day workouts)</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label className="font-bold">Gender : </label>
                                    <div className="inpt space-x-10 ">
                                        <input type="radio" value="male" checked={gender == "male"} onChange={(e) => {setGender(e.target.value); setShowResult(false)}}/>Male
                                        <input type="radio" value="female" checked={gender == "female"} onChange={(e) => {setGender(e.target.value); setShowResult(false)}}/>Female
                                    </div>
                                </div>
                                <div>
                                    <label className="font-bold">Objective : </label>
                                    <select className="inpt" name="Objective" value={objective}  onChange={(e) => {setObjective(e.target.value); setShowResult(false)}}>
                                        <option value="Lose">Lose Weight</option>
                                        <option value="Gain">Gain Weight</option>
                                        <option value="Maintain">Maintain</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
            </div>
            <div className="flex-col w-full max-w-xs mx-auto  items-center justify-center">
                <button onClick={() => Calculator()} className="btn">
                    Calculate</button>
                {showResult && (<p className="pt-5">calorie needs : <span className="font-bold">{Kcal}</span></p>)} 
            </div>
        </div>
        <MealSuggestion kcal={Kcal}/>
        </>
    )
}

export default CalorieCalculator