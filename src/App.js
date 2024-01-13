import React from "react"
import "./App.css"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import {About} from "./components/about/About"
import { Skill } from "./components/skill/Skill"
import { Qualification } from "./components/qualification/Qualification"
import { Project } from "./components/projects/project"
import Contact from "./components/contacts/Contact"
import Footer from "./components/footer/Footer"
import ScrollUp from "./components/scrollUp/ScrollUp"

export default function App() {

    return (
        <>
        <Header/>
        <main className="main">
            <Home />
            <About />
            <Skill />
            <Qualification />
            <Project />
            <Contact />
        </main>
        <Footer/>
        <ScrollUp />
        </>
    )
}