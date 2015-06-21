var MostHated = React.createClass({
    render: function () {
        return (
          <div>
            <h1> Most Hated </h1>
            <section id="most-hated-list">
            </section>
          </div>
        );
        $.get('http://localhost:3000/mosthated', function(data){ 
            var hatey = data.mosthated.slogan;
            $('#most-hated-list').html("");
            if(hatey===null){
                console.log("most hated is null");}
            else{for(var i=0;i<hatey.length;i++){
                $('#most-hated-list').append("<div ref ='" + hatey[i].id + "'>" + hatey[i] +"<br/></div>");
                }   
            };
        });
    }
});