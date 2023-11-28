import React, { useEffect } from 'react'
import "./Gameboard.css"
import { Unity, useUnityContext } from "react-unity-webgl";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import $ from "jquery"

import 'owl.carousel/dist/assets/owl.theme.default.css';
const Gameboard = () => {

    useEffect(()=>{
        let windowHeight=window.innerHeight;
        console.log(windowHeight)
    },[])

    const { unityProvider } = useUnityContext({
        loaderUrl: process.env.PUBLIC_URL + "/Build/Builds.loader.js",
        dataUrl: process.env.PUBLIC_URL + "/Build/Builds.data",
        frameworkUrl: process.env.PUBLIC_URL + "/Build/Builds.framework.js",
        codeUrl: process.env.PUBLIC_URL + "/Build/Builds.wasm",
    });


    //Owl Carousel Settings
    const options = {
        loop: true,
        center: false,
        items: 8,
        margin:-285,
        autoplay: false,
        dots: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsiveClass: true,

    };


    return <>

        <section className="gameboard-section">
            <div className="gameboard-container">
                <div className="game-section">
                    <div className="game-history-header">
                        <ul className='histories' id='history-box'>
                            <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                                <li className='history'>2x</li>
                            </OwlCarousel>
                        </ul>
                        <div className="history-btn">
                            <img src={process.env.PUBLIC_URL + "/Photos/webPhotos/history-btn.png"} alt="" />
                        </div>
                    </div>
                    <div className="unity-game-box">
                       <div className="canvas">
                            <Unity style={{
                                margin: 'auto'
                            }} className='unity' unityProvider={unityProvider} />
                        </div>
                    </div>

                    {/* game controllers */}

                    <div className="game-controllers-section">
                        <div className="gamecontrollers-container">
                            <div className="left-controllers">
                                <div className="header-buttons">
                                    <button className='bets-btn'>bet</button>
                                    <button className='auto-btn'>auto</button>
                                </div>
                                <div className="play-bet-controllers">
                                    <div className="apply-bet-controllers">
                                        <div className="bet-counter">
                                            <button className='decrese'><i class="uil uil-minus"></i></button>
                                            <div className="count">0.00</div>
                                            <button className='increse'>+</button>
                                        </div>
                                        <div className="bet-values">
                                            <div className="one-to-two"><div>1</div><div>2</div></div>
                                            <div className="five-to-tan"><div>5</div><div>10</div></div>
                                        </div>
                                    </div>
                                    <div className="play-bet-btn">
                                        <button>
                                            BET<br></br>
                                            100 USD
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="right-controllers">
                                <div className="header-buttons">
                                    <button className='bets-btn'>bet</button>
                                    <button className='auto-btn'>auto</button>
                                    <i class="uil uil-minus"></i>
                                </div>
                                <div className="play-bet-controllers">
                                    <div className="play-bet-btn">
                                        <button>
                                            BET<br></br>
                                            100 USD
                                        </button>
                                    </div>
                                    <div className="apply-bet-controllers">
                                        <div className="bet-counter">
                                            <button className='decrese'><i class="uil uil-minus"></i></button>
                                            <div className="count">0.00</div>
                                            <button className='increse'>+</button>
                                        </div>
                                        <div className="bet-values">
                                            <div className="one-to-two"><div>1</div><div>2</div></div>
                                            <div className="five-to-tan"><div>5</div><div>10</div></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gamebets-section">
                    <div className="gamebets-tabs">
                        <button>bets all</button>
                        <button>my bets</button>
                        <button>top</button>
                    </div>
                    <div className="gamebets-details">
                        <div className="details-header">
                            <div className="total-bets">
                                All Bets<br></br>
                                <span className='bets-count'> 299</span>
                            </div>
                            <div className="previous-hand">
                                <button><i class="uil uil-clock"></i> previous hand</button>
                            </div>
                        </div>
                        <div className="details-details">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>username</th>
                                        <th>bet amount</th>
                                        <th>bet out amount</th>
                                    </tr>
                                </thead>
                                <tbody className='tobdy'>
                                    <tr>
                                        <td><div className="user"><img src={process.env.PUBLIC_URL + "/Photos/webPhotos/gameUser.png"} alt="" /> shubh***3</div> </td>
                                        <td className='bet-amount'>100.0</td>
                                        <td className='bet-out'>100.0</td>
                                    </tr>
                                    <tr>
                                        <td><div className="user"><img src={process.env.PUBLIC_URL + "/Photos/webPhotos/gameUser.png"} alt="" /> shubh***3</div> </td>
                                        <td className='bet-amount'>100.0</td>
                                        <td className='bet-out'>100.0</td>
                                    </tr>
                                    <tr>
                                        <td><div className="user"><img src={process.env.PUBLIC_URL + "/Photos/webPhotos/gameUser.png"} alt="" /> shubh***3</div> </td>
                                        <td className='bet-amount'>100.0</td>
                                        <td className='bet-out'>100.0</td>
                                    </tr>
                                    <tr>
                                        <td><div className="user"><img src={process.env.PUBLIC_URL + "/Photos/webPhotos/gameUser.png"} alt="" /> shubh***3</div> </td>
                                        <td className='bet-amount'>100.0</td>
                                        <td className='bet-out'>100.0</td>
                                    </tr>
                                    <tr>
                                        <td><div className="user"><img src={process.env.PUBLIC_URL + "/Photos/webPhotos/gameUser.png"} alt="" /> shubh***3</div> </td>
                                        <td className='bet-amount'>100.0</td>
                                        <td className='bet-out'>100.0</td>
                                    </tr>
                                    <tr>
                                        <td><div className="user"><img src={process.env.PUBLIC_URL + "/Photos/webPhotos/gameUser.png"} alt="" /> shubh***3</div> </td>
                                        <td className='bet-amount'>100.0</td>
                                        <td className='bet-out'>100.0</td>
                                    </tr>
                                    <tr>
                                        <td><div className="user"><img src={process.env.PUBLIC_URL + "/Photos/webPhotos/gameUser.png"} alt="" /> shubh***3</div> </td>
                                        <td className='bet-amount'>100.0</td>
                                        <td className='bet-out'>100.0</td>
                                    </tr>
                                    <tr>
                                        <td><div className="user"><img src={process.env.PUBLIC_URL + "/Photos/webPhotos/gameUser.png"} alt="" /> shubh***3</div> </td>
                                        <td className='bet-amount'>100.0</td>
                                        <td className='bet-out'>100.0</td>
                                    </tr>
                                    <tr>
                                        <td><div className="user"><img src={process.env.PUBLIC_URL + "/Photos/webPhotos/gameUser.png"} alt="" /> shubh***3</div> </td>
                                        <td className='bet-amount'>100.0</td>
                                        <td className='bet-out'>100.0</td>
                                    </tr>

                                    <tr>
                                        <td><div className="user"><img src={process.env.PUBLIC_URL + "/Photos/webPhotos/gameUser.png"} alt="" /> shubh***3</div> </td>
                                        <td className='bet-amount'>100.0</td>
                                        <td className='bet-out'>100.0</td>
                                    </tr>

                                </tbody>
                            </table>
                            {/* user bets card */}
                            {/* <div className="userbets-card">
                                <div className="user">
                                    <img src={process.env.PUBLIC_URL + "/Photos/webPhotos/gameUser.png"} alt="" />
                                    shubh***33
                                </div>
                                <div className="bets-value">
                                    100.00
                                </div>
                                <div className="bets-out-value">
                                    100.00
                                </div>
                            </div> */}
                            {/* end of user bets card */}

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default Gameboard
