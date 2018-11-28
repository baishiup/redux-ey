function disAction(model) {
  let actions = {
    [model.namespace]: (state, { payload }) => ({ ...state, ...payload })
  };
  return (state = model.state, action) => {
    return Object.keys(actions).includes(action.type) ? actions[action.type](state, action) : state;
  };
}

export default disAction;
