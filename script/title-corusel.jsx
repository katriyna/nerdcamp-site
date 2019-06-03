const React = require('react');
const ReactDOM = require('react-dom');
const Carousel = require('react-responsive-carousel').Carousel;

var TitleCorusel = React.createClass({

  render: function() {
    const content = [{
      image: require('../assets/image-title-1.png'),
      title: 'Выходные загородом в фромате BarCamp'
    }, {
      image: require('../assets/img-title-2.png'),
      title: 'Проводится с 2011 года'
    }, {
      image: require('../assets/img-title-5.png'),
      title: 'Впервые создан в рамках межвузовской образовательной программы GameChangers'
    }, {
      image: require('../assets/img-title-6.png'),
      title: 'Осенью 2019 года состоиться девятый по счёту выезд'
    }];

    return (
      <Carousel
        infiniteLoop
        autoPlay
        swipeable={false}
        showThumbs={false}
        useKeyboardArrows
        showArrows={false}
      >
        {content.map((item, index) => (
          <div
            key={index}
          >
            <img src={item.image}/>
            <p className="legend">{item.title}</p>
          </div>
        ))}
      </Carousel>
    );
  }
});


module.exports = function() {

  ReactDOM.render(<TitleCorusel/>, document.getElementById('title-corusel'));
};
