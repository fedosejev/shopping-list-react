var React = require('react');

var ListItemDescription = function (props) {
    return (
      <div className="panel-body">
        {props.description}
      </div>
    );
};

module.exports = ListItemDescription;