"use client";
import React from "react";
import Image from "next/image";
import weather from "../assets/weather.png";
import todo from "../assets/todolist.png";
import matcha from "../assets/matcha.png";
import foodel from "../assets/homeREADME.png";
import resumind from "../assets/resumind.png";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Weather APP using APIs",
    desc: `Developed a Python-based weather application that retrieves real-time weather data using the OpenWeatherMap API. 
        The app allows users to enter a city name and fetch the current weather, temperature, humidity, wind speed, sunrise, and sunset times.
        Integrated the OpenWeatherMap API for real-time data fetching.
        Used Python and the Requests library to make HTTP requests and parse JSON data.
        Displayed weather details such as weather conditions, temperature, and wind speed in a user-friendly format.
        Implemented error handling for invalid city input.`,
    devStack: "Python",
    link: "#",
    git: "https://github.com/suhacodes1/weather-app",
    src: weather,
  },

  {
    title: "To-Do list website",
    desc: `Developed a React-based To-Do list website that allows users to manage and organize tasks with a simple and intuitive interface. 
        The app enables users to create, delete, and drag-and-drop tasks between columns such as "To Do," "In Progress," and "Done."
        Utilized the react-beautiful-dnd library to implement drag-and-drop functionality for task management.
        Styled the application using styled-components for a customizable and responsive design.
        The app features a visually appealing color scheme and smooth transitions when tasks are moved between columns.
        Focused on delivering a seamless user experience with interactive task management.`,
    devStack: "JavaScript, React",
    link: "#",
    git: "https://github.com/suhacodes1/dragdrop-app.git",
    src: todo,
  },

  {
    title: "FoodDel123 - Food Ordering Full Stack Project",
    desc: `Designed and developed a full-stack food delivery web application with a responsive user interface using React.js and a scalable backend using Node.js,
         Express, and MongoDB. The frontend allows users to browse a dynamic food menu, 
         add/remove items from their cart, and complete orders through an integrated Stripe payment flow.
          Implemented reusable components (Header, Navbar, Footer, FoodItem, etc.) 
          with React hooks (useState, useContext) for state and cart logic. The backend supports user authentication with JWT, 
          real-time cart management, order placement, and order status updates. Admin functionality includes listing all orders 
          and updating their delivery status. Used Mongoose for MongoDB operations and Stripe API for secure checkout.
           Applied clean, modular CSS styling and real-time UI updates to enhance user experience.`,
    devStack: "React.js, Node.js, Express, MongoDB, Stripe, CSS, JWT",
    link: "#",
    git: "https://github.com/suhacodes1/foodie123",
    src: foodel,
  },

  {
    title: "MatchaMate – Matcha Café Discovery Web App",
    desc: `Created a sleek, responsive web app using Next.js and Chakra UI to help users discover Melbourne’s best matcha cafes. Features include a curated cafe list with filters, dynamic detail pages, interactive star ratings, and a comment system backed by a PostgreSQL database via Supabase. 

Implemented frontend animations with Framer Motion, built reusable components (Navbar, CafeCard, StarRatingInput, etc.), and structured dynamic routes for individual cafes. Integrated Supabase for storing and retrieving user comments and ratings securely. The site is styled with a strawberry matcha aesthetic and deployed via Vercel.`,
    devStack:
      "Next.js, TypeScript, Chakra UI, PostgreSQL, Supabase, Framer Motion, Vercel",
    link: "https://matchamatee.vercel.app/",
    git: "https://github.com/suhacodes1/matchamate",
    src: matcha,
  },
  {
    title: "Resumind – AI Resume Analyzer & Job Application Tracker",
    desc: `Designed and developed a full-stack resume analysis platform that helps users upload resumes, receive AI-powered feedback, and track job applications in one place.

The application supports user authentication using Puter, allowing logged-in users to securely store and view their own resumes, while logged-out users can explore demo resumes. Implemented PDF upload functionality with client-side conversion of the first page into an image preview using pdfjs, enabling visually rich resume cards.

Integrated AI-driven resume evaluation focused on ATS (Applicant Tracking System) suitability, tone & style, content quality, structure, and skills relevance. Each resume is scored and displayed in an interactive dashboard with animated cards and detailed feedback sections.

Built the app using React Router for routing and server-side rendering, TypeScript for type safety, and TailwindCSS for a modern, responsive UI. Used Puter’s KV storage and file system APIs to persist resume data and images per user, ensuring proper data separation and scalability.`,
    devStack: "React, TypeScript, React Router, TailwindCSS, Puter, pdfjs",
    link: "#",
    git: "https://github.com/suhacodes1/ai-resume-analyser.git",
    src: resumind,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
        Selected <span className="text-green-400">Projects</span>
      </h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${
              index % 2 === 0
                ? "md:flex-row gap-12"
                : "md:flex-row-reverse gap-12"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-xl text-green-400 font-semibold">
                {project.devStack}
              </p>
              <div className="flex space-x-6 my-4">
                <a
                  href={project.link}
                  className="text-green-400 hover:underline"
                >
                  Link
                </a>
                <a
                  href={project.git}
                  className="text-green-400 hover:underline"
                >
                  Git
                </a>
              </div>
              <div className="mb-8">
                <Image
                  src={project.src}
                  alt={project.title}
                  className="h-[350px] w-[500px] object-cover border rounded border-gray-700"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
