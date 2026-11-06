import { useState } from "react";
function WordCounter() {
    const [text, setText] = useState("");

    const words = text === "" ? 0 : text.trim().split(" ").length;
    const characters = text.length;
    const sentences = text === "" ? 0 : text.split(".").length - 1;
    return (
        <div style={{textAlign: "center", padding: "20px"}}>
            <h1>Word Counter</h1>
            <p>Instantly analyze your text for word count, character count, sentences, and paragraphs.</p>
            <textarea
            placeholder="Start typing or paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ width: "400px", height: "120px", padding: "10px"}}>
            </textarea>
            <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "20px"}}>
                <div>
                    <p>Words</p>
                    <h2>{words}</h2>
                </div>
                <div>
                    <p>Characters</p>
                    <h2>{characters}</h2>
                </div>
                <div>
                    <p>Sentences</p>
                    <h2>{sentences}</h2>
                </div>
            </div>
            <button onClick={() => setText("")}>Clear</button>
        </div>
    );
}
export default WordCounter;