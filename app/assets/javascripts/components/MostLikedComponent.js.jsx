// var M = { a:[{id:1, hates:0, likes:0},
//              {id:2, hates:0, likes:0},
//              {id:3, hates:0, likes:0},
//              {id:4, hates:0, likes:0},
//              {id:5, hates:0, likes:0},
//              {id:6, hates:0, likes:0}] 
//          };
 

// var MostLiked = React.createClass({
//     render: function () {       
//         return (
//             <div>{this.getLikedArray}
//                 <h1>Most Liked</h1>
//                 <ul>
//                     <li ref={M.a[0].id}>
//                         {M.a[0].body}<br/>
//                         <HateButton slog={M.a[0].id} />
//                         <LikeButton slog={M.a[0].id} />
//                     </li>
//                     <li ref={M.a[1].id}>
//                         {M.a[1].body}<br/>
//                         <HateButton slog={M.a[0].id} />
//                         <LikeButton slog={M.a[0].id} />
//                     </li>
//                     <li ref={M.a[2].id}>
//                         {M.a[2].body}<br/>
//                         <HateButton slog={M.a[0].id} />
//                         <LikeButton slog={M.a[0].id} />
//                     </li>
//                     <li ref={M.a[3].id}>
//                         {M.a[3].body}<br/>
//                         <HateButton slog={M.a[0].id} />
//                         <LikeButton slog={M.a[0].id} />
//                     </li>
//                     <li ref={M.a[4].id}>
//                         {M.a[4].body}<br/>
//                         <HateButton slog={M.a[0].id} />
//                         <LikeButton slog={M.a[0].id} />
//                     </li>
//                     <li ref={M.a[5].id}>
//                         {M.a[5].body}<br/>
//                         <HateButton slog={M.a[0].id} />
//                         <LikeButton slog={M.a[0].id} />
//                     </li>
//                 </ul>
//             </div> 
//         );    
//     },
//     getLikedArray: function(){
        
//         $.get("http://localhost:3000/slogans/liked",function(data){
//             console.log(data);
//             M.a = data;
//         });
//     }
// });



