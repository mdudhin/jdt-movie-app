import { useLocation, useNavigate } from "react-router";
import { useQuery } from "../../hooks/useQuery";
import { useDetail } from "../../hooks/movie/useDetail";

const DetailScreen = () => {
  const query = useQuery();
  const location = useLocation();

  const id = query.get("id") as string;
  const { movie } = useDetail(id);

  const navigate = useNavigate();
  return movie ? (
    <div className=" flex ">
      <p>{location.state.name}</p>
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
        // alt={original_title}
        className="rounded-t-xl"
      />
      <p>{movie?.title}</p>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default DetailScreen;
