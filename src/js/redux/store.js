import { configureStore } from "@reduxjs/toolkit";
import application from "./slices/applicationSlice";

export const store = configureStore({
	reducer: { application },
});