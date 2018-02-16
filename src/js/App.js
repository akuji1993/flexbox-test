import React from 'react';
import style from './App.scss';
import { Link, Route } from 'react-router-dom';
import {
  Flexbox,
  Animation,
  D3Component,
  WorldDomination
} from './pages';

class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <nav>
          <ul className={style.flexContainer}>
            <Link className={style.flexLink} to="/flexbox">Flexbox</Link>
            <Link className={style.flexLink} to="/animation">Animation</Link>
            <Link className={style.flexLink} to="/d3">D3</Link>
            <Link className={style.flexLink} to="/worlddomination">World Domination</Link>
          </ul>
        </nav>
        <Route path="/flexbox" component={Flexbox}/>
        <Route path="/animation" component={Animation}/>
        <Route path="/d3" component={D3Component}/>
        <Route path="/worlddomination" component={WorldDomination}/>
      </div>
    );
  }
}

export default App;
