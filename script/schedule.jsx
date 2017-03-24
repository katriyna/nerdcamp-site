var React = require('react');
var ReactDOM = require('react-dom');
var ReactTabs = require('react-tabs');

var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

var NCSchedule = React.createClass({
  handleSelect: function(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  },

  render: function() {
    return (
      <Tabs onSelect={this.handleSelect} selectedIndex={1}>
        <TabList>
          <Tab className="nerd-camp__link">Пятница, 21 апреля</Tab>
          <Tab>Суббота, 22 апреля</Tab>
          <Tab>Воскресение, 23 апреля</Tab>
        </TabList>

        <TabPanel>
          <h2>Hello from Foo</h2>
        </TabPanel>

        <TabPanel>
          <h2>Hello from Bar</h2>
        </TabPanel>

        <TabPanel>
          <h2>Hello from Baz</h2>
        </TabPanel>

      </Tabs>
    );
  }
});


module.exports = function() {
  ReactDOM.render(<NCSchedule/>, document.getElementById('schedule-placeholder'));
};
