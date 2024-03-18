

class Movie{
     
    constructor(title, releaseYear, nacionality, genre){

        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = [];
        this.nacionality = nacionality
        this.director;
        this.writer;
        this.language;
        this.plataforma;
        this.IsMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre = genre;    
        this.photo;
    }

    toString() {
        
        let result = "<p>Title: " + this.title +
        "</p>\n<p>Release Year: " + this.releaseYear +
        "</p>\n<p>Actors:\n" 

            for (let i = 0; i < this.actors.length; i ++){
            result += this.actors[i] + "</p>\n"
        }
        result += "<p>Movie Nacionality: " + this.nacionality + 
        "</p>\n<p>Director:\n" + 
        this.director +
        "</p>\n<p>Writer:\n" +
        this.writer +
        "</p>\n<p>Language: " + this.language +
        "</p>\n<p>Plataforma: " + this.plataforma +
        "</p>\n<p>IsMCU: " + this.IsMCU + 
        "</p>\n<p>Main character name: " + this.mainCharacterName +
        "</p>\n<p>Producer: " + this.producer +
        "</p>\n<p>Distributor: " + this.distributor + 
        "</p>\n<p>Genre: " + this.genre + "\n";  
        
        return(result)
    } 
}


let movie1 = new Movie ("Shutter Island", 2010, "American", "Thriller");
movie1.language = "Multilanguage";
movie1.plataforma = "Prime Video"
movie1.mainCharacterName = "Edward Daniels"
movie1.IsMCU = false
movie1.distributor = "Paramount Pictures"
movie1.producer = "Brad Phicher and Arnold Messer"
movie1.actors = ["Leonardo Dicaprio", "Mark Ruffalo"];
movie1.director = "Martin Scorcese";
movie1.writer = "Brad Fisher";
movie1.photo = "imagenes\shutt.jpg";

let movie2 = new Movie ("Big Fish", 2003, "American", "Fantasy");
movie2.language = "Multilanguage";
movie2.plataforma = "Movistar Plus";
movie2.IsMCU = true
movie2.mainCharacterName = "William Bloom"
movie2.producer = "Danny Elfman"
movie2.distributor = "Columbia Picture"
movie2.actors = ["Ewan Mcgregor", "Helena Boham Carter"];
movie2.director = "Tim Burton";
movie2.writer = "Daniel Wallace";
movie2.photo = "imagenes\big.jpg";

let movie3 = new Movie ("Sweeney Todd", 2007, "American", "Terror");
movie3.language = "Multilanguage";
movie3.plataforma = "Prime Video";
movie3.IsMCU = true
movie3.mainCharacterName = "Benjamin Barker"
movie3.producer = "Christopher Bond"
movie3.distributor = "Warner Bros"
movie3.actors = ["Johnny Deep", "Helena Boham Carter"];
movie3.director = "Tim Burton";
movie3.writer = "John Logan";
movie3.photo = "imagenes\swee.jpg";

let movie4 = new Movie ("Avengers", 2012, "American", "Science fiction");
movie4.language = "Multilanguage";
movie4.plataforma = "Disney Plus";
movie4.IsMCU = true
movie4.mainCharacterName = "Tony Stark, Steve Rogers"
movie4.producer = "Kevin Feige"
movie4.distributor = "Paramount Picture"
movie4.actors = ["Scarlett Johanson", "Mark Ruffalo"];
movie4.director = "Joe Russo";
movie4.writer = "Joss Whedon";
movie4.photo = "imagenes\aven.jpg";

let movie5 = new Movie ("La isla", 2005, "American", "Thriller");
movie5.language = "Multilanguage"
movie5.plataforma = "Movistar Plus"
movie5.mainCharacterName = "Lincoln Seis-Echo"
movie5.IsMCU = false
movie5.distributor = "Warner Bros"
movie5.producer = "Walter F. Parkes, Ian Bryce"
movie5.actors = ["Ewan Macgregor", "Scarlett Johanson"];
movie5.director = "Michael Bay";
movie5.writer = "John Logan";
movie5.photo = "imagenes\isla.jpg";



    
function info(){

    let texto1 = document.getElementById("text1")
        texto1.innerHTML =  movie1.toString();
    let texto2 = document.getElementById("text2")
        texto2.innerHTML =  movie2.toString();
    let texto3 = document.getElementById("text3")
        texto3.innerHTML = movie3.toString();
    let texto4 = document.getElementById("text4")
        texto4.innerHTML = movie4.toString();
    let texto5 = document.getElementById("text5")
        texto5.innerHTML = movie5.toString();

}

let lastMovie = "";

function guardar(){

    let title = document.getElementById("title").value
    let releaseYear = document.getElementById("releaseYear").value
    let nacionality = document.getElementById("nacionality").value
    let language = document.getElementById("language").value
    let plataforma = document.getElementById("plataforma").value
    let ismcu = document.getElementById("ismcu").value 
    let mainCharacterName = document.getElementById("mainCharacterName").value
    let producer = document.getElementById("producer").value
    let distributor = document.getElementById("distributor").value
    let genre = document.getElementById("genre").value    
    let photo = document.getElementById("photo").value

     lastMovie = {

        title: title,
        releaseYear: releaseYear,
        nacionality: nacionality,
        language: language,
        plataforma: plataforma,
        IsMCU: ismcu,
        mainCharacterName: mainCharacterName,
        producer: producer,
        distributor: distributor,
        genre: genre,    
        photo: photo,

    }

   
}

function añadir(){

    let info = document.getElementById("text6")
        info.innerHTML += "<p>Title: " + lastMovie.title + "</p>" +
        "<p>Release Year: " + lastMovie.releaseYear + "</p>" +
        "<p> Nacionality: " + lastMovie.nacionality + "</p>" +
        "<p>Language: " + lastMovie.language + "</p>" +
        "<p>Plataforma: " + lastMovie.plataforma + "</p>" +
        "<p>IsMCU: " + lastMovie.ismcu + "</p>" +
        "<p>Main character name: " + lastMovie.mainCharacterName + "</p>" +
        "<p>Producer: " + lastMovie.producer + "</p>" +
        "<p>Distributor: " + lastMovie.distributor + "</p>" +
        "<p>Genre: " + lastMovie.genre + "</p>" 
    
    let photo = document.getElementById("newPhoto")
        photo.src = lastMovie.photo; 
}


