           var MostRecent = React.createClass({
    getInitialState: function() {
        var HHH = new SloganCollection();
        HHH.on('change', function(){
            this.forceUpdate();
        },this)
        return {
            HHH: HHH
        }
    },
    componentDidMount: function() {
        $.get (
            "http://localhost:3000/slogans/recent",
            function(data) {
                if(this.isMounted()) {
                    this.setState({
                       HHH: this.state.HHH.reset(data)
                    });
                }
            }.bind(this)
        );
    },
    render: function () {
            console.log(this.state.HHH);
        thumbnails = this.state.HHH.map(function(testModel){
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
                <h3>MOST RECENT</h3>
                {thumbnails}
            </div>
        );
    }

    
});


