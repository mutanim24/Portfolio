import About from "../About/About";
import Banner from "../Banner/Banner";
import GetTouch from "../GetTouch/GetTouch";
import MySkill from "../MySkill/MySkill";
import Posts from "../Posts/Posts";
import Projects from "../Projects/Projects";


const Home = () => {
    return (
        <div className="bg-black px-14">
            <Banner></Banner>
            <About></About>
            <MySkill></MySkill>
            <Projects></Projects>
            <Posts></Posts>
            <GetTouch></GetTouch>
        </div>
    );
};

export default Home;