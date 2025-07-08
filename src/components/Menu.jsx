"use client"
import React, {useRef} from 'react'
import {allCocktails} from "../../constant/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
    // const contentRef = useRef();
    const [currIndex, setCurrIndex] = React.useState(0);
    const total = allCocktails.length
    const goToSlide = (index) => {
        const newIndex = (index + total) % total
        setCurrIndex(newIndex);
    }

    useGSAP(() => {
        gsap.fromTo(".cocktail img", {opacity:0, xPercent: -100}, { xPercent: 0, opacity:1, duration:1 , ease: 'power1.inOut'})
    }, [currIndex]);

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#menu",
                start: "top 80%",
                end: "bottom bottom",
                scrub: true,
            }
        }).fromTo(".cocktail-tabs", {opacity:0}, {opacity:1, duration:1 , ease: 'power1.inOut'})
    })


    return (
        <section id="menu" aria-labelledby={"menu-heading"} className={"noisy"}>
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf"/>
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf"/>
            <h2 id="menu-heading" className="sr-only">
                Cocktails Menu
            </h2>
            <nav className="cocktail-tabs" aria-label={"Cocktail Navigation"}>
                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currIndex

                    return(
                        <button onClick={() => goToSlide(index)} key={cocktail.id} className={`${isActive ? "text-white border-white": "text-white/50 border-white/50"}`}>
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>

            <div className="content">
                {/*<div className="arrows">*/}
                {/*    <button className={"text-left"} onClick={() => goToSlide(currIndex - 1)}>*/}
                {/*        /!*<span>{prevCock.name}</span>*!/*/}
                {/*        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden/>*/}
                {/*    </button>*/}
                {/*    /!*<button className={"text-left"} onClick={() => goToSlide(currIndex + 1)}>*!/*/}
                {/*    /!*    /!*<span>{nextCock.name}</span>*!/*!/*/}
                {/*    /!*    <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden/>*!/*/}
                {/*    /!*</button>*!/*/}
                {/*</div>*/}
                <div className="cocktail">
                    <img src={allCocktails[currIndex].image} alt="cocktail-image" className={"object-contain"}/>
                    {/*{currCock.image}*/}
                    {/*{allCocktails[currIndex].image}*/}
                </div>
                <div className="recipe">
                    <div className={"info"}>
                        <p>Recipe for:</p>
                        <p id="title">{allCocktails[currIndex].name}</p>
                    </div>
                    <div className="details">
                        <h2>{allCocktails[currIndex].title}</h2>
                        <p>{allCocktails[currIndex].description}</p>
                    </div>
                </div>
            </div>
        </section>

    // <section id="menu" aria-labelledby="menu-heading">
    //     <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
    //     <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
    //
    //     <h2 id="menu-heading" className="sr-only">
    //         Cocktail Menu
    //     </h2>
    //
    //     <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
    //         {allCocktails.map((cocktail, index) => {
    //             const isActive = index === currIndex;
    //
    //             return (
    //                 <button key={cocktail.id} className={`
	// 			${isActive
    //                     ? 'text-white border-white'
    //                     : 'text-white/50 border-white/50'}
	// 		 `}	onClick={() => goToSlide(index)}
    //                 >
    //                     {cocktail.name}
    //                 </button>
    //             )
    //         })}
    //     </nav>
    //
    //     <div className="content">
    //         <div className="arrows">
    //             <button className="text-left" onClick={() => goToSlide(currIndex - 1)}>
    //                 <span>{prevCock.name}</span>
    //                 <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
    //             </button>
    //
    //             <button className="text-left" onClick={() => goToSlide(currIndex + 1)}>
    //                 <span>{nextCock.name}</span>
    //                 <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
    //             </button>
    //         </div>
    //
    //         <div className="cocktail">
    //             <img src={currCock.image} className="object-contain"/>
    //         </div>
    //
    //         <div className="recipe">
    //             <div ref={contentRef} className="info">
    //                 <p>Recipe for:</p>
    //                 <p id="title">{currCock.name}</p>
    //             </div>
    //
    //             <div className="details">
    //                 <h2>{currCock.title}</h2>
    //                 <p>{currCock.description}</p>
    //             </div>
    //         </div>
    //     </div>

    )
}
export default Menu
