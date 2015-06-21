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
                        <h4>{testModel.get('body')}</h4>
                        
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
    }

    
});


