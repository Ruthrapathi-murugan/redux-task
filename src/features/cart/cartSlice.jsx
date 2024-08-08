// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://via.placeholder.com/150/0000FF/808080?text=iPhone+9", // New Image URL
      images: [
          "https://via.placeholder.com/300/0000FF/808080?text=iPhone+9+Image+1",
          "https://via.placeholder.com/300/FF0000/FFFFFF?text=iPhone+9+Image+2"
      ],
      quantity: 1
    },
    {
      id: 2,
      title: "iPhone X",
      description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://via.placeholder.com/150/00FF00/000000?text=iPhone+X", // New Image URL
      images: [
          "https://via.placeholder.com/300/00FF00/000000?text=iPhone+X+Image+1",
          "https://via.placeholder.com/300/FF00FF/FFFFFF?text=iPhone+X+Image+2"
      ],
      quantity: 1
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description: "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://via.placeholder.com/150/FFFF00/000000?text=Samsung+Universe+9", // New Image URL
      images: [
          "https://via.placeholder.com/300/FFFF00/000000?text=Samsung+Universe+9+Image+1"
      ],
      quantity: 1
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://via.placeholder.com/150/FFA500/000000?text=OPPOF19", // New Image URL
      images: [
          "https://via.placeholder.com/300/FFA500/000000?text=OPPOF19+Image+1"
      ],
      quantity: 1
    },
    {
      id: 5,
      title: "Huawei P30",
      description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Huawei+P30", // New Image URL
      images: [
          "https://via.placeholder.com/300/FF0000/FFFFFF?text=Huawei+P30+Image+1"
      ],
      quantity: 1
    }
  ],
  totalQuantity: 5, // Total quantity (1 of each product initially)
  totalAmount: 3476 // Total price of all products combined
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const product = state.products.find(item => item.id === action.payload);
      if (product) {
        product.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find(item => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= product.price;
      }
    }
  }
});

export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
