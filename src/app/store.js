import { configureStore } from "@reduxjs/toolkit";
import assets from "../features/assets/assetSlice";

export default configureStore({
  reducer: { assets }
});
