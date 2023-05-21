import { Card } from "react-bootstrap";

const MovieComp = ({ movieData }) => {

    const getSummaryText = (txt) => {
        const span = document.createElement("span");
        span.innerHTML = txt;
        return span.textContent || span.innerText;

    }

  return (
          <Card>
            <Card.Img variant="top" src={movieData.image.medium}/>
            <Card.Body>
              <Card.Title>{movieData.name}</Card.Title>
              <Card.Text>{getSummaryText(movieData.summary)}</Card.Text>
            </Card.Body>
          </Card>
  );
};

export default MovieComp;
