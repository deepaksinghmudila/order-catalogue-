import React,{useState} from "react";
import NavBar from "./NavBar";
import Show from "./showItems";
import Footer from "./footer";
import DataJson from "./data.json";
import Cart from "./cart";
import CheckOut from "./checkOut";

class Catalogoue extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: new Array(),
      AllData: [...DataJson],
    };
  }

  checkIfPressnt = (id, data) => {
    for (let x in data) {
      if (data[x].id === id) {
        return x;
      }
    }
    return false;
  };

  addCart = (coffee) => {
    const name = coffee.coffie;
    const id = coffee.id;
    const quantity = 1;
    const amount = coffee.amount;
    const index = this.checkIfPressnt(coffee.id, this.state.cart);
    const newCart = this.state.cart;
    const tempData = [...this.state.AllData];

    if (index) {
      newCart[index].quantity++;
      const dataIndex = this.checkIfPressnt(coffee.id, this.state.AllData);
      tempData[dataIndex] = {
        ...tempData[dataIndex],
        quantity: tempData[dataIndex].quantity + 1,
      };
    } else {
      const cartId = `${coffee.id}Cart`;
      const btnId = coffee.id;
      newCart.push({ name, id, quantity, amount });
      this.removeCartBtn(btnId, cartId);
      const dataIndex = this.checkIfPressnt(coffee.id, this.state.AllData);
      tempData[dataIndex] = { ...tempData[dataIndex], quantity: 1 };
    }
    this.setCart(newCart);
    this.setData(tempData);
    console.log(this.state.cart);
  };

  setCart = (newCart) => {
    this.setState({
      cart: newCart,
    });
  };
  setData = (data) => {
    this.setState({
      AllData: data,
    });
  };

  removeCartBtn = (show, remove) => {
    const hideData = document.getElementById(remove);
    const showData = document.getElementById(show);
    hideData.style.display = "none";
    showData.style.display = "block";
  };

  removeCartIn = (coffee) => {
    const index = this.checkIfPressnt(coffee.id, this.state.cart);
    const newCart = this.state.cart;
    const dataIndex = this.checkIfPressnt(coffee.id, this.state.AllData);
    //const tempData = this.state.AllData;
    const tempData = [...this.state.AllData];
    if (newCart[index].quantity == 1) {
      const cartId = `${coffee.id}Cart`;
      const btnId = coffee.id;
      this.removeCartBtn(cartId, btnId);
      newCart.splice(index, 1);
      tempData[dataIndex].quantity = 0;
    } else {
      newCart[index].quantity--;
      tempData[dataIndex].quantity--;
    }
    this.setData(tempData);
    this.setCart(newCart);
  };

  checkoutOrder = () => {
    const cart = "cart-Items";
    const final = "check-out-Items";
    const menuItems = "main-menu";
    const submitOrder = "SubmitOrdr";
    const displayOrder = "orderSummary";
    const hideData = document.getElementById(cart);
    const finalShow = document.getElementById(final);
    const hide = document.getElementById(menuItems);
    const hidePrevSubmit = document.getElementById(submitOrder);
    const displaycurrent = document.getElementById(displayOrder);
    hideData.style.display = "none";
    finalShow.style.display = "block";
    hide.style.display = "none";
    hidePrevSubmit.style.display = "none";
    displaycurrent.style.display = "block";
  };

  orderPlaced = () => {
    const cart = this.state.cart;
    for (let i in cart) {
      const cartId = `${cart[i].id}Cart`;
      const btnId = cart[i].id;
      this.removeCartBtn(cartId, btnId);
    }

    this.setState({
      cart: new Array(),
      AllData: [...DataJson],
    });

    const menuItems = "main-menu";
    const final = document.getElementById("SubmitOrdr");
    const prev = document.getElementById("orderSummary");
    const hide = document.getElementById(menuItems);

    final.style.display = "block";
    prev.style.display = "none";
    hide.style.display = "none";
  };

  countinueShopping = () => {
    const cart = "cart-Items";
    const menuItems = "main-menu";
    const final = "check-out-Items";
    const showData = document.getElementById(menuItems);
    const hideData = document.getElementById(cart);
    const hidefinal = document.getElementById(final);
    hideData.style.display = "none";
    showData.style.display = "block";
    hidefinal.style.display = "none";
  };

  checkOutCartItems = () => {
    const cart = "cart-Items";
    const menuItems = "main-menu";
    const hideData = document.getElementById(menuItems);
    const showData = document.getElementById(cart);
    hideData.style.display = "none";
    showData.style.display = "block";
  };

  render() {
 
    return (
      <>
        <NavBar           
          cartValue={this.state.cart.length}
          countinueShoping={this.countinueShopping}
          checkOut={this.checkOutCartItems}
        />

        <Show
          data={this.state.AllData}
          addCartIn={this.addCart}
          removeCart={this.removeCartIn}
        />

        <Cart
          cartItems={this.state.cart}
          checkout={this.checkoutOrder}
          countinueShopping={this.countinueShopping}
          addCartIn={this.addCart}
          removeCart={this.removeCartIn}
        />

        <CheckOut
          cartItems={this.state.cart}
          orderPlaced={this.orderPlaced}
          GoBack={this.countinueShopping}
        />

        <Footer />
      </>
    );
  }
}

export default Catalogoue;
