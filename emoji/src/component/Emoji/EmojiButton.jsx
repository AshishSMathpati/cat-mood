import "./EmojiButton.css"

function EmojiButton({ emoji, setEmoji, mood }) {
    return <>
    
        <div className="emoji-btn" onClick={() => {
            setEmoji(emoji)
            
        }}>{emoji} <p>{mood}</p>
        </div>
    </>
}

        export default EmojiButton;