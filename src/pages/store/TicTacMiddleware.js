import { createAsyncThunk } from "@reduxjs/toolkit";
import { PASS_DATA, RESET_DATA } from "../../redux/ActionTypes";

export const ticTacMiddleware = createAsyncThunk(
  PASS_DATA,
  async (payload, { rejectWithValue }) => {
    try {
      return payload;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const resetMiddleware = createAsyncThunk(
  RESET_DATA,
  async (payload, { rejectWithValue }) => {
    try {
      return payload;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
