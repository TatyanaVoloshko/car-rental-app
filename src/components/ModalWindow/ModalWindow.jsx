import {
  Modal,
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import css from "./ModalWindow.module.css"


const BasicModal = ({ isOpen, onClose, data }) => {

  const isSmallScreen = useMediaQuery("max-width:833px");
  const modalWidth = isSmallScreen ? "50%" : "541px";
  
  const addressParts = data.address ? data.address.split(",") : [];
  const country =
     addressParts.length > 0
       ? addressParts[addressParts.length - 1].trim()
       : "";
  const city =
     addressParts.length > 1
       ? addressParts[addressParts.length - 2].trim()
      : "";
  
  const phoneNumber = "+380730000000";
  
 
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
           width: modalWidth,
            borderRadius: "24px",
            bgcolor: "rgba(255, 255, 255, 1)",
            boxShadow: 24,
            p: "40px",
          }}
        >
          <CardMedia
            component="img"
            image={data.img}
            alt={data.make}
            sx={{ height: "268px", borderRadius: "14px", mb: "14px" }}
          />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontWeight: "500px",
              fontSize: "18px",
              lineHeight: "1.33",
              color: " rgba(18, 20, 23)",
              mb: "8px",
            }}
          >
            <span>{data.make} </span>
            <span className={css.TitleSecond}>{data.model}</span>,{data.year}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "400px",
              fontSize: "12px",
              lineHeight: "1.5",
              color: " rgba(18, 20, 23, 0.5)",
              mb: "4px",
            }}
          >
            {city}&ensp;|&ensp;{country}&ensp;|&ensp;Id:{data.id}
            &ensp;|&ensp;Year:{data.year}&ensp;|&ensp;Type:{data.type}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "400px",
              fontSize: "12px",
              lineHeight: "1.5",
              color: " rgba(18, 20, 23, 0.5)",
              mb: "14px",
            }}
          >
            Fuel Consumption:{data.fuelConsumption}&ensp;|&ensp;Engine Size:
            {data.engineSize}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "400px",
              fontSize: "14px",
              lineHeight: "1.43",
              color: " rgba(18, 20, 23)",
              mb: "24px",
            }}
          >
            {data.description}
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: "500px",
              fontSize: "14px",
              lineHeight: "1.43",
              color: " rgba(18, 20, 23)",
              mb: "8px",
            }}
          >
            Accessories and functionalities:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "500px",
              fontSize: "12px",
              lineHeight: "1.5",
              color: " rgba(18, 20, 23, 0.5)",
              mb: "4px",
            }}
          >
            {data.accessories[0]}&ensp;|&ensp;{data.accessories[1]}&ensp;|&ensp;
            {data.accessories[2]}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "400px",
              fontSize: "12px",
              lineHeight: "1.5",
              color: " rgba(18, 20, 23, 0.5)",
              mb: "24px",
            }}
          >
            {data.functionalities[0]}&ensp;|&ensp;{data.functionalities[1]}
            &ensp;|&ensp;
            {data.functionalities[2]}
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: "500px",
              fontSize: "14px",
              lineHeight: "1.43",
              color: " rgba(18, 20, 23)",
              mb: "15px",
            }}
          >
            Rental Conditions:
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: "400px",
              fontSize: "12px",
              lineHeight: "1.5",
              color: " rgba(18, 20, 23)",
              mb: "22px",
            }}
          >
            <span>Minimum age :</span>
            <span className={css.Conditions}> 25</span>
            <span>Valid driver’s license</span>
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: "400px",
              fontSize: "14px",
              lineHeight: "1.43",
              color: " rgba(18, 20, 23)",
              mb: "31px",
            }}
          >
            <span className={css.ConditionsSecond}>
              Security deposite required{" "}
            </span>
            <span>Mileage:</span>
            <span className={css.Conditions}>{data.mileage}</span>
            <span>Price:</span>
            <span className={css.Conditions}> {data.rentalPrice}</span>
          </Typography>
          <CardActions
            sx={{
              padding: "0",
            }}
          >
            <a
              href={`tel:${phoneNumber}`}
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "168px",
                  height: "44px",
                  borderRadius: "12px",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "1.43",
                  textTransform: "none",
                }}
              >
                Rental car
              </Button>
            </a>
            <Button
              variant="text"
              onClick={onClose}
              sx={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "18px",
                height: "18px",
                padding: "0px",
                margin: "0px",
                minWidth: "0px",
              }}
            >
              <CloseIcon sx={{ color: "black" }} />
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
};

export default BasicModal;
