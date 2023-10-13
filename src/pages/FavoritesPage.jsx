import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteCards, selectCatalogs } from "../redux/selectors";
import CarCard from "../components/CarCard/CarCard";
import { Grid } from "@mui/material";

 const Favorites = () => {
  const favoriteCards = useSelector(selectFavoriteCards);
  const catalogs = useSelector(selectCatalogs);
  const getCards = (cards, favoriteCards) =>
    cards.filter((card) =>
      favoriteCards.some((favoriCard) => card.id === favoriCard.id)
    );
 
  return (
    <div>
      <h2>Favorites</h2>
      <Grid container rowSpacing={6.25} columnSpacing={3.75} mt={1}>
        {getCards(catalogs, favoriteCards).map((card) => (
          <CarCard key={card.id} {...card} />
        ))}
      </Grid>
      
    </div>
  );
};

export default Favorites;