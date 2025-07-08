import React from 'react'
import {navLinks} from "../../constant/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger: '#navbar',
                start: 'bottom top' //bottom of the navbar(target), reach top of the viewport
            }
        });

        navTween.fromTo('#navbar', {
            backgroundColor: 'transparent',
        }, {
            backgroundColor: '#00000050',
            backdropFilter: 'blur(2px)',
            duration: 1,
            ease: "power1.inOut"
        })
    })
    return (
        <nav id="navbar">
            <div>

                <a href="#home" className={"flex items-center gap-2"}>
                    <img src="/images/logo.png" alt="logo"/>
                    <p>Velvet Pour</p>
                </a>
                <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>
                            {link.title}
                        </a>
                    </li>
                ))}
                </ul>
            </div>

        </nav>
    )
}
export default Navbar
