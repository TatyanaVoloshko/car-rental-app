import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CarOut from "./Images/CarOut.png"
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favoriteCardsSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BasicModal from "../ModalWindow/ModalWindow";

const CarCard = ({
  img,
  make,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  accessories,
  mileage,
  model,
  id,
  fuelConsumption,
  engineSize,
  description,
  functionalities,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const addressParts = address ? address.split(",") : [];
  const country =
    addressParts.length > 0 ? addressParts[addressParts.length - 1].trim() : "";
  const city =
    addressParts.length > 1 ? addressParts[addressParts.length - 2].trim() : "";

  const imageUrl = img || CarOut;

  const isFavorite = useSelector((state) =>
    state.favoriteCards.favoriteCards.some((card) => card.id === id)
  );
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite({ id }));
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <Grid item xs={12} md={3}>
      <Card
        sx={{
          position: "relative",
          backgroundColor: "transparent",
          color: "transparent",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          image={imageUrl}
          alt={make}
          sx={{ height: "268px", borderRadius: "14px", mb: "14px" }}
        />
        <CardContent sx={{ padding: "0", mb: "28px" }}>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              position: "relative",
              fontWeight: "500px",
              fontSize: "16px",
              lineHeight: "1.5",
              color: "#121417",
              mb: "8px",
            }}
          >
            {`${make}, ${year}`}
            <span style={{ position: "absolute", right: 0 }}>
              {rentalPrice}
            </span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "400px",
              fontSize: "12px",
              lineHeight: "1.5",
              color: " rgba(18, 20, 23, 0.5)",
              mb: "4px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {city}&ensp;|&ensp;{country}&ensp;|&ensp;{rentalCompany}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "400px",
              fontSize: "12px",
              lineHeight: "1.5",
              color: " rgba(18, 20, 23, 0.5)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {type}&ensp;|&ensp;{make}
            &ensp;|&ensp;{Number(mileage).toLocaleString("en")}
            &ensp;|&ensp;{accessories[0]}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            padding: "0",
          }}
        >
          <Button
            variant="contained"
            onClick={handleModalOpen}
            sx={{
              width: "100%",
              height: "44px",
              borderRadius: "12px",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "1.43",
              textTransform: "none",
            }}
          >
            Learn more
          </Button>
          <Button
            variant="text"
            onClick={handleFavoriteClick}
            sx={{
              position: "absolute",
              top: "14px",
              right: "14px",
              width: "18px",
              height: "18px",
              padding: "0px",
              margin: "0px",
              minWidth: "0px",
            }}
            data={{
              make,
              year,
              rentalPrice,
              address,
              rentalCompany,
              type,
              accessories,
              mileage,
              model,
              id,
              fuelConsumption,
              engineSize,
              description,
              functionalities,
              img,
            }}
          >
            {isFavorite ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon sx={{ color: "white" }} />
            )}
          </Button>
        </CardActions>
      </Card>
      <BasicModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        data={{
          make,
          year,
          rentalPrice,
          address,
          rentalCompany,
          type,
          accessories,
          mileage,
          model,
          id,
          fuelConsumption,
          engineSize,
          description,
          functionalities,
          img,
        }}
      />
    </Grid>
  );
};

export default CarCard;
