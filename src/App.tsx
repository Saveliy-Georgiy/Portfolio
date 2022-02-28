import React from 'react';
import './App.css';
import {Header} from "./components/Pages/Header/Header";
import {Main} from "./components/Pages/Main/Main";
import {Skills} from './components/Pages/Skills/Skills';
import {Projects} from "./components/Pages/Projects/Projects";
import {Slogan} from './components/Pages/Slogan/Slogan';
import {Contacts} from './components/Pages/Contacts/Contacts';
import {Footer} from './components/Pages/Footer/Footer';


export const App = () => {
    return (
        <div className="App">
            <div className="portfolio">
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                <Slogan/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}