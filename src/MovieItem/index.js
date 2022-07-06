import Popup from "reactjs-popup";
import ReactPlayer from "react-player";
import "reactjs-popup/dist/index.css";
import "./index.css";

const MovieItem = (props) => {
  const { movieDetails } = props;
  const { title, URL } = movieDetails;

  return (
    <div className="popUpCont">
      <Popup model trigger={<h1 className="head1">{title}</h1>}>
        {(close) => (
          <div>
            <button type="button" className="btn" onClick={() => close()}>
              back
            </button>
            <div>
              <ReactPlayer url={URL} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default MovieItem;
