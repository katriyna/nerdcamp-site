var React = require('react');
var ReactDOM = require('react-dom');
var ReactTabs = require('react-tabs');

var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

var NCSchedule = React.createClass({

  render: function() {
    return (
      <Tabs selectedIndex={1}>
        <TabList>
          <Tab className="nerd-camp__link">Пятница, 21 апреля</Tab>
          <Tab className="nerd-camp__link">Суббота, 22 апреля</Tab>
          <Tab className="nerd-camp__link">Воскресенье, 23 апреля</Tab>
        </TabList>

        <TabPanel>
          <div className="nerd-camp__tab-content">
            <table className="nerd-camp__table nerd-camp__table_no-boarder">
              <tbody><tr>
                <td width="150px"><b>17:30</b></td>
                <td>Автобус из Петербурга</td>
              </tr>
              <tr>
                <td><b>19:00</b></td>
                <td>Прибытие в загородный комплекс "Семь Озёр"</td>
              </tr>
              <tr className="schedule-section">
                <td><b>20:00 &mdash;  20:45</b></td>
                <td>Ужин</td>
              </tr>
              <tr className="schedule-section">
                <td><b>21:00 &mdash;  00:00</b></td>
                <td>Вступление, знакомство</td>
              </tr>
              </tbody></table>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="nerd-camp__tab-content">
            <table className="nerd-camp__table nerd-camp__table_no-boarder">
              <tbody><tr>
                <td width="150px"><b>09:30 &mdash;  10:00</b></td>
                <td>Зарядка</td>
              </tr>
              <tr>
                <td width="150px"><b>10:00 &mdash;  10:50</b></td>
                <td>Завтрак</td>
              </tr>
              <tr className="schedule-section">
                <td><b>11:00 - 12:30</b></td>
                <td>Доклады</td>
              </tr>
              <tr className="schedule-section">
                <td><b>12:00 - 13:30</b></td>
                <td>Врямя для спортивных активностей на природе</td>
              </tr>
              <tr className="schedule-section">
                <td><b>13:30 &mdash;  15:00</b></td>
                <td>Доклады</td>
              </tr>
              <tr>
                <td><b>15:00 &mdash;  16:00</b></td>
                <td>Обед</td>
              </tr>
              <tr className="schedule-section">
                <td><b>16:00 &mdash;  19:00</b></td>
                <td>Мастер-классы и дискуссии</td>
              </tr>
              <tr className="schedule-section">
                <td><b>19:00 &mdash;  20:00</b></td>
                <td>Ужин</td>
              </tr>
              <tr className="schedule-section">
                <td><b>21:00 &mdash;  01:00</b></td>
                <td>Barbecue Party</td>
              </tr>
              </tbody></table>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="nerd-camp__tab-content">
            <table className="nerd-camp__table nerd-camp__table_no-boarder">
              <tbody><tr>
                <td width="150px"><b>09:30 &mdash;  10:00</b></td>
                <td>Зарядка</td>
              </tr>
              <tr>
                <td width="150px"><b>10:00 &mdash;  10:50</b></td>
                <td>Завтрак</td>
              </tr>
              <tr className="schedule-section">
                <td width="150px"><b>11:00 &mdash;  12:30</b></td>
                <td>Доклады</td>
              </tr>
              <tr className="schedule-section">
                <td width="150px"><b>12:30 &mdash;  13:30</b></td>
                <td>Спортивные активности на природе</td>
              </tr>
              <tr className="schedule-section">
                <td width="150px"><b>13:30 &mdash;  14:30</b></td>
                <td>Доклады</td>
              </tr>
              <tr className="schedule-section">
                <td width="150px"><b>14:30 &mdash;  15:00</b></td>
                <td>Закрытие</td>
              </tr>
              <tr className="schedule-section">
                <td width="150px"><b>15:00 &mdash;  15:40</b></td>
                <td>Обед</td>
              </tr>
              <tr className="schedule-section">
                <td width="150px"><b>16:00</b></td>
                <td>Отъезд в Петербург</td>
              </tr>
              </tbody></table>
          </div>
        </TabPanel>

      </Tabs>
    );
  }
});


module.exports = function() {
  ReactDOM.render(<NCSchedule/>, document.getElementById('schedule-placeholder'));
};
