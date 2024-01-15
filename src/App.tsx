import React from "react";
import './App.css';
import {Header} from "./Layout/header/Header";
import {Main} from "./Layout/Sections/main/Main";
import {Skills} from "./Layout/Sections/skills/Skills";
import {Works} from "./Layout/Sections/works/Works";
import {Testimony} from "./Layout/Sections/testimony/Testimony";
import {Contact} from "./Layout/Sections/contacts/Contact";
import {Slogan} from "./Layout/Sections/slogan/Slogan";
import {Footer} from "./Layout/Sections/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;




