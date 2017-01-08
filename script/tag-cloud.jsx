var React = require('react');
var ReactDOM = require('react-dom');
var TagCloud = require('react-tagcloud').TagCloud;


const data = [
  { value: 'IT', count: 38 },
  { value: 'Весна 2017', count: 31 },
  { value: 'Программа GameChanges', count: 27 },
  { value: 'Программирование', count: 32 },
  { value: 'Дизайн', count: 30 },
  { value: 'Менеджмент', count: 28 },
  { value: 'Социология', count: 28 },
  { value: 'Утрянняя зарядка', count: 26 },
  { value: 'BBQ', count: 33 },
  { value: 'Спорт на природе', count: 33 },
  { value: 'Обучение через общение', count: 33 },
  { value: 'BarCamp', count: 30 },
  { value: 'Участники для участников', count: 25 }
];


var NCTagCloud = React.createClass({

  propTypes: {},

  getInitialState: function () {
    return {};
  },

  render: function() {
    var colorOptions = {
      luminosity: 'dark'
    };

    return(
      <TagCloud className='NCTagCloud'
                minSize={12}
                maxSize={35}
                colorOptions={colorOptions}
                tags={data}
                shuffle={true}/>
    );
  }
});

module.exports = function() {
  ReactDOM.render(<NCTagCloud />, document.getElementById('tag-cloud-placeholder'));
};