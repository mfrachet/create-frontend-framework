import { div } from "../framework/element";

const firstName = "Marvin";
const lastName = "Frachet";

export const User = ({ firstName, lastName }) =>
  div`Hello ${firstName} ${lastName}`;
