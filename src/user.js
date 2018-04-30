import { createComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

const firstName = "Marvin";
const lastName = "Frachet";

const methods = { changeName: (state, firstName) => ({ ...state, firstName }) };
const initialState = { firstName: "Marvin", lastName: "Frachet" };

const template = ({ firstName, lastName, methods }) =>
  div`${onClick(() =>
    methods.changeName("Thomas")
  )} Hello ${firstName} ${lastName}`;

export const User = createComponent({ template, methods, initialState });
