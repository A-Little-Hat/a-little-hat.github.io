import React from 'react';
import { Center } from '@chakra-ui/layout';
import { Box, Heading } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Icon } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

import '../styles/work.css'

const Work = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:996px)");

    const data = [
        {
            name: "MyAssistant",
            link: "https://github.com/A-Little-Hat/MyAssistant/",
            description: `
            A voice assistant app and cross platform file sending system.
            `
        },
        {
            name: "Sportz",
            link: "https://github.com/A-Little-Hat/sportz",
            description: `
            e-Commerce store: one stop for sports products
            `
        },
        {
            name: "yourcodepen",
            link: "https://github.com/A-Little-Hat/React-Firebase-yourcodepen",
            description: `
            React Firebase Codepen-Clone
            `
        },
        {
            name: "LaraTask",
            link: "https://github.com/A-Little-Hat/LaraTask",
            description: `
            Task Management System using Laravel SQL
            `
        },
        {
            name: "QA Generation",
            link: "https://github.com/A-Little-Hat/QA-Generation-using-Google-Gemini",
            description: `
            QA generation from PDF context using Google Gemini pro 
            `
        },
        {
            name: "QA Check",
            link: "https://github.com/A-Little-Hat/QA-check-using-gemini",
            description: `
            QA checking using Google Gemini pro
            `
        },
        {
            name: "LLAMA2 RAG",
            link: "https://github.com/A-Little-Hat/langchain-chatbot-own-pdf",
            description: `
            llama-2 CPP based chat system that helps people get answer from their own pdf with the help of langchain.
            `
        },
        {
            name: "Fit-O-Fine",
            link: "https://github.com/A-Little-Hat/fit-o-fine",
            description: `
            Fit-O-Fine is a Real-time medical test report store and retrieve using Blockchain and MongoDB
            `
        },
    ]
    return (
        <Center>
            <section style={isNotSmallerScreen ? { paddingLeft: "0", paddingRight: "0" } : { paddingLeft: "10px", paddingRight: "10px" }} className="card-list">
                {
                    data && data.length !== 0 && data.map((a, index) => (
                        <article className="card" key={index}>
                            
                            <a href={a['link']}> 
                            <Center>
                                <header className="card-header">
                                    <Heading >{a['name']}</Heading>
                                </header>
                                <Box className="card-author" mx={"4"} >
                                    <div className="author-avatar"  >
                                        <Icon as={FaGithub} boxSize="50" />
                                    </div>
                                </Box>
                            </Center>
                            </a>
                            <h1>{a['description']}</h1>
                        </article>
                    ))
                }
            </section>
        </Center>
    );
}

export default Work;
