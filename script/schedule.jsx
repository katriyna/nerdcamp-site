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
                <td width="150px"><b>18:00</b></td>
                <td>Автобус из Петербурга</td>
              </tr>
              <tr>
                <td><b>19:30</b></td>
                <td>Прибытие в загородный комплекс "Семь Озёр"</td>
              </tr>
              <tr className="schedule-section">
                <td><b>20:00 &mdash;  20:45</b></td>
                <td>Ужин</td>
              </tr>
              <tr className="schedule-section">
                <td><b>21:00 &mdash;  22:00</b></td>
                <td>Приветствие и знакомство </td>
              </tr>
              <tr className="schedule-section">
                <td><b>22:00 &mdash;  00:00</b></td>
                <td>Дебаты</td>
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
                <td><b>11:00 &mdash; 11:30</b></td>
                <td>История iBinom - как мы привлекли инвестиции, но не взлетели и чему я научился в процессе (Андрей Афанасьев)</td>
              </tr>
              <tr className="schedule-section">
                <td><b>11:30 &mdash; 12:00</b></td>
                <td>Lessons learned от Спутника (Александр Ким)</td>
              </tr>
              <tr className="schedule-section">
                <td><b>12:00 - 12:30</b></td>
                <td>Как развивают продукты в разных IT-компаниях (Дмитрий Орлов)</td>
              </tr>
              <tr className="schedule-section">
                <td><b>12:30 - 13:30</b></td>
                <td>Спорт, кофе-брейк</td>
              </tr>
              <tr className="schedule-section">
                <td><b>13:30 - 14:00</b></td>
                <td>Профессия геймдизайнер: мечты и реальность (Антон Сусляев)</td>
              </tr>
              <tr className="schedule-section">
                <td><b>14:00 - 14:30</b></td>
                <td>Чат-боты: где сдувающийся хайп, а где открывающиеся перспективы (Антон Афанасьев)</td>
              </tr>
              <tr className="schedule-section">
                <td><b>14:30 - 15:00</b></td>
                <td>Онтогенез аналитики в стартапе (Алексей Пупышев)</td>
              </tr>
              <tr className="schedule-section">
                <td><b>15:00 - 16:00</b></td>
                <td>Обед</td>
              </tr>
              <tr className="schedule-section">
                <td><b>16:00 - 16:30</b></td>
                <td>"Кот в мешке"</td>
              </tr>
              <tr className="schedule-section">
                <td><b>16:30 - 19:00</b></td>
                <td>Мастерклассы и доскуссии</td>
              </tr>
              <tr className="schedule-section">
                <td><b>19:00 &mdash;  20:00</b></td>
                <td>Ужин</td>
              </tr>
              <tr className="schedule-section">
                <td><b>с 21:00</b></td>
                <td>Шашлык, песни под гитару, игры</td>
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
                <td width="150px"><b>11:00 &mdash;  11:30</b></td>
                <td>TBD (Анна Львова)</td>
              </tr>
              <tr className="schedule-section">
                <td width="150px"><b>11:30 &mdash;  12:00</b></td>
                <td>Экстрим социологических исследований в России: работа в регионах, работа с государством (Александра Курышева)</td>
              </tr>
              <tr className="schedule-section">
                <td width="150px"><b>12:00 &mdash;  12:30</b></td>
                <td>Где жить хорошо? Выбираем оптимальный город для жизни, основываясь на данных, а не на слухах (Алексей Погибелев)</td>
              </tr>
              <tr className="schedule-section">
                <td width="150px"><b>12:30 &mdash;  13:30</b></td>
                <td>Спорт, кофе-брейк</td>
              </tr>
              <tr className="schedule-section">
                <td width="150px"><b>13:30 &mdash;  14:00</b></td>
                <td>Блогеры, стримеры, стикеры и донаты (Михаил Карпов)</td>
              </tr>
              <tr className="schedule-section">
                <td width="150px"><b>14:00 &mdash;  14:30</b></td>
                <td>Теории справедливости и их связь со статистической интуицией (Георгий Милютин)</td>
              </tr>
              <tr className="schedule-section">
                <td width="150px"><b>14:30 &mdash;  15:00</b></td>
                <td>Закрытие и итоги</td>
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
