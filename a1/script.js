let movieDate;
let movies = [
	{
		title: "Titanic",											//movie[0].title
		genre: 'disaster',											//movie[0].genre
		releasedDate: movieDate = new Date("1997-12-19"),			//movie[0].releasedDate
		rating: 7,												//movie[0].rating
		displayRating: function() {									//movie[0].displayRating
			console.log(`The movie ${movies[0].title} has ${movies[0].rating} rating.`);
		}
	},
	{
		title: "Jaws",												//movie[1].title
		genre: 'thriller',											//movie[1].genre
		releasedDate: movieDate = new Date("1975-7-20"),			//movie[1].releasedDate
		rating: 8,													//movie[1].rating
		displayRating: function() {									//movie[1].displayRating
			console.log(`The movie ${movies[1].title} has ${movies[1].rating} rating.`);
		}
	},
	{
		title: "Up",												//movie[2].title
		genre: 'computer-animated',									//movie[2].genre
		releasedDate: movieDate = new Date("2009-5-29"),			//movie[2].releasedDate
		rating: 9,												//movie[2].rating
		displayRating: function() {									//movie[2].displayRating
			console.log(`The movie ${movies[2].title} has ${movies[2].rating} rating.`);
		}
	},
	{
		title: "Child's Play",										//movie[3].title
		genre: 'horror',											//movie[3].genre
		releasedDate: movieDate = new Date("1998-11-9"),			//movie[3].releasedDate
		rating: 6,													//movie[3].rating
		displayRating: function() {									//movie[3].displayRating
			console.log(`The movie ${movies[3].title} has ${movies[3].rating} rating.`);
		}
	},
	{
		title: "Jumanji",											//movie[3].title
		genre: 'fantasy adventure',									//movie[3].genre
		releasedDate: movieDate = new Date("1995-12-15"),			//movie[3].releasedDate
		rating: 7,													//movie[3].rating
		displayRating: function() {									//movie[3].displayRating
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
	for (let moviesArrayNumber = 0; moviesArrayNumber < movies.length; moviesArrayNumber++) {
		if((movieRating < movies[3].rating) || (movieRating > movies[2].rating)) {
			console.log(`No movies with that rating`);
		}
		else {
			if(movies[moviesArrayNumber].rating >= movieRating) {
				console.log(`${movies[moviesArrayNumber].title}: ${movies[moviesArrayNumber].rating} stars`);
			}
		}
	}
}