import { Link} from "react-router-dom";
import bike from '../Images/bike.gif'

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-primary h-screen place-items-center">
      <div className="text-5xl text-white mt-20">Bike Buddy</div>
      <img src={bike} alt="this is a bird "/>
      <Link to="/auth/login">
        <button className="bg-blue-300 h-14 w-36 rounded-lg mx-3 text-lg mt-10 sm:mt-0">
          Get Started!
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
