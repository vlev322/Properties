import React, {Component, Fragment} from 'react';

import styles from './styles/main.sass';

import Properties from './properties/properties';

class App extends Component {
  render() {
    return (
			<Fragment>
				<Properties />
			</Fragment>
    );
  }
}

export default App;
