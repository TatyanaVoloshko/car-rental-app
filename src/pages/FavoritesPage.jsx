import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteCards, selectCatalogs } from "../redux/selectors";
import CarCard from "../components/CarCard/CarCard";
import { Grid, Typography } from "@mui/material";

 const Favorites = () => {
  const favoriteCards = useSelector(selectFavoriteCards);
  const catalogs = useSelector(selectCatalogs);
  const getCards = (cards, favoriteCards) =>
    cards.filter((card) =>
      favoriteCards.some((favoriCard) => card.id === favoriCard.id)
     );
   
 
  return (
    <div>
      <Grid container rowSpacing={6.25} columnSpacing={3.75} mt={1}>
        {favoriteCards.length > 0 ? (
          getCards(catalogs, favoriteCards).map((card) => (
            <CarCard key={card.id} {...card} />
          ))
        ) : (
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{
                position: "relative",
                fontWeight: "500px",
                color: "#121417",
                pl: "30px",
              }}
            >
              You don't have any favorite ads...
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Favorites;