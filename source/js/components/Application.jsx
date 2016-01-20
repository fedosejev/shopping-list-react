var React = require('react');
var ShoppingList = require('./ShoppingList.jsx');

var Application = React.createClass({
  render: function () {
    return (
      <div className="container">
        <ShoppingList />
      </div>
    );
  }
});

module.exports = Application;
