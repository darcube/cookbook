import MealCarousel from "../components/MealCarousel";
import Header from "./Header";

function Main() {
    return (
        <div>
            <Header />
            <h1 className="main__title">Śniadania</h1>
            <MealCarousel />

            <h1 className="main__title">Obiady</h1>
            <MealCarousel />
        </div>
        
    )
}

export default Main