import { useNavigate } from "react-router";
import { usePopularMovie } from "../../hooks/movie/usePopular";
import MovieComponent from "../../components/movie";

const HomeScreen = () => {
  const navigate = useNavigate();
  const { popularMovie } = usePopularMovie();

  return (
    <div className="w-full px-10">
      <div className="flex flex-col py-10">
        <h1 className="text-2xl font-bold">Popular</h1>
        <div className="flex gap-3 overflow-x-auto overflow-visible px-10 mt-5">
          {popularMovie.map((movie) => (
            <MovieComponent key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
