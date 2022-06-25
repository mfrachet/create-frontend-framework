import {div, p} from "../framework/element";

export const User = ({firstName, lastName}) => p`Hello ${firstName} ${lastName}`;