"use client";
import { useEffect } from "react";
import barba from "@barba/core";
import "@barba/css";
import gsap from "gsap";

const ClientSideBarba = () => {
    useEffect(() => {
        barba.init({
            transitions: [{
                name: 'slide-transition',
                once({ next }) {
                    // Initial page load: Use the enter animation
                    next.container.classList.add('barba-enter');
                },
                leave({ current }) {
                    // Animation for leaving a page
                    return new Promise(resolve => {
                        current.container.classList.add('barba-leave');
                        setTimeout(() => resolve(), 500); // Corresponds to the animation duration
                    });
                },
                enter({ next }) {
                    // Animation for entering a page
                    next.container.classList.add('barba-enter');
                },
                after({ next, current }) {
                    // Clean up classes
                    next.container.classList.remove('barba-enter');
                    current.container.classList.remove('barba-leave');
                }
            }]
        })
    }, []);

    return null;
}

export default ClientSideBarba;