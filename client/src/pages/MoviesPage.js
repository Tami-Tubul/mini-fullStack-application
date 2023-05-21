import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MoviesComp from "../components/MoviesComp";
import moviesService from "../services/moviesService";

const MoviesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const respMovies = await moviesService.getMovies();
      dispatch({ type: "LOAD_MOVIES", payload: respMovies.data });
    };
    getData();
  }, [dispatch]);

  return (
    <>
      <MoviesComp />
    </>
  );
};

export default MoviesPage;
