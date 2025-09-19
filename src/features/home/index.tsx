import { useNavigate } from "react-router";
import { usePopularMovie } from "../../hooks/movie/usePopular";

const HomeScreen = () => {
  const navigate = useNavigate();
  const { popularMovie } = usePopularMovie();

  return (
    <div className="h-screen flex justify-center items-center">
      <button
        className="bg-black text-white cursor-pointer p-10 rounded-2xl"
        onClick={() =>
          navigate("/detail", {
            state: { id: "sdadfaf" },
          })
        }
      >
        GOOOOO!
      </button>
    </div>
  );
};

export default HomeScreen;
