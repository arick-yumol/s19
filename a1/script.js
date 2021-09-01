let movieDate;
let movies = [
	{
		title: "Titanic",											//movies[0].title
		genre: 'disaster',											//movies[0].genre
		releasedDate: movieDate = new Date("1997-12-19"),			//movies[0].releasedDate
		rating: 7,													//movies[0].rating
		displayRating: function() {									//movies[0].displayRating
			console.log(`The movie ${movies[0].title} has ${movies[0].rating} rating.`);
		}
	},
	{
		title: "Jaws",												//movies[1].title
		genre: 'thriller',											//movies[1].genre
		releasedDate: movieDate = new Date("1975-7-20"),			//movies[1].releasedDate
		rating: 8,													//movies[1].rating
		displayRating: function() {									//movies[1].displayRating
			console.log(`The movie ${movies[1].title} has ${movies[1].rating} rating.`);
		}
	},
	{
		title: "Up",												//movies[2].title
		genre: 'computer-animated',									//movies[2].genre
		releasedDate: movieDate = new Date("2009-5-29"),			//movies[2].releasedDate
		rating: 9,													//movies[2].rating
		displayRating: function() {									//movies[2].displayRating
			console.log(`The movie ${movies[2].title} has ${movies[2].rating} rating.`);
		}
	},
	{
		title: "Child's Play",										//movies[3].title
		genre: 'horror',											//movies[3].genre
		releasedDate: movieDate = new Date("1998-11-9"),			//movies[3].releasedDate
		rating: 6,													//movies[3].rating
		displayRating: function() {									//movies[3].displayRating
			console.log(`The movie ${movies[3].title} has ${movies[3].rating} rating.`);
		}
	},
	{
		title: "Jumanji",											//movies[4].title
		genre: 'fantasy adventure',									//movies[4].genre
		releasedDate: movieDate = new Date("1995-12-15"),			//movies[4].releasedDate
		rating: 7,													//movies[4].rating
		displayRating: function() {									//movies[4].displayRating
			console.log(`The movie ${movies[4].title} has ${movies[4].rating} rating.`);
		}
	}
]

let showAllMovies = () => {
	for (let moviesArrayNumber = 0; moviesArrayNumber < movies.length; moviesArrayNumber++) {
		console.log(`The movie ${movies[moviesArrayNumber].title} is a ${movies[moviesArrayNumber].genre} movie.`);
	}
}

let showTitles = movieRating => {
	// for (let moviesArrayNumber = 0; moviesArrayNumber < movies.length; moviesArrayNumber++) {	//limits ratings to only available ratings
	// 	if((movieRating < movies[3].rating) || (movieRating > movies[2].rating)) { //limits range from lowest rating to highest rating 
	// 		console.log(`No movies with that rating`);
	// 	}
	// 	else {
	// 		if(movies[moviesArrayNumber].rating >= movieRating) {	//used to remove ratings not equal to movieRating
	// 			console.log(`${moviesArrayNumber + 1}) ${movies[moviesArrayNumber].title}: ${movies[moviesArrayNumber].rating} stars`);
	// 		}
	// 	}
	// }

	/*Cannot isolate a movie without rating inside the for loop*/
	for (moviesArrayNumber = 0; moviesArrayNumber < movies.length; moviesArrayNumber++) {	//limits ratings to only available ratings
		if(movies[moviesArrayNumber].rating < movieRating) {
			console.log(`No movies with that rating`);
		}
		else {
			console.log(`${movies[moviesArrayNumber].title}: ${movies[moviesArrayNumber].rating} stars`);	//${moviesArrayNumber + 1})
		}
	}
}