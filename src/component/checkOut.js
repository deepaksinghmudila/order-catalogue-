import React from "react";
import { Container, Typography, Button } from "@material-ui/core";
import { cyan } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import "./index.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "160vh",
    minHeight: "80vh",
    backgroundColor: cyan[50],
    paddingTop: theme.spacing(5),
    marginBottom: theme.spacing(4),
  },
  table: {
    minWidth: 650,
  },
  btn: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const DefineCart = (rows, GoBack, orderPlaced) => {
  let total = 0;
  const classes = useStyles();
  const cartValue = (
    <Container id="orderSummary" className={classes.root}>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="right">Coffee Id</TableCell>
              <TableCell align="right">Coffee Name</TableCell>
              <TableCell align="right">Amount(1)</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              total = row.quantity * row.amount.split("$")[0] + total;
              return (
                <TableRow key={row.id}>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">
                    {row.quantity * row.amount.split("$")[0] + "$"}
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow key={"total"}>
              <TableCell align="right">{"Total"}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{`${total}$`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.btn}>        
        <Button
          variant="contained"
          color="secondary"
          onClick={() => orderPlaced()}
        >
          Place Order
        </Button>
      </div>
    </Container>
  );

  return cartValue;
};

const DefinePlacedOrder = () => {
  const classes = useStyles();

  const cart = (
    <div id="SubmitOrdr" className="order-placed">
      <Container className={classes.root}>
        <Typography variant="h1" className="order-placed">
          {" "}
          Your Order has been successfully Placed :){" "}
        </Typography>
      </Container>
    </div>
  );

  return cart;
};

const CheckOut = (Props) => {
  const order = DefineCart(Props.cartItems, Props.GoBack, Props.orderPlaced);
  const orderPlaced = DefinePlacedOrder();

  return (
    <>
      <div className="container" id="check-out-Items">
        <div className="container main-heading "> Final Summary </div>
        {order}
        {orderPlaced}
      </div>
    </>
  );
};

export default CheckOut;
