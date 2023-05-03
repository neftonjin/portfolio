// let array=[1,2,3,4,5]
// let sum=0;
// function myFunction(array)
// {
//   for (let i=0; i<array.length; i++){
//   if( array[i]%2===0){
//     sum++;
//     console.log("this is first if ")
//   }
//   if(array[i]%2!==0&&array[i]!==5){
//    sum +=3; 
//    console.log("this is second if ")
//   }
//   if(array[i]===5 ){ 
//     console.log("this is third if ")
//     sum+=5;}
// }
// }
// myFunction(array);
// console.log(sum);



// function expressionMatter(a, b, c) {

//     let equations = [a * (b + c),  a * b * c , a + b * c , (a + b) * c , a+b+c]; 

//     return  Math.max(...equations);
//   }



  // function countBy(x, n) {
  //   let z = [];
  //   let multiple=0;
  //   for (let i=0; i<n; i++){
  //     z.push(multiple+x);
  //     multiple+=x;
  //     console.log(z + "Array");
  //   }
  //   console.log(n);
  //   return z;
  // }
 
  // console.log(countBy(1,10));

//  let point= ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"];


//  function points(games) {
//   let score =  games.map((e)=>{
//     return e.split(":").map(Number)
//    })
//    let totalPoints =0;
//    score.forEach((e)=> {
//     if(e[0]>e[1]){
//       totalPoints+=3;
//     }
//     else if ( e[0]===e[1]){totalPoints++}
//    })
 
//    return totalPoints;
//  }
//  console.log(points(point) );

//  score = games;
//   let x=0;
//   let y=0;
//    while( 0 < gamesNumber){ 
//    if(score[0] > score[1]){
//      x+3;
//    }
//    if (score[0] === score[1]) {
//        x++;    
//    }
//      gamesNumber--;
//      }
//  }
