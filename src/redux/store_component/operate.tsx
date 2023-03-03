/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialOperatePathSlice = {
  firstPath : '',
  secondPath : '',
  orderMenu : ['All', 'Pudding', 'Macaroon','Gelato'],
  userMenu : ['My_information', 'Order_information', 'Customer_services'],
  displayPath : [''],
}

const operatePathSlice = createSlice({
  name: 'operatePath',
  initialState: initialOperatePathSlice,
  reducers : {
    displayPath (state, action:PayloadAction<string>) {
      state.displayPath = []
      state.displayPath.push(action.payload);
    },
    display (state, action:PayloadAction<string>) {
      console.log(1)
    }
  }
})

export const { displayPath } = operatePathSlice.actions
export default operatePathSlice.reducer
