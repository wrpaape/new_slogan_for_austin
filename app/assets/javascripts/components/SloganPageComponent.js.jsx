var SloganVariable = {g:6}

var SloganPage = React.createClass({
    render: function () {
        return (
          <div>
          	<NavComponent/>
            <h1> Slogan Page </h1>
            
          <DisplayComments />
          <AddComment />
          </div>
        );
    }
});

	//display slogan with id in url