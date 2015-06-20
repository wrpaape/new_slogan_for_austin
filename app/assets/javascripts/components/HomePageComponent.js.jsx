var HomePage = React.createClass({
    render: function () {
        return (
          <div>
          <NavComponent/><br/>
          <MainTitle/><br/>
            <h1> Home Page </h1>
            <BigSlogan/><br>/
            <a href='#slogan/3'>Edit</a><br/>
            <MostLiked/><br/>
            <MostHated/><br/>
            <MostRecent/><br/>
            <InputSlogan/>
          </div>
        );
    }
});