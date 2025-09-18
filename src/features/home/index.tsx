import React, { useEffect, useState } from "react";
import MovieComponent from "../../components/movie";

interface Movie {
  date: string;
  title: string;
  duration: string;
  rating: number;
  genre: string[];
  img: string;
}

const HomeScreen = () => {
  //   const [movies, setMovies] = useState<Movie[]>([
  //     {
  //       date: "2023-07-15",
  //       title: "The Lost Kingdom",
  //       duration: "2h 15m",
  //       rating: 8.2,
  //       genre: ["Adventure", "Fantasy"],
  //       img: "https://via.placeholder.com/150",
  //     },
  //     {
  //       date: "2022-11-05",
  //       title: "Silent Echoes",
  //       duration: "1h 50m",
  //       rating: 7.5,
  //       genre: ["Drama", "Mystery"],
  //       img: "https://via.placeholder.com/150",
  //     },
  //     {
  //       date: "2021-04-23",
  //       title: "Neon Skies",
  //       duration: "2h 05m",
  //       rating: 8.9,
  //       genre: ["Sci-Fi", "Action"],
  //       img: "https://via.placeholder.com/150",
  //     },
  //   ]);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>();

  const handlerEmail = (value: string) => {
    setEmail(value);
  };

  const handlerPassword = (value: string) => {
    setPassword(value);
  };

  useEffect(() => {
    handlerEmail("ROJAK");
  }, []);

  console.log(email);

  return (
    <div className="">
      {/* <div className=" flex flex-row gap-5">
        {movies.map((movie, index) => (
          <MovieComponent key={index + 1} movie={movie} />
        ))}
      </div> */}

      <p>Email :{email}</p>

      {/* <input className="border border-black" onChange={handlerEmail} /> */}
      <input
        className="border border-black"
        onChange={(e) => handlerPassword(e.target.value)}
      />
    </div>
  );
};

export default HomeScreen;
