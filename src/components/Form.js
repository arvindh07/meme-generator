import React, { useState , useEffect} from 'react';
import "./styles/Form.css";

export const Form = () => {
    const [meme,setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    });

    const [allMeme,setAllMeme] = useState([]);

    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMeme(data))
    }, [])
    
    const generateMeme = () => {
        let memesArray = allMeme.data.memes;
        let random = Math.floor(Math.random()*memesArray.length);
        setMeme(prevObj => {
            return {
                ...prevObj,
                randomImage: memesArray[random].url
            }
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setMeme(prevObj => {
            return {
                ...prevObj,
                [name] : value
            }
        })
    }
    return (
        <main className="form">
            <div>
                <div className="inputs">
                    <input 
                        type="text" 
                        name="topText" 
                        value={meme.topText}
                        id="toptxt" 
                        onChange={handleChange} 
                        placeholder='Top Text' />
                    <input 
                        type="text" 
                        name="bottomText" 
                        value={meme.bottomText}
                        id="bottomtxt" 
                        onChange={handleChange} 
                        placeholder='Bottom Text' />
                </div>
                <button onClick={generateMeme} className="btn">Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="meme-img" />
                <h2 className="meme--text  top-text">{meme.topText}</h2>
                <h2 className="meme--text  bottom-text">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
