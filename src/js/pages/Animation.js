import React from 'react';
import style from './Animation.scss';
import classNames from 'classnames';

class Animation extends React.Component {

  constructor() {
    super();
    this.state = {
      trBoxMoved: false
    };
  }

  render() {
    return (
      <div className={style.animation}>
        <h3 style={{textAlign: 'center'}}>Transitions</h3>
        <div className={style.transitionContainer}>
          <div className={style.transitionBox1}/>
          <div className={style.transitionBox2}/>
        </div>

        <h3 style={{textAlign: 'center'}}>Transformations</h3>
        <div className={style.transformationContainer}>
          <button onClick={() => this.setState({trBoxMoved: !this.state.trBoxMoved})}>Click me</button>
          <div className={classNames(style.transformationBox, {[style.transformationBox__moved]: this.state.trBoxMoved})}/>
        </div>
        <h3 style={{textAlign: 'center'}}>Animations</h3>
        <div className={style.animationContainer}>
          <div className={style.animationCircle}/>
          <div className={style.animationCircle}/>
          <div className={style.animationCircle}/>
          <div className={style.animationCircle}/>
          <div className={style.animationCircle}/>
        </div>
      </div>
    );
  }
}

export default Animation;
