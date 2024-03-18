class Professional{

    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo){

        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo=photo;
    }


    toString(){

        return "<p>Name: " + this.name + "</p>\n<p>Age: " + this.age + "</p>\n<p>Weight: " +  this.weight + "</p>\n<p>Height: " + this.height
                + "</p>\n<p>Is retired: " + this.isRetired + "</p>\n<p>Country: " + this.nationality + "</p>\n<p>Oscars: " + this.oscarsNumber
                + "</p>\n<p>Profession: " + this.profession +"</p>\n"
    }

    getName(){
        return (this.name);
    }
}

let professional1 = new Professional('Leonardo DiCaprio', 49, 85, 183, false, 'EEUU', 1, 'actor', 'imagenes\leo.jpg')
let professional2 = new Professional('Scarlett Ingrid Johansson', 39, 61, 160, false, 'EEUU', 2, 'actress', 'imagenes\scar.jpg');
let professional3 = new Professional('Ewan McGregor', 52, 79, 180, false, 'Escocia', 0, 'actor', 'imagenes\ewan.webp');
let professional4 = new Professional('Helena Bonham Carter', 57, 68, 160, false, 'England', 0, 'actress','imagenes\helen.jpg');
let professional5 = new Professional('Johnny Deep', 60, 89, 178, false, 'EEUU', 0, 'actor','imagenes\deep.jpg');
let professional6 = new Professional('Mark Ruffalo', 56, 90, 173, false, 'EEUU', 0, 'actor','imagenes\mark.avif');
let professional7 = new Professional('Tim Burton', 65, 72, 179, false, 'EEUU', 0, 'director','imagenes\tim.jpg');
let professional8 = new Professional('Joe Russo', 52, 72, 179, false, 'EEUU', 0, 'director', 'imagenes\russo.jpg');
let professional9 = new Professional('Michael Bay', 60, 82, 181, false, 'EEUU', 0, 'director','imagenes\micha.jpg');
let professional10 = new Professional('Joss Whedon', 59, 86, 182, false, 'EEUU', 0, 'writer', "imagenes\joss.webp" );
let professional11 = new Professional('John Logan', 62, 75, 174, false, 'EEUU', 0, 'writer','imagenes\logan.jpg');
let professional12 = new Professional('Martin Scorsese', 81, 79, 163, false, 'EEUU', 1, 'writer', 'imagenes\scor.jpg');

console.log(professional12.toString())

function info(){

    let texto1 = document.getElementById("text1")
        texto1.innerHTML =  professional1.toString();
    let texto2 = document.getElementById("text2")
        texto2.innerHTML =  professional2.toString();
    let texto3 = document.getElementById("text3")
        texto3.innerHTML = professional3.toString();
    let texto4 = document.getElementById("text4")
        texto4.innerHTML = professional4.toString();
    let texto5 = document.getElementById("text5")
        texto5.innerHTML = professional5.toString();
    let texto6 = document.getElementById("text6")
        texto6.innerHTML = professional6.toString();

    let texto7 = document.getElementById("text7")
        texto7.innerHTML = professional7.toString();
    let texto8 = document.getElementById("text8")
        texto8.innerHTML = professional8.toString();
    let texto9 = document.getElementById("text9")
        texto9.innerHTML = professional9.toString();
        
    let texto10 = document.getElementById("text10")
        texto10.innerHTML = professional10.toString();
    let texto11 = document.getElementById("text11")
        texto11.innerHTML = professional11.toString();
    let texto12 = document.getElementById("text12")
        texto12.innerHTML = professional12.toString();

}


