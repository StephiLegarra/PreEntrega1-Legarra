import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const FormCheckout = ({ handleSubmit, handleChange, errors, values }) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Telefono"
              variant="outlined"
              fullWidth
              name="telefono"
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
              name="password"
              onChange={handleChange}
              error={errors.password ? true : false}
              helperText={errors.password}
              type="password"
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Confirmar password"
              variant="outlined"
              fullWidth
              name="confirmPassword"
              onChange={handleChange}
              error={errors.confirmPassword ? true : false}
              helperText={errors.confirmPassword}
              type="password"
            />
          </Grid>
        </Grid>
        <Grid>
          <Button
            type="submit"
            variant="contained"
            size="medium"
            style={{
              backgroundColor: "yellow",
              color: "black",
              margin: "10px",
            }}
            sx={{ marginTop: 2 }}
          >
            Comprar
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;
