import { useState } from "react";
import "./Home.css"
import EmojiButton from "../../component/Emoji/EmojiButton";
import ColorButton from "../../component/ColorButton/ColorButton";



function Home() {
    const [emoji, setEmoji, mood] = useState(() => "")
    const [sliderValue, setSliderValue] = useState(50);
    const [bgColor, setBgColor,] = useState("#ffffff")
    return (
        <>
            <div>
                <h1 className="heading">Cat Mood by using <span className="header-highlight">useState</span> </h1>
                <p className="description">
                    Learning and building concepts of the <code className="p-highlight">useState</code>
                    by making this website
                    using <code className="p-highlight">reactJS</code>
                    so clear all my concepts regarding then <code className="p-highlight">
                        useState</code>
                </p>

                <div className="emoji-container" style={{
                    fontSize: `${sliderValue * 1.1}px`
                }}>{emoji} </div>
                <h1>{mood}</h1>

                <div className="slider-container">
                    <input type="range" min="0" max="100" className="slider"
                        onChange={(e) => {
                            setSliderValue(e.target.value)
                        }}
                        value={sliderValue} />
                </div>

                <div className="emoji-picker">
                    <EmojiButton emoji={"😺"} setEmoji={setEmoji} mood="NormalCat" className="emoji-btn"/>
                    <EmojiButton emoji={"😿"} setEmoji={setEmoji} mood="Sad Cat"  className="emoji-btn"/>
                    <EmojiButton emoji={"🙀"} setEmoji={setEmoji} mood=" Shocked Cat"  className="emoji-btn"/>
                    <EmojiButton emoji={"😽"} setEmoji={setEmoji} mood="Kissing Cat" className="emoji-btn" />
                    <EmojiButton emoji={"😼"} setEmoji={setEmoji} mood="Smart Cat" className="emoji-btn" />
                    <EmojiButton emoji={"😻"} setEmoji={setEmoji} mood="Lovely Cat" className="emoji-btn" />
                    <EmojiButton emoji={"😹"} setEmoji={setEmoji} mood="Laughing Cat" className="emoji-btn" />
                    <EmojiButton emoji={"😸"} setEmoji={setEmoji} mood="Happy Cat" className="emoji-btn" />
                    <EmojiButton emoji={"😾"} setEmoji={setEmoji} mood="Angry Cat" className="emoji-btn" />



                </div>
                <div className="color-picker">
                    <ColorButton bgColor={"#FF99F3"} setBgColor={setBgColor} />
                    <ColorButton bgColor={"#8F210B"} setBgColor={setBgColor} />
                    <ColorButton bgColor={"#ff58ecff"} setBgColor={setBgColor} />
                    <ColorButton bgColor={"#99ffdfff"} setBgColor={setBgColor} />
                    <ColorButton bgColor={"#ff3434ff"} setBgColor={setBgColor} />
                </div>
            </div>
        </>
    )
}

export default Home;