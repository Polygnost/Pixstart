import { createSlice } from "@reduxjs/toolkit";

export const assetSlice = createSlice({
  name: "assets",
  initialState: { value: [] },
  reducers: {
    foo: ({ value }, { payload }) => 2
  }
});

export const { join, leave } = assetSlice.actions;
export default assetSlice.reducer;
