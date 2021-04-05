import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  Container,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import "./index.css";
import { cyan } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "160vh",
    minHeight: "auto",
    backgroundColor: cyan[50],
    paddingTop: theme.spacing(5),
    marginBottom: theme.spacing(4),
  },
}));

const prepareManu = (data, addCart, removeCart) => {
  const prepareData = data.map((data) => {
    const count = data.quantity ? data.quantity : 1;
    return (
      <Grid className="items" item sm={3} key={data.id}>
        <Card>
          <CardContent id={`${data.id}Card`}>
            <Typography variant="h6">
              {" "}
              {data.coffie} : {data.amount}{" "}
            </Typography>
            <Typography variant="subtitle1"> {data.discription} </Typography>
            <div id={`${data.id}Cart`} onClick={() => addCart(data)}>
              <CardActions>
                <Button variant="outlined" color="primary">
                  Add To Cart
                </Button>
              </CardActions>
            </div>
            <div id={data.id} className="Add-cart-btn">
              <CardActions>
                <Button
                  onClick={() => addCart(data)}
                  variant="outlined"
                  color="primary"
                >
                  +
                </Button>
                <p className="count"> {count} </p>
                <Button
                  onClick={() => removeCart(data)}
                  variant="outlined"
                  color="primary"
                >
                  -
                </Button>
              </CardActions>
            </div>
          </CardContent>
        </Card>
      </Grid>
    );
  });
  return prepareData;
};

const Show = (Props) => {
  const classes = useStyles();

  const rendermenu = prepareManu(Props.data, Props.addCartIn, Props.removeCart);

  return (
    <div id="main-menu">
      <div className="container main-heading "> Select Your Coffee : </div>
      <Container className={classes.root}>
        <Grid container spacing={4}>
          {rendermenu}
        </Grid>
      </Container>
    </div>
  );
};

export default Show;
