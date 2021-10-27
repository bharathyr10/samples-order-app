import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userName: "",
  custId: "",
  custName: "",
  address: "",
  products: {},
  orderDetails: {},
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    userLoggedIn(state, action) {
      const { userName } = action.payload;
      // const customer = state.find((order) => order.custId === id);
      //if (customer) {
      state.userName = userName;

      // }
    },
    customerSelected(state, action) {
      const { custId, custName } = action.payload;
      state.custId = custId;
      state.custName = custName;
    },
    addressSelected(state, action) {
      const { address } = action.payload;
      // const customer = state.find((order) => order.custId === id);
      //if (customer) {
      state.address = address;
      //console.log(address);
      // }
    },
    productsSelected(state, action) {
      const { products } = action.payload;
      //const customer = state.find((order) => order.custId === id);
      //if (customer) {
      state.products = products;
      console.log(products);
      //}
    },
    orderPlaced(state, action) {
      const { orderDetails } = action.payload;
      //const customer = state.find((order) => order.custId === id);
      //if (customer) {
      console.log(orderDetails);
      state.orderDetails = orderDetails;
      //}
    },
  },
});

export const {
  customerSelected,
  addressSelected,
  userLoggedIn,
  productsSelected,
  orderPlaced,
} = orderSlice.actions;

export default orderSlice.reducer;
