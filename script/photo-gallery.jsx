var React = require('react');
var ReactDOM = require('react-dom');

require('react-images');

var Gallery = require('react-photo-gallery');
var _ = require('lodash');

var InfinitePhotoGallery = React.createClass({
  
  propTypes: {
    photos: React.PropTypes.array,
    pageNum: React.PropTypes.number,
    totalPages: React.PropTypes.number,
    loadedAll: React.PropTypes.bool
  },

  getInitialState: function () {
    const pageSize = 24;
    const inputPhotoSet = this.props.photos || [];

    return {
      pageSize: pageSize,
      photos: [],
      pageNum: 0,
      totalPages: Math.ceil(inputPhotoSet.length / pageSize),
      loadedAll: inputPhotoSet.length === 0
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

    const drawImages = function(photoSet) {
      const startIndex = this.state.pageNum * this.state.pageSize;
      const endIndex = startIndex + this.state.pageSize;

      const photos = photoSet.slice(startIndex, endIndex).map(function(obj){
        let aspectRatio = parseFloat(obj.width_l / obj.height_l);
        return {
          src: (aspectRatio >= 3) ? obj.url_c : obj.url_m,
          width: parseInt(obj.width_l),
          height: parseInt(obj.height_l),
          aspectRatio: aspectRatio,
          lightboxImage: {
            src: obj.url_l,
            caption: obj.title
          }
        };
      });
      this.setState({
        photos: this.state.photos ? this.state.photos.concat(photos) : photos,
        pageNum: this.state.pageNum + 1,
        loadedAll: endIndex >= photoSet.length
      });
    }.bind(this);

    drawImages(this.props.photos);
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
        <div className='App'>
          {this.renderGallery()}
        </div>
      );
    }
    else if (this.state.photos){
      return(
        <div className='App'>
          {this.renderGallery()}
          <div className='loading-msg' id='msg-loading-more'>Loading</div>
        </div>
      );
    }
    else{
      return(
        <div className='App'>
          <div id='msg-app-loading' className='loading-msg'>Loading</div>
        </div>
      );
    }
  }
});


module.exports = function(photoSet) {
  ReactDOM.render(<InfinitePhotoGallery photos={photoSet}/>, document.getElementById('past-events-gallery-placeholder'));
};