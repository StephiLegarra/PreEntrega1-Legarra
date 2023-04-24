// import styles from "./ItemList.module.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        minHeight: "90vh",
        padding: "40px",
      }}
    >
      {items.map((item) => {
        return (
          <Card sx={{ width: 345, height: 350 }} key={item.id}>
            <CardMedia sx={{ height: 140 }} image={item.img} title="img" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body2" color="primary">
                {item.price}
              </Typography>
            </CardContent>
            <CardActions style={{ height: 100 }}>
              <Link to={`/itemDetail/${item.id}`}>
                <Button variant="contained" size="small">
                  Ver detalle
                </Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
      ;
    </div>
  );
};

export default ItemList;
