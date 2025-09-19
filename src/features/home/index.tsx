import { useNavigate } from "react-router";
import { usePopularMovie } from "../../hooks/movie/usePopular";
import MovieComponent from "../../components/movie";

const HomeScreen = () => {
  const navigate = useNavigate();
  const { popularMovie } = usePopularMovie();

  return (
    <div className="w-full px-10">
      <div className="flex w-full flex-col">
        <h1 className="text-2xl font-bold">Popular</h1>
        <div className="flex flex-row gap-5 py-5 overflow-x-auto">
          {popularMovie.map((movie) => (
            <MovieComponent key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
