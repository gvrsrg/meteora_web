import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUp: false,
  signIn: false,
  loading: false,
  error: null,
  users: [],
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id"),
};

export const authSignUp = createAsyncThunk(
  "auth/signup",
  async ({ login, password }, thunkApi) => {
    try {
      const res = await fetch("http://localhost:...", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const json = await res.json();

      if (json.error) {
        thunkApi.rejectWithValue(json.error);
      }

      return json;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const authSignIn = createAsyncThunk(
  "auth/signin",
  async ({ login, password }, thunkApi) => {
    try {
      const res = await fetch("http://localhost:...", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });

      const token = await res.json();

      if (token.error) {
        return thunkApi.rejectWithValue(token.error);
      }

      localStorage.setItem("token", token.token);
      localStorage.setItem("id", token.id);

      return token;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(authSignUp.pending, (state) => {
        state.error = null;
        state.signUp = true;
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.error = action.payload;
        state.signUp = false;
      })
      .addCase(authSignUp.fulfilled, (state) => {
        state.error = null;
        state.signUp = false;
      })
      
      // Login
      .addCase(authSignIn.pending, (state) => {
        state.error = null;
        state.signIn = true;
      })
      .addCase(authSignIn.rejected, (state, action) => {
        state.error = action.payload;
        state.signIn = false;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.error = null;
        state.signIn = false;
        state.token = action.payload.token;
        state.id = action.payload.id;
      });
  },
});

export default applicationSlice.reducer;
