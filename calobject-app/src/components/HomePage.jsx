import Cover from "../assets/cover.jpeg";
import icon1 from "../assets/calcul-icon.png";
import icon2 from "../assets/meal-icon.png";
import icon3 from "../assets/control-icon.png";
import image1 from "../assets/img-1.jpeg";
import image2 from "../assets/img-2.jpeg";

function HomePage(){
    const coverStyle = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        width: "100%",
    }

    return(
        <div className="Container">
            <div className="hero-section">
                <h1>Take Control of Your Health with Calobject</h1>
                <img src={Cover} alt="cover image" style={coverStyle} />
            </div>
            <div className="features-section">
            <div>
                <img src={icon1} alt="calculator icon" />
                    <h6>Calorie Calculator</h6>
                
            </div>
            <div>
                <img src={icon2} alt="apple icon" />
                    <h6>Meal Sugestion</h6>
                
            </div>
            <div>
                <img src={icon3} alt="controler icon" />
                    <h6>Friendly Interface</h6>
                
            </div>
        </div>
        <div className="app-info-sections">
            <div>
                <img src={image1} alt="Calculator and food" />
                <h3>Calorie Calculator Feature</h3>
                <p>This image showcases the Calorie Calculator feature 
                    of Calobject. It displays a clean, user-friendly 
                    interface where users can input their personal 
                    details like age, gender, weight, height, activity 
                    level, and fitness goals. The calculator then provides
                    an accurate estimate of their daily caloric needs, 
                    helping them make informed decisions about their diet 
                    and lifestyle.</p>
            </div>
            <div>
                        <img src={image2} alt="food or meal" />
                        <h3>Meal Suggestion Based on User's Goal</h3>
                        <p>This image highlights the Meal Suggestion 
                            feature of Calobject. It shows a variety of 
                            healthy, delicious meal options tailored to the user's 
                            specific fitness goals, such as weight loss, maintenance,
                            or muscle gain. Each meal suggestion is accompanied by
                            nutritional information, including calorie count, macronutrient breakdown, 
                            and portion sizes, making it easy for users to stay 
                            on track with their dietary plans.</p>
            </div>
        </div>
        </div>
    )
}

export default HomePage