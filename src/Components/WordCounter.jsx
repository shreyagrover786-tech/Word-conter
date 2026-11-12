import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import {Container, Typography, TextField, Button} from "@mui/material";

function WordCounter() {
    const [text, setText] = useState("");
    const {dark, toggleTheme} = useContext(ThemeContext);

    const words = text === "" ? 0 : text.trim().split(" ").length;
    const characters = text.length;
    const sentences = text .trim() === "" ? 0 : text.split(/[.!?]+/).filter(s => s.trim() !== "").length;
    const paragraphs = text.split(/\n+/).filter(p => p.trim() !== "").length;
    const readTime = (words / 200).toFixed(1); 
    const reversed = text.split("").reverse().join("");

    let vowels = 0;
    let consonents = 0;
    for (let ch of text) {
        if ("aeiouAEIOU".includes(ch)) {
            vowels++;
        } else if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
            consonents++;
        }
    }
    let freq = {};
    for (let ch of text.toLowerCase()) {
        if (ch >="a" && ch <="z") {
           if (freq[ch]) {
            freq[ch]++;
           } else {
            freq[ch] = 1;
           }
        }
    }
    return (
        <Container maxWidth="sm" style={{textAlign: "center", marginTop: "50px", background: dark ? "#222" : "white",
            color: dark ? "white" : "black", minHeight: "100vh", padding: "20px", borderRadius: "10px"
        }}>
            <Typography variant="h4" color="primary">
                Word Counter
            </Typography>
            <Typography variant="body1" style={{margin: "10px 0 20px 0", color: "gray"}}>
                Type your text below
            </Typography>
            <TextField
            fullWidth
            multiline
            rows={5}
            label="Enter your text here"
            variant="outlined"
             value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{
                "& .MuiOutlinedInput-root": {
                    color: dark ? "white" : "black",
                    backgroundColor: dark ? "#333" : "white",
                },
                "& .MuiInputLabel-root": {
                    color: dark ? "white" : "black",
                },
            }}
            />
            <div style={{marginTop: "15px", display: "flex", gap: "10px", justifyContent: "center"}}>
                <Button
                variant="contained"
                color="primary"
                onClick={() => setText(text.toUpperCase())}>
                    UPPERCASE
                </Button>
                <Button
                variant="contained"
                color="secondary"
                onClick={() => setText(text.toLowerCase())}>
                    lowercase
                </Button>
                <Button variant="contained" color="success" onClick={() => navigator.clipboard.writeText(text)}>
                    COPY
                </Button>
                <Button 
                variant="contained"
                color="warning"
                onClick={() => setText(text.split(/[ ]+/).join(" "))}>
                    REMOVE SPACES
                </Button>
                <Button onClick={toggleTheme}>
                    {dark ? "LIGHT MODE" : "DARK MODE"}
                </Button>
            </div>
            <Typography variant="h6" style={{marginTop: "20px"}}>
                Words: {words} | Characters: {characters} | Sentences: {sentences} | paragraphs: {paragraphs} | Reading Time: {readTime} min | Vowels: {vowels} | Consonents: {consonents} | Reversed: {reversed} 
            </Typography>
            <Typography variant="h6" style={{marginTop: "10px"}}>
                Alphabet Frequency
            </Typography>
            {Object.entries(freq).map(([letter, count]) => (
                <Typography key={letter}>
                    {letter} : {count} times
                </Typography>
            ))}

            <Button
            variant="contained"
            color="error"
            style={{marginTop: "20px"}}
            onClick={() => setText("")}>
                Clear
            </Button>
        </Container>
    );
    }
export default WordCounter;
