import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieItem from "../MovieItem";

import "./index.css";

const MovieSlider = (props) => {
  const { moviesList } = props;

  return (
    <div className="cont">
      <ul>
        {moviesList.map((each) => (
          <MovieItem movieDetails={each} key={each.id} />
        ))}
      </ul>
    </div>
  );
};

export default MovieSlider;
