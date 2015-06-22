var MostLiked = React.createClass({
    getInitialState: function() {
        var HH = new SloganCollection();
        HH.on('change', function(){
            this.forceUpdate();
        },this)
        return {
            HH: HH
        }
    },
    componentDidMount: function() {
        $.get (
            "http://localhost:3000/slogans/hated",
            function(data) {
                if(this.isMounted()) {
                    this.setState({
                        HH: this.state.HH.reset(data)
                    });
                }
            }.bind(this)
        );
    },
    render: function () {
            console.log(this.state.HH);
        thumbnails = this.state.HH.map(function(testModel){
            console.log(testModel);
            return (
                    <div key={testModel.id}>
                        <div onClick={this.gotoSloganPage}>
                            <h4>{testModel.get('body')} </h4>
                        </div>
                        <LikeButton slogan={testModel} />
                        <HateButton slogan={testModel} />
                    </div>
                );
        });
        return (
            <div>
            <h3>Most Liked</h3>
                {thumbnails}
            </div>
        );
    },
    gotoSloganPage: function(e){
        e.preventDefault;
        console.log('you clicked a slogan');
         app.navigate('/sloganpage/'+testModel.id, {trigger: true});
    }

    
});


