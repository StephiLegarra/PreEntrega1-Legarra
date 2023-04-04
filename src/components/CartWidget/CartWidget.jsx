import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const CartWidget = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        paddingRight: "1rem",
      }}
    >
      <h3> Ver carrito </h3>
      <Badge badgeContent={5} color="warning">
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
