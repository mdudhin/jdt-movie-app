import type { Movie } from "../../services/movie";
import { Card } from "../card";

interface Props {
  movie: Movie;
}

const MovieComponent = ({ movie }: Props) => {
  //Destructuring an Object
  const { title, poster_path } = movie;

  return (
    <div className="w-[350px] h-[316px]">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="Poster Movie"
      />
    </div>
  );
};

export default MovieComponent;
