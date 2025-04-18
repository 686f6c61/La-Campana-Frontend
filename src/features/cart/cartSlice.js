import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload)
    },
    deleteItem: (state, action) => {
      const foundItem = state.find(item => item.ItemCode === action.payload)

      foundItem && state.splice(state.indexOf(foundItem), 1)
    },
    updateItem: (state, action) => {
      const { ItemCode, quantity, options } = action.payload
      const foundItem = state.find(item => item.ItemCode === ItemCode)
      if (foundItem) {
        foundItem.quantity = quantity
        if (options) {
          foundItem.options = options
        }
        foundItem.subtotal = Math.round((parseFloat(foundItem.price) * quantity) * 100) / 100
      }
    }
  }
})

export const { addItem, deleteItem, updateItem } = cartSlice.actions
export default cartSlice.reducer