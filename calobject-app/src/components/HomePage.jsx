import Cover from "../assets/cover.jpeg";
import icon1 from "../assets/calcul-icon.png";
import icon2 from "../assets/meal-icon.png";
import icon3 from "../assets/control-icon.png";
import image1 from "../assets/img-1.jpeg";
import image2 from "../assets/img-2.jpeg";

function HomePage(){
    

    return(
        <div className=""> 
            <section id="hero" className="">
                <main className="relative h-[100vh] items-center justify-center bg-cover bg-center pb-0">
                    <div className="px-4 md:px-8">
                        <h1 className=" z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-4xl md:text-6xl lg:text-7xl text-white text-center">
                            Take Control of Your <span className="text-lime-500">Health</span>
                        </h1>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
                    <img src={Cover} alt="cover image" className="w-full h-full object-cover"/>

                    <div id="features-section" className="w-[90%] absolute bottom-[-2rem] left-1/2 -translate-x-1/2 z-20 shadow-lg md:flex  justify-center px-6 py-4 border gap-20  max-w-2xl m-auto rounded-xl bg-white -mt-2">
                        <div className="flex flex-col items-center text-sm md:text-base font-bold">
                            <img src={icon1} alt="calculator icon" className="w-20"/>
                            <h6 >Calorie Calculator</h6>
                        </div>
                        <div className="flex flex-col items-center text-sm md:text-base font-bold">
                            <img src={icon2} alt="apple icon" className="w-20"/>
                            <h6>Meal Sugestion</h6>
                        </div>
                        <div className="flex flex-col items-center text-sm md:text-base font-bold">
                            <img src={icon3} alt="controler icon" className="w-20"/>
                            <h6>Friendly Interface</h6>
                        </div>
                    </div>
                </main>
            </section>

            <div id="app-info-sections" className="max-w-5xl mx-auto mt-10 sm:pt-28">
                <div className="md:flex gap-5 mb-6">
                    <div className="pt-3">
                        <div className="flex gap-2 ">
                            <div className="w-2 h-8 bg-lime-500 rounded"></div>
                            <h3 className="font-bold text-2xl">Calorie Calculator Feature</h3>
                        </div>
                        <p className="text-xl mt-5">
                            the Calorie Calculator feature 
                            of Calobject. It displays a clean, user-friendly 
                            interface where users can input their personal 
                            details like age, gender, weight, height, activity 
                            level, and fitness goals. The calculator then provides
                            an accurate estimate of their daily caloric needs, 
                            helping them make informed decisions about their diet 
                            and lifestyle.
                        </p>
                    </div>
                    <img src={image1} alt="Calculator and food" className="w-80 h-80 shadow-xl rounded-lg"/>
                </div>


                <div className="md:flex gap-5 mt-10 mb-20">
                    <img src={image2} alt="Calculator and food" className="w-80 h-80 shadow-xl rounded-lg"/>
                    <div className="pt-3">
                        <div className="flex gap-2 ">
                            <div className="w-2 h-8 bg-lime-500 rounded"></div>
                            <h3 className="font-bold text-2xl">Meal Suggestion Based on User's Goal</h3>
                        </div>
                        <p className="text-xl mt-5">
                            the Meal Suggestion 
                            feature of Calobject. It shows a variety of 
                            healthy, delicious meal options tailored to the user's 
                            specific fitness goals, such as weight loss, maintenance,
                            or muscle gain. Each meal suggestion is accompanied by
                            nutritional information, including calorie count, macronutrient breakdown, 
                            and portion sizes, making it easy for users to stay 
                            on track with their dietary plans.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage