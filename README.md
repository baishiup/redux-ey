`npm install redux-ey --save`

```js
// store/test.model.js
export default {
  namespace: 'test',
  state: {
    a: 1,
    b: 2
  }
};


// store/index.js
import { combineReducers } from 'redux';
import ReduxEy from 'redux-ey';
import test from './test.model';

export default combineReducers({

  test: ReduxEy(test)

})

// page/home.js
import * as React from 'react';
import { connect } from 'react-redux';

@connect(({ test }) => ({ test }))
class Home extends React.Component {
  upthetest() {
    let a = this.props.test.a;
    a++;
    this.props.dispatch({ type: 'test', payload: { a, b: 4 } });
  }
  render() {
    return (
      <div>
        <span onClick={() => this.upthetest()}>{this.props.test.a}</span>
      </div>
    );
  }
}
export default Home;
```
