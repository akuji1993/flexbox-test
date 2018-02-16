import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <nav>
          <ul className="flex-container">
            <a className="flex-item">Home</a>
            <a className="flex-item">About</a>
            <a className="flex-item">Shop</a>
            <a className="flex-item">Contact</a>
          </ul>
        </nav>
        <div className="flex-container">
          <div className="information-box box-1">
            <div className="number">1</div>
          </div>
          <div className="information-box box-2">
            <div className="number">2</div>
          </div>
          <div className="information-box box-3">
            <div className="number">3</div>
          </div>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut turpis dolor. Mauris quis bibendum odio, in ullamcorper ipsum. Quisque quis sollicitudin justo, id interdum urna. Maecenas sit amet turpis at metus pulvinar porttitor. Donec et molestie dolor, id pretium leo. Vestibulum ex est, placerat nec orci sit amet, viverra fermentum massa. Cras dapibus euismod ex in condimentum. Fusce tristique nulla non est consectetur, nec rhoncus ligula interdum. Pellentesque in mollis risus. Vestibulum condimentum felis a pretium malesuada. Donec dapibus enim quis aliquam mollis. Nulla suscipit ut tortor sit amet mollis. Nunc ante metus, congue id blandit sed, commodo eget dolor. Etiam semper libero elit, sed dapibus neque pulvinar eget.</p>

        <div className="flex-container">
          <span className="article">
            Nunc molestie turpis sit amet arcu ornare hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla rhoncus elit nec dui ornare, fermentum imperdiet lorem fermentum. Nulla ex enim, semper sodales ante at, congue porta dui. Integer et tincidunt mauris, ac venenatis augue. Nam ac facilisis quam. Ut vel elementum nibh.

            Donec interdum finibus magna eu efficitur. Suspendisse potenti. Nam blandit mi ut ipsum bibendum, sit amet maximus urna condimentum. Integer lobortis elit risus, sit amet volutpat ligula finibus quis. Nunc lacinia interdum libero, eu aliquam sapien malesuada at. Aliquam porttitor ex eu sollicitudin convallis. Nullam pellentesque interdum dolor id sagittis. Etiam at euismod turpis. Morbi mauris lorem, ultrices rutrum est ut, iaculis porta ex. Nulla accumsan augue at nulla tincidunt viverra. Sed aliquet urna pellentesque tellus rhoncus, venenatis elementum lacus lobortis. Integer nibh enim, auctor nec feugiat id, porttitor ullamcorper massa. Curabitur luctus eu quam id accumsan. Donec tempor arcu sit amet leo pellentesque consectetur. In gravida scelerisque metus, a pharetra mauris accumsan a.
          </span>
          <div className="picture pictureRight"><div className="number">4</div></div>
        </div>

        <div className="flex-container">
          <div className="picture pictureLeft"><div className="number">5</div></div>
          <span className="article">
            Nunc molestie turpis sit amet arcu ornare hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla rhoncus elit nec dui ornare, fermentum imperdiet lorem fermentum. Nulla ex enim, semper sodales ante at, congue porta dui. Integer et tincidunt mauris, ac venenatis augue. Nam ac facilisis quam. Ut vel elementum nibh.

            Donec interdum finibus magna eu efficitur. Suspendisse potenti. Nam blandit mi ut ipsum bibendum, sit amet maximus urna condimentum. Integer lobortis elit risus, sit amet volutpat ligula finibus quis. Nunc lacinia interdum libero, eu aliquam sapien malesuada at. Aliquam porttitor ex eu sollicitudin convallis. Nullam pellentesque interdum dolor id sagittis. Etiam at euismod turpis. Morbi mauris lorem, ultrices rutrum est ut, iaculis porta ex. Nulla accumsan augue at nulla tincidunt viverra. Sed aliquet urna pellentesque tellus rhoncus, venenatis elementum lacus lobortis. Integer nibh enim, auctor nec feugiat id, porttitor ullamcorper massa. Curabitur luctus eu quam id accumsan. Donec tempor arcu sit amet leo pellentesque consectetur. In gravida scelerisque metus, a pharetra mauris accumsan a.
          </span>
        </div>

        <div className="flex-container-social">
          <img className="social-icon" src="./pic/facebook.png" alt="Facebook"/>
          <img className="social-icon" src="./pic/twitter.png" alt="Twitter"/>
          <img className="social-icon" src="./pic/youtube.png" alt="Youtube"/>
        </div>
      </div>
    );
  }
}

export default App;
