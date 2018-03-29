function disAction(model) {
  let actions = {
    [model.name]: (state, { payload }) => ({ ...state, ...payload })
  };
  return (state = model.state, action) => {
    return Object.keys(actions).indexOf(action.type) > -1 ? actions[action.type](state, action) : state;
  };
}

export default disAction;
