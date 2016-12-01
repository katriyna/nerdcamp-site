var React = require('react');
var ReactDOM = require('react-dom');

require('react-images');

var Gallery = require('react-photo-gallery');
var $ = require('jquery');
var _ = require('lodash');

                                                            
// var PHOTO_SET = [
//   {
//     src: 'http://i.stack.imgur.com/RDGxq.png',
//     width: 681,
//     height: 1024,
//     aspectRatio: 1.5,
//     lightboxImage:{
//       src: 'http://i.stack.imgur.com/RDGxq.png',
//       srcset: [
//         'http://i.stack.imgur.com/RDGxq.png 1024w'
//       ]
//     }
//   },
//   {
//     src: 'http://example.com/example/img2_small.jpg',
//     width: 600,
//     height: 600,
//     aspectRatio: 1,
//     lightboxImage:{
//       src: 'http://example.com/example/img2_large.jpg',
//       srcset: [
//         'http://example.com/example/img2_1024.jpg 1024w',
//         'http://example.com/example/img2_800.jpg 800w',
//         'http://example.com/example/img2_500.jpg 500w',
//         'http://example.com/example/img2_320.jpg 320w'
//       ]
//     }
//   }
// ];

var App = React.createClass({
  
  propTypes: {
    photos: React.PropTypes.array,
    pageNum: React.PropTypes.number,
    totalPages: React.PropTypes.number,
    loadedAll: React.PropTypes.bool
  },

  getInitialState: function () {
    return {
      photos: this.props.photos,
      pageNum: this.props.pageNum,
      totalPages: this.props.totalPages,
      loadedAll: this.props.loadedAll
    };
  },
  
  componentDidMount: function() {
    this.loadMorePhotos();
    this.loadMorePhotos = _.debounce(this.loadMorePhotos, 200);
    window.addEventListener('scroll', this.handleScroll);
  },
  
  handleScroll: function() {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50)) {
      this.loadMorePhotos();
    }
  },
  
  loadMorePhotos: function(e) {
    if (e){
      e.preventDefault();
    }
    if (this.state.pageNum > this.state.totalPages){
      this.setState({loadedAll: true});
      return;
    }
    $.ajax({
      url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=372ef3a005d9b9df062b8240c326254d&photoset_id=72157631971715898&user_id=57933175@N08&format=json&per_page=21&page='+this.state.pageNum+'&extras=url_o,url_m,url_l,url_c',
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrApi',
      cache: false,
      success: function(data) {
        let photos = data.photoset.photo.map(function(obj,i){
          let aspectRatio = parseFloat(obj.width_o / obj.height_o);
          return {
            src: (aspectRatio >= 3) ? obj.url_c : obj.url_m,
            width: parseInt(obj.width_o),
            height: parseInt(obj.height_o),
            aspectRatio: aspectRatio,
            lightboxImage:{src: obj.url_l, caption: obj.title}
          };
        });
        this.setState({
          photos: this.state.photos ? this.state.photos.concat(photos) : photos,
          pageNum: this.state.pageNum + 1,
          totalPages: data.photoset.pages
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  },
  
  renderGallery: function() {
    return(
      <Gallery photos={this.state.photos} />
    );
  },
  
  render: function() {
    // no loading sign if its all loaded
    if (this.state.photos && this.state.loadedAll){
      return(
        <div className="App">
          {this.renderGallery()}
        </div>
      );
    }
    else if (this.state.photos){
      return(
        <div className="App">
          {this.renderGallery()}
          <div className="loading-msg" id="msg-loading-more">Loading</div>
        </div>
      );
    }
    else{
      return(
        <div className="App">
          <div id="msg-app-loading" className="loading-msg">Loading</div>
        </div>
      );
    }
  }
});


module.exports = function() {
  ReactDOM.render(<App />, document.getElementById('past-events-gallery-placeholder'));
};