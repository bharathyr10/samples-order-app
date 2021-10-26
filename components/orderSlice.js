import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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
    customerSelected(state, action) {
      const { custId, custName } = action.payload;
      state.custId = custId;
      state.custName = custName;
    },
    addressSelected(state, action) {
      const { id, address } = action.payload;
      const customer = state.find((order) => order.custId === id);
      if (customer) {
        customer.address = address;
      }
    },
    productsSelected(state, action) {
      const { id, products } = action.payload;
      const customer = state.find((order) => order.custId === id);
      if (customer) {
        customer.products = products;
      }
    },
    orderPlaced(state, action) {
      const { id, orderDetails } = action.payload;
      const customer = state.find((order) => order.custId === id);
      if (customer) {
        customer.orderDetails = orderDetails;
      }
    },
  },
});

export const { customerSelected, addressSelected } = orderSlice.actions;

export default orderSlice.reducer;
