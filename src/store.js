import { configureStore } from "@reduxjs/toolkit";
import { cabinetReducer } from "./cabinetSlice";

export default configureStore({
  reducer: {
    cabinet: cabinetReducer,
  },
});