import { Link} from "react-router-dom";

function LandingPage() {
  return (
    <div>
      "hello everynyan, how are you? fine thank you!, oh mai gah!, i wish i were
      a bird"
      <Link to="/auth/login">
        <button className="bg-blue-300 h-10 w-20 rounded-lg mx-3">
          log in
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
