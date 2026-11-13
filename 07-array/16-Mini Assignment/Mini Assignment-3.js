//16-C Mini Assignment 3: Movie Rating Analyzer

const movies = [
    ["Inception", [9, 8, 9, 10, 8]],
    ["Avatar", [7, 8, 7, 6, 8]],
    ["Interstellar", [10, 9, 9, 10, 9]],
    ["Joker", [8, 7, 8, 9, 8]]
];
let heigest=-Infinity
let movieWithHeigest=""
for (let i=0;i<movies.length;i++){
    let verdictOfMovie=""
    let average=0
    let totalRating=0;
    let count=0
    for (let j=0;j<movies[0][1].length;j++){
        totalRating+=movies[i][1][j];
        count++
    }

    average=totalRating/count
    if (average>=9){
        verdictOfMovie="Excellent"

    }else if (7<=average<9){
        verdictOfMovie="Good"
    }else{
        verdictOfMovie="average"
    }
    if (average>heigest){
        heigest=average;
        movieWithHeigest=movies[i][0]
    }
    console.log(`
        Movie:${movies[i][0]}
        Ratings:${movies[i][1]}
        Average Rating:${average}
        Verdict:${verdictOfMovie}`)

}
console.log(`the movie with the heigest rating are the ${movieWithHeigest} and the rating are the ${heigest}`)