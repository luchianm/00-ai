import React from 'react'

import {logo} from '../assets';

const Hero = () => {
    return(
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
                <button
                    type="button"
                    onClick={()=>{window.open('https://github.com/luchianm/00-ai')}}
                    className="black_btn "
                >GitHub</button>
            </nav>
            <h1 className="head_text">
                Summarize Article with <br className="max-md:hidden" /> <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Effortlessly summarize any text with our advanced summarization tool. Simply upload your link and receive a concise, 30-word summary in seconds. Save time and get the essence of any article or document!
            </h2>
        </header>
    )
}

export default Hero
