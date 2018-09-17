const attrMapper = {
  className: (state, classNames) => ({
    ...state,
    class: {
      ...state.class,
      ...classNames
        .split(" ")
        .reduce((acc, className) => ({ ...acc, [className]: true }), {})
    }
  }),
  onClick: (state, click) => ({
    ...state,
    on: { ...state.on, click }
  }),
  onKeyUp: (state, keyup) => ({
    ...state,
    on: { ...state.on, keyup }
  })
};

export const mappingAttributes = attrs => (acc, key) => {
  const nextState = attrMapper[key]
    ? attrMapper[key](acc, attrs[key])
    : { ...acc, props: { ...acc.props, [key]: attrs[key] } };

  return nextState;
};

export const computeAttrs = attrs =>
  Object.keys(attrs).reduce(mappingAttributes(attrs), {
    class: {},
    on: {},
    props: {}
  });
