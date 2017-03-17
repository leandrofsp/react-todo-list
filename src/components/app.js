import React, { Component } from 'react';
//import AppRoutes from './routes';
import Menu from './common/menu';
import Todos from './todos/todos';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      list: []
    }
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Menu />

        <main className="mdl-layout__content">
          <div className="page-content">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--3-col"></div>
              <div className="mdl-cell mdl-cell--6-col">
                <Todos />

              </div>
              <div className="mdl-cell mdl-cell--3-col"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;