import { useSelector } from "react-redux";
import MovieComp from "./MovieComp";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const MoviesComp = () => {
  const storeMovies = useSelector((state) => state.movies);

  return (
    <Container>
      {storeMovies.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row xs={1} md={4} className="g-4">
          {storeMovies.map((movie) => {
            return (
              <Col
                key={movie.id}
                style={{ display: "flex", alignItems: "stretch" }}
              >
                <MovieComp movieData={movie} />
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
};

export default MoviesComp;
