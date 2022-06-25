import {init} from './framework/index.js';
import {div, p} from './framework/element.js';
import {User} from "./src/user";

const firstName = 'Ilya';
const lastName = 'Mishkin';

init('#app', User({firstName, lastName}));