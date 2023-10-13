import React, { useEffect } from "react";
import { CarCards } from "../components/CarList/CarList";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredCatalogs,
  selectError,
  selectIsLoading,
} from "../redux/selectors";
import { fetchCatalogs } from "../redux/operations";

 const Catalog = () => {
  const cards = useSelector(selectFilteredCatalogs);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalogs());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cards.length > 0 ? <CarCards /> : <p>Card not found</p>}
    </div>
  );
};

export default Catalog;
