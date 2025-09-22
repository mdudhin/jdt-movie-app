import { useNavigate } from "react-router";
import type { Movie } from "../../services/movie";
import { Card } from "../card";

interface Props {
  movie: Movie;
}

const MovieComponent = ({ movie }: Props) => {
  const navigate = useNavigate();
  //Destructuring an Object
  const { title, poster_path, original_title, id } = movie;

  return (
    <div
      className="w-full cursor-pointer"
      onClick={() =>
        navigate(`/detail?id=${id}`, {
          state: {
            name: "BAYU",
          },
        })
      }
    >
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={original_title}
        className="rounded-t-xl"
      />
      <div className="flex flex-col">
        <h1>{original_title}</h1>
      </div>
    </div>
  );
};

export default MovieComponent;
