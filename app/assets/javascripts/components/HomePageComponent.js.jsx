var HomePage = React.createClass({
    render: function () {
        return (
          <div>
          <NavComponent/>
          <MainTitle/>
            <MostLiked/>
            <MostHated/>
            <MostRecent/>
            <InputSlogan/>
          </div>
        );
    }
});