var tabList = [
    { 'id': 1, 'name': 'Register', 'url': '/register' }
    { 'id': 2, 'name': 'Login', 'url': '/login' }
    { 'id': 3, 'name': 'Home', 'url': '/home' },
    { 'id': 4, 'name': 'Slogans', 'url': '/sloganpage' },
    { 'id': 5, 'name': 'My Profile', 'url': '/userpage' },

];

var Tab = React.createClass({
    render: function(){
        return (
            <li><a href={this.props.url}>{this.props.name}</a></li>
        );
    }
});

var Tabs = React.createClass({
    render: function(){
        return (
            <nav>
                <ul>
                    {this.props.tabList.map(function(tab) {
                        return (
                            <Tab url={tab.url} name={tab.name} />
                        );
                    })}
                </ul>
            </nav>
        );
    }
});

var App = React.createClass({
    render: function(){
        return(
            <div>
                <Tabs tabList={tabList} />
            </div>
        );
    }
});

React.render(
    <App />,
    document.body
);