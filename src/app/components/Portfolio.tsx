"use client"
import React from "react";
import Image from "next/image"
import weather from "../assets/weather.png"
import { motion } from "framer-motion";

const projects = [
    {
        title: "Weather APP using APIs",
        desc: `Developed a Python-based weather application that retrieves real-time weather data using the OpenWeatherMap API. 
        - The app allows users to enter a city name and fetch the current weather, temperature, humidity, wind speed, sunrise, and sunset times.
        - Integrated the OpenWeatherMap API for real-time data fetching.
        - Used Python and the Requests library to make HTTP requests and parse JSON data.
        - Displayed weather details such as weather conditions, temperature, and wind speed in a user-friendly format.
        - Implemented error handling for invalid city input.`,
        devStack: "Python",
        link: "#",
        git: "https://github.com/suhacodes1/weather-app",
        src: weather
    },
];

const Portfolio =() => {
    return (
    <div className ="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">

<h1 className = "text-white text-6xl max-w-[320px] mx-auto font-semibold my-12"> Selected
<span className=" text-green-400"> Projects </span></h1>

        <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
            {projects.map((project,index) => (
                <motion.div
                 key ={index} 
                 initial = {{opacity:0,y: 75}}
                 whileInView= {{opacity:1,y: 0}}
                 viewport = {{once:true}}
                 transition = {{duration: 0.5, delay: 0.25}}
                 className={`mt-12 flex flex-col ${index % 2 == 1 ? " md:flex-row-reverse gap-12" : " md:flex-row-reverse gap-12" }`}
                 >
                    <div className="space-y-2 max-w-[550px]">
                        <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                        <h2 className="text-4xl">{project.title}</h2>
                        <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                        <p className="text-xl text-green-400 font-semibold">{project.devStack}</p>
                        <div className="w-64 h-[1px] bg-gray-400 my-4">
                            <a href={project.link} className="mr-6"> Link</a>
                            <a href={project.git}> Git </a>
                        </div>
                        <div className= "flex justify-center items-center">
                            <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object cover border 
                        rounded border-gray-700" />
                        </div>
                    </div>


                 </motion.div>

            ))}

        </div>
    </div>
    )
}

export default Portfolio