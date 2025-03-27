"use client";
import Image from "next/image";
import { motion } from 'framer-motion';
import profilepic from "../assets/profilepic.png"
import cursor from "../assets/icon1.png"
import lightning from "../assets/icon2.png"

const Hero = () => {
    return (
        <div 
        className="py-24 relative overflow-hidden"
        style={{
            background: "linear-gradient(to bottom, #000, #2B1942 35%, #8F5C55 60%, #DBAF6E 80%)"
        }}
    >

<div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2"
                style={{
                    background: "radial-gradient(closest-side, #000 80%, #2B1942)"
                }}
                ></div>
            <div className= "relative">
                <div className= "text-8xl font-bold text-center">
                    <h1 className= "text-[#98B4CE]">Hi, I am </h1>
                    <h1 className= "text-[#E48A57]">Suha Fathima</h1>
            
                </div>


                <motion.div className= "hidden md:absolute left-[220px] top-[20px]"
                drag
                >
                    <Image 
                    src={cursor}
                    height="170"
                    width="170"
                    alt="cursor"
                    className=""
                    draggable="false"
                    />
                </motion.div>

                <motion.div className= "hidden md:absolute right-[220px] top-[20px]"
                drag
                >
                    <Image 
                    src={lightning}
                    height="120"
                    width="120"
                    alt="cursor"
                    className=""
                    draggable="false"
                    />
                </motion.div>
        

            <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80"
            > I am a uni student in my 2nd year of my Software Engineering degree and am passionate about full-stack developing.</p>

            <Image 
            src={profilepic}
            alt="profile picture"
            className="h-auto w-auto mx-auto"
            />
        </div>


         </div>
    )
}

export default Hero