
            var MostHated = React.createClass({
    getInitialState: function() {
        var H = new SloganCollection();
        H.on('change', function(){
            this.forceUpdate();
        },this)
        return {
            H: H
        }
    },
    componentDidMount: function() {
        $.get (
            "http://localhost:3000/slogans/hated",
            function(data) {
                if(this.isMounted()) {
                    this.setState({
                        H: this.state.H.reset(data)
                    });
                }
            }.bind(this)
        );
    },
    render: function () {
            console.log(this.state.H);
        thumbnails = this.state.H.map(function(testModel){
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
                <h3>MOST HATED</h3>
                {thumbnails}
            </div>
        );
    }

    
});


