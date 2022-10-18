import { type } from "@testing-library/user-event/dist/type";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Pants",
      category: "Trousers",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PROUCTS:
      return state;
    default:
      return state;
  }
};
