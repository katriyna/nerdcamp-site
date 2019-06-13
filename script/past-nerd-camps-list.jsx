const React = require('react');
const ReactDOM = require('react-dom');
const GridList = require('@material-ui/core/GridList').default;
const GridListTile = require('@material-ui/core/GridListTile').default;
const GridListTileBar = require('@material-ui/core/GridListTileBar').default;
const ImagePreload = require('react-preload-image').default;


const PAST_NERD_CAMPS_DATA = [{
  id: 1, title: 'Весна 2011', link: 'https://sites.google.com/site/itindustryintro/schedule/neerdcamp', image: require('../assets/nc-1.png')
}, {
  id: 2, title: 'Весна 2012', link: 'https://vk.com/nerdcamp2', image: require('../assets/nc-2.png')
}, {
  id: 3, title: 'Осень 2012', link: 'https://vk.com/nerdcamp', image: require('../assets/nc-3.png')
}, {
  id: 4, title: 'Весна 2013', link: 'https://vk.com/nerdcamp13s', image: require('../assets/nc-4.png')
}, {
  id: 5, title: 'Весна 2014', link: 'http://nerdcamp.info/nc2014', image: require('../assets/nc-5.png')
}, {
  id: 6, title: 'Весна 2015', link: 'http://nerdcamp.info/nc2015', image: require('../assets/nc-6.png')
}, {
  id: 7, title: 'Весна 2017', link: 'http://nerdcamp.info/nc2017-spring', image: require('../assets/nc-7.png')
}, {
  id: 8, title: 'Осень 2017', link: 'http://nerdcamp.info/nc2017-autumn', image: require('../assets/nc-8.png')
}];


var PastNerdCamps = React.createClass({

   propTypes: {},

   getInitialState: function () {
     return {
       data: PAST_NERD_CAMPS_DATA
     };
   },

  render: function() {
    const {data} = this.state;

    return (
      <div>
        <GridList cellHeight={250} cols={window.innerWidth < 600 ? 2 : 4}>
          {data.map(tile => (
            <GridListTile key={tile.image}>
              <ImagePreload src={tile.image} alt={tile.title} />
              <GridListTileBar
                title={(<a target="_blank" href={tile.link}>{tile.title}</a>)}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
});


module.exports = function() {
  ReactDOM.render(<PastNerdCamps />, document.getElementById('past-nerd-camps-list'));
};
