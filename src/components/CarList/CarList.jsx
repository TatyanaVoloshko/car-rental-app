import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilteredCatalogs } from "../../redux/selectors";
import CarCard from "../CarCard/CarCard";
import { Grid, Button } from "@mui/material";


export const CarCards = () => {
  const cards = useSelector(selectFilteredCatalogs);
  const [visibleCount, setVisibleCount] = useState(8); 

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); 
  };

  return (
    <>
      <Grid container rowSpacing={6.25} columnSpacing={3.75} mt={1}>
        {cards.slice(0, visibleCount).map((car) => (
          <CarCard key={car.id} {...car} />
        ))}
        {visibleCount < cards.length && (
          <Button
            onClick={loadMore}
            variant="text"
            color="primary"
            sx={{ margin: "100px auto", display: "block" }}
          >
            Load more
          </Button>
        )}
      </Grid>
    </>
  );
};
