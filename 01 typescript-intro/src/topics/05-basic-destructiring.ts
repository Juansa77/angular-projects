interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Ride the lightning",
    details: {
        author: "Metallica",
        year: 1986
    }
}

//* Destructuring renombrando la variable, destructuring de objetos dentro de objetos
const { song: anotherSong, songDuration: duration, details:{author:autor} } = audioPlayer

//* Destructuring de arreglos:tercer personaje-------------------

const [ , , piccolo]:string[]= ["Goku", "Vegeta", "Piccolo"]

console.log(piccolo)

console.log(autor)

console.log(anotherSong, duration)
export { }