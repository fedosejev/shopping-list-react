var React = require('react');

var ListItemDescription = React.createClass({
  render: function () {
    return (
      <div className="panel-body">
        {this.props.description}
      </div>
    );
  }
});

module.exports = ListItemDescription;