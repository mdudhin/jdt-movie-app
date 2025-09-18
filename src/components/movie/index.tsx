import React from "react";
import { Card } from "../card";

interface Movie {
  date: string;
  title: string;
  duration: string;
  rating: number;
  genre: string[];
  img: string;
}

interface Props {
  movie: Movie;
}

const MovieComponent = ({ movie }: Props) => {
  //Destructuring an Object
  const { title, img } = movie;

  return (
    <Card color="#ffffff" border="10px">
      <img src={img} alt="Poster Movie" />
      <p>{title}</p>
    </Card>
  );
};

export default MovieComponent;
