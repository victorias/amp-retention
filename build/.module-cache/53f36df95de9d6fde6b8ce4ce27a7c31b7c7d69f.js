var RetentionTable = React.createClass({displayName: "RetentionTable",

    render: function() {
        return (
            React.createElement("div", {className: "retentionTable"}, 
                "Hello, world! I am a CommentBox2."
            )
        );
    }

});

React.render(React.createElement(RetentionTable, null), document.body);