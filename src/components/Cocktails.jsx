import React from 'react'
import {cocktailLists, mocktailLists} from "../../constant/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true
            }
        })

        parallaxTimeLine.from('#c-left-leaf', {
            x: -100, y:1000
        }).from('#c-right-leaf', {
            x: 100, y:100
        })
    })
    return (
        <section className={"noisy"} id="cocktails">
            <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id={"c-left-leaf"}/>
            <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id={"c-right-leaf"}/>
            <div className="list">
                <div className="popular">
                    <h2>Most Popular Cocktails</h2>
                    <ul>
                        {cocktailLists.map((drink, index) => (
                            <li key={drink.name}>
                                <div className={"md:me-28"}>
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} | {drink.detail}</p>
                                </div>
                                    <span>{drink.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="loved">
                    <h2>Most Loved Mocktails</h2>
                    <ul>
                        {mocktailLists.map((drink, index) => (
                            <li key={drink.name}>
                                <div className={"md:me-28"}>
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} | {drink.detail}</p>
                                </div>
                                    <span>{drink.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Cocktails
