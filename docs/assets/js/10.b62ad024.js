(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{171:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("I suggest we take the approach described previously in "),s("router-link",{attrs:{to:"/state/intro.html#representation-with-code"}},[t._v("introduction to state, representation with code")]),t._v(":")],1),t._v(" "),t._m(2),s("p",[t._v("We're going to create function that will accept two arguments: the current state of the component and a parameter. This parameter will help\nus modifying the state from context.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[t._v("During the application life cycle, we want the initial state to mutate. Here we're going to define the simplest function to make the previous\nstate mutate according to some parameters:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"our-own-state-management-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#our-own-state-management-system","aria-hidden":"true"}},[this._v("#")]),this._v(" Our own state management system")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"what-is-our-approach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-our-approach","aria-hidden":"true"}},[this._v("#")]),this._v(" What is our approach?")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" t1State "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" firstName"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Marvin"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastName"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Frachet"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" t2State "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("transform")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t1State"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lastName"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Thomas"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v('// t2State is now { firstName: "Marvin", lastName: "Thomas" }')]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"initial-state-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-state-value","aria-hidden":"true"}},[this._v("#")]),this._v(" Initial state value")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Every application may have an initial state value. It helps for consistency and to avoid multiple safety checks on "),a("code",[this._v("undefined")]),this._v(" types.\nLet's create a simple object that will represent our initial component state of "),a("code",[this._v("./src/user.js")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" initialState "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" firstName"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Marvin"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastName"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Frachet"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"mutating-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutating-functions","aria-hidden":"true"}},[this._v("#")]),this._v(" Mutating functions")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token function-variable function"}},[t._v("changeName")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" firstName"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" firstName "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("It takes the current state as first parameters. The other parameters are the different "),a("code",[this._v("variable")]),this._v(" parameters that will allow for the state modification.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newState "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("changeName")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initialState"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Thomas"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newState"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v('// prints { firstName: "Thomas", lastName: "Frachet" }')]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Let's create an object called "),a("code",[this._v("methods")]),this._v(" that represents a set of mutating actions:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" initialState "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" firstName"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Marvin"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastName"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Frachet"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" methods "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  changeName"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" firstName"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" firstName "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="initialize.md";a.default=e.exports}}]);