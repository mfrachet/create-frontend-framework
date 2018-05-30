const attrMapper = {
  className: (state, className) => ({
    ...state,
    class: { ...state.class, [className]: true }
  }),
  onClick: (state, click) => ({
    ...state,
    on: { ...state.on, click }
  })
};

export const mappingAttributes = attrs => (acc, key) => {
  const nextState = attrMapper[key](acc, attrs[key]);
  return nextState;
};
