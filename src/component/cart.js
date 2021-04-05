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

const DefineEmptyCart = () => {
  const classes = useStyles();

  const cart = (
    <div className="empty-Cart">
      <Container className={classes.root}>
        <Typography variant="h1" className="empty-cart">
          {" "}
          Oops your cart is empty :(, Go grab some tasty coffee :){" "}
        </Typography>
      </Container>
    </div>
  );

  return cart;
};

const DefineCart = (
  rows,
  countinueShopping,
  checkout,
  addCartIn,
  removeCart
) => {
  let total = 0;
  const classes = useStyles();
  const cartValue = (
    <Container className={classes.root}>
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
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => addCartIn(row)}
                    >
                      +
                    </Button>
                    <p className="count"> {row.quantity} </p>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => removeCart(row)}
                    >
                      -
                    </Button>
                  </TableCell>
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
          onClick={() => countinueShopping()}
        >
          Continue Shopping
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => checkout()}
        >
          CheckOut
        </Button>
      </div>
    </Container>
  );

  return cartValue;
};

const Cart = (Props) => {
  const rows = Props.cartItems;
  const cartValue =
    Props.cartItems.length > 0
      ? DefineCart(
          rows,
          Props.countinueShopping,
          Props.checkout,
          Props.addCartIn,
          Props.removeCart
        )
      : DefineEmptyCart();

  return (
    <>
      <div id="cart-Items">
        <div className=" main-heading "> Your Cart: </div>
        {cartValue}
      </div>
    </>
  );
};

export default Cart;
