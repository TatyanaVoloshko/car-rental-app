import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteCards } from "../redux/selectors";
import CarCard from "../components/CarCard/CarCard";

export const Favorites = () => {
  const favoriteCards = useSelector(selectFavoriteCards);
  console.log(favoriteCards);
  const favoriteCardsFiltered = favoriteCards.filter((card) => card.isFavorite);
  console.log(favoriteCardsFiltered);
 
  return (
    <div>
      <h2>Favorites</h2>
      <div>
        {favoriteCardsFiltered.map((card) => (
          <CarCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};