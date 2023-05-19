import styles from "./ItemList.module.css";
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
  return (
    <div className={styles.containerItemList}>
      {items.map((item) => {
        return (
          <Card
            sx={{ width: 450, height: 720, margin: "20px" }}
            key={item.id}
            style={{
              boxShadow: "4px 5px 21px -2px rgba(0,0,0,0.7)",
              WebkitBoxShadow: "4px 5px 21px -2px rgba(0,0,0,0.7)",
              MozBoxShadow: "4px 5px 21px -2px rgba(0,0,0,0.7)",
            }}
          >
            <CardMedia sx={{ height: 500 }} image={item.img} title="img" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                {item.description}
              </Typography>
              <Typography
                variant="body1"
                color="text.primary"
                align="center"
                marginTop="10px"
              >
                $ {item.price}
              </Typography>
            </CardContent>
            <CardActions style={{ height: 100 }}>
              <Link to={`/itemDetail/${item.id}`}>
                <Button
                  variant="contained"
                  size="medium"
                  style={{
                    backgroundColor: "yellow",
                    color: "black",
                    marginLeft: "160px",
                    marginBottom: "20px",
                  }}
                >
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
