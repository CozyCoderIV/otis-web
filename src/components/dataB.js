// Array of Objects
import GalagaIco from './ImageComp/GalagaIco';

const projects = [
    {
        id: 1,
        project: "Galaga VII (Java_Edition)",
        language: "Java",
        icon: GalagaIco,
        clip: "https://youtu.be/gK-QEVaVFCw",
        Sdate:"03/01/2021",
        Edate:"12/27/2021",
        description: "This is the official first completed and developed video game I've completed. As a graphics artist myself, all of the artwork is originally made by me. This project was heavily influenced by the classic arcade game known as Galaga. The drive and motivation behind this particular project was to showcase how far I'm willing to go as a young dev/artist to fundamentally understand the core concepts of game design without using an actual game engine."
    },
    {
        id: 2,
        project: "Death_Pong (Unity Game Engine)",
        language: "C#",
        icon: "",
        clip: "https://youtu.be/14fn1OUn4bA",
        Sdate:"1/18/2022",
        Edate:"2/02/2022",
        description: "As a complete rookie, this project will be labeled as my introduction to using game engines. Death_Pong was developed as my first individual game created in Unity. Funny story is without prior experience and the help of Youtube, I was able to pick up C# at an efficient rate. I also learned the fundamentals of using the actual Unity game engine. Death Pong was also an assignment on my first day back to school from the winter break. I was given 2 weeks to complete, and I let my own individuality run wild with my own creativity. " 
    },
    {
        id: 3,
        project: "Rock Dodger (P5.js)",
        language: "JS && C++",
        video: "",
        icon: "",
        Sdate: "04/15/2022",
        Edate: "04/21/2022",
        description: "The infamous Rock Dodger project is one of the most unique projects I've worked on and finished developing as a young software dev. Also giveen to me as an assignment, this project uses an integrated Arduino ELEGOO UNO circuit board with an C++ text editor, a P5.serial application, and vanilla javascript through a built in framework known as P5.js. The goal was to allow Javascript and C++ communicate to each other through the P5.serial application. Everytime the player is hit, a digital output signal would force the circuit board to light up one of the red LEDS" 
    },
    {
        id: 4,
        project: "OtisJIV.com (React.js)",
        language: "React.JS",
        video: "",
        icon: "",
        Sdate: "01/25/2022",
        Edate: "In Progress...",
        description: "You Are Currently Here !!" 
    }
];

export default projects;