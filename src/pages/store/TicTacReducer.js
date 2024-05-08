import { createSlice } from "@reduxjs/toolkit";
import { ticTacMiddleware, resetMiddleware } from "./TicTacMiddleware";
const initialState = {
  loading: false,
  arrData: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  playerState: "O",
  winnerState: false,
  winnerStage: "",
};
const tictacReducer = createSlice({
  name: "tictacReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ticTacMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ticTacMiddleware.fulfilled, (state, action) => {
      console.log(action.payload, "find payload in midd");

      state.loading = false;
      const index = action.payload.index;
      const value = action.payload.value;
      state.arrData[index] = value;
      state.playerState = value === "O" ? "X" : "O";

      for (let i = 0; i < state.arrData.length; i++) {
        if (i === 0 || i === 3 || i == 6) {
          if (
            state.arrData.at(i) === state.arrData.at(i + 1) &&
            state.arrData.at(i + 1) === state.arrData.at(i + 2)
          ) {
            console.log("find winner 1 logic");
            state.winnerState = true;
            return;
          }
        }
        if (i === 2) {
          if (
            state.arrData.at(i) === state.arrData.at(i + 2) &&
            state.arrData.at(i + 2) === state.arrData.at(i + 4)
          ) {
            console.log("find winner 2 logic");
            state.winnerState = true;
            return;
          }
        }
        if (i === 0 || i === 1 || i == 2) {
          if (
            state.arrData.at(i) === state.arrData.at(i + 3) &&
            state.arrData.at(i + 3) === state.arrData.at(i + 6)
          ) {
            console.log("find winner 3 logic");
            state.winnerState = true;
            return;
          }
        }
        if (i === 0) {
          if (
            state.arrData.at(i) === state.arrData.at(i + 4) &&
            state.arrData.at(i + 4) === state.arrData.at(i + 8)
          ) {
            console.log("find winner 4 logic");
            state.winnerState = true;
            return;
          }
        }
      }
      if (state.arrData.some((num) => typeof num === "number") === false) {
        state.winnerStage = "Draw";
      }
    });
    builder.addCase(ticTacMiddleware.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(resetMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(resetMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.arrData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      state.playerState = "O";
      state.winnerState = false;
      state.winnerStage = "";
    });
    builder.addCase(resetMiddleware.rejected, (state) => {
      state.loading = false;
    });
  },
});
export default tictacReducer.reducer;
