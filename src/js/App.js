import React from 'react';
import style from './App.scss';
import classNames from 'classnames';
import fb from '../../static/img/facebook.png';
import tw from '../../static/img/twitter.png';
import yt from '../../static/img/youtube.png';

class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <nav>
          <ul className={style.flexContainer}>
            <a className={style.flexItem}>Home</a>
            <a className={style.flexItem}>About</a>
            <a className={style.flexItem}>Shop</a>
            <a className={style.flexItem}>Contact</a>
          </ul>
        </nav>
        <div className={style.flexContainer}>
          <div className={classNames(style.informationBox, style.box1)}>
            <div className={style.number}>1</div>
          </div>
          <div className={classNames(style.informationBox, style.box2)}>
            <div className={style.number}>2</div>
          </div>
          <div className={classNames(style.informationBox, style.box3)}>
            <div className={style.number}>3</div>
          </div>
        </div>
        <p className={style.article}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut turpis dolor. Mauris quis bibendum odio, in ullamcorper ipsum. Quisque quis sollicitudin justo, id interdum urna. Maecenas sit amet turpis at metus pulvinar porttitor. Donec et molestie dolor, id pretium leo. Vestibulum ex est, placerat nec orci sit amet, viverra fermentum massa. Cras dapibus euismod ex in condimentum. Fusce tristique nulla non est consectetur, nec rhoncus ligula interdum. Pellentesque in mollis risus. Vestibulum condimentum felis a pretium malesuada. Donec dapibus enim quis aliquam mollis. Nulla suscipit ut tortor sit amet mollis. Nunc ante metus, congue id blandit sed, commodo eget dolor. Etiam semper libero elit, sed dapibus neque pulvinar eget.</p>

        <div className={style.flexContainer}>
          <span className={style.article}>
            Nunc molestie turpis sit amet arcu ornare hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla rhoncus elit nec dui ornare, fermentum imperdiet lorem fermentum. Nulla ex enim, semper sodales ante at, congue porta dui. Integer et tincidunt mauris, ac venenatis augue. Nam ac facilisis quam. Ut vel elementum nibh.

            Donec interdum finibus magna eu efficitur. Suspendisse potenti. Nam blandit mi ut ipsum bibendum, sit amet maximus urna condimentum. Integer lobortis elit risus, sit amet volutpat ligula finibus quis. Nunc lacinia interdum libero, eu aliquam sapien malesuada at. Aliquam porttitor ex eu sollicitudin convallis. Nullam pellentesque interdum dolor id sagittis. Etiam at euismod turpis. Morbi mauris lorem, ultrices rutrum est ut, iaculis porta ex. Nulla accumsan augue at nulla tincidunt viverra. Sed aliquet urna pellentesque tellus rhoncus, venenatis elementum lacus lobortis. Integer nibh enim, auctor nec feugiat id, porttitor ullamcorper massa. Curabitur luctus eu quam id accumsan. Donec tempor arcu sit amet leo pellentesque consectetur. In gravida scelerisque metus, a pharetra mauris accumsan a.
          </span>
          <div className={classNames(style.picture, style.pictureRight)}><div className={style.number}>4</div></div>
        </div>

        <div className={style.flexContainer}>
          <div className={classNames(style.picture, style.pictureLeft)}><div className={style.number}>5</div></div>
          <span className={style.article}>
            Nunc molestie turpis sit amet arcu ornare hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla rhoncus elit nec dui ornare, fermentum imperdiet lorem fermentum. Nulla ex enim, semper sodales ante at, congue porta dui. Integer et tincidunt mauris, ac venenatis augue. Nam ac facilisis quam. Ut vel elementum nibh.

            Donec interdum finibus magna eu efficitur. Suspendisse potenti. Nam blandit mi ut ipsum bibendum, sit amet maximus urna condimentum. Integer lobortis elit risus, sit amet volutpat ligula finibus quis. Nunc lacinia interdum libero, eu aliquam sapien malesuada at. Aliquam porttitor ex eu sollicitudin convallis. Nullam pellentesque interdum dolor id sagittis. Etiam at euismod turpis. Morbi mauris lorem, ultrices rutrum est ut, iaculis porta ex. Nulla accumsan augue at nulla tincidunt viverra. Sed aliquet urna pellentesque tellus rhoncus, venenatis elementum lacus lobortis. Integer nibh enim, auctor nec feugiat id, porttitor ullamcorper massa. Curabitur luctus eu quam id accumsan. Donec tempor arcu sit amet leo pellentesque consectetur. In gravida scelerisque metus, a pharetra mauris accumsan a.
          </span>
        </div>

        <div className={style.flexContainerSocial}>
          <img className={style.socialIcon} src={fb} alt='Facebook'/>
          <img className={style.socialIcon} src={tw} alt='Twitter'/>
          <img className={style.socialIcon} src={yt} alt='Youtube'/>
        </div>
      </div>
    );
  }
}

export default App;
