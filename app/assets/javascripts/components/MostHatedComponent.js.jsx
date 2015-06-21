
var H = { a:[{id:1, hates:0, likes:0, body:"have a nice day"},
             {id:2, hates:0, likes:0},
             {id:3, hates:0, likes:0},
             {id:4, hates:0, likes:0},
             {id:5, hates:0, likes:0},
             {id:6, hates:0, likes:0}] 
         };

var MostHated = React.createClass({
    render: function () {       
        return (
            <div>{this.getHatedArray}
                <h1>Most Hated</h1>
                <ul>
                    <li ref={H.a[0].id}>
                        {H.a[0].body}<br/>
                        <HateButton slog={H.a[0].id}/>
                        <LikeButton slog={H.a[0].id}/>
                    </li>
                    <li ref={H.a[1].id}>
                        {H.a[1].body}<br/>
                        <HateButton slog={H.a[1].id} />
                        <LikeButton slog={H.a[1].id} />
                    </li>
                    <li ref={H.a[2].id}>
                        {H.a[2].body}<br/>
                        <HateButton slog={H.a[2].id} />
                        <LikeButton slog={H.a[2].id} />
                    </li>
                    <li ref={H.a[3].id}>
                        {H.a[3].body}<br/>
                        <HateButton slog={H.a[3].id} />
                        <LikeButton slog={H.a[3].id} />
                    </li>
                    <li ref={H.a[4].id}>
                        {H.a[4].body}<br/>
                        <HateButton slog={H.a[4].id} />
                        <LikeButton slog={H.a[4].id} />
                    </li>
                    <li ref={M.a[5].id}>
                        {M.a[5].body}<br/>
                        <HateButton slog={H.a[5].id} />
                        <LikeButton slog={H.a[5].id} />
                    </li>
                </ul>
            </div> 
        );    
    },
    getHatedArray: function(){
        
        $.get("http://localhost:3000/slogans/hated",function(data){
            console.log(data);
            H.a = data;
        });
    }
});



