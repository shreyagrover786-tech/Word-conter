import { useState } from "react";
import {Container, Typography, TextField, Button} from "@mui/material";

function WordCounter() {
    const [text, setText] = useState("");

    const words = text === "" ? 0 : text.trim().split(" ").length;
    const characters = text.length;
    const sentences = text === "" ? 0 : text.split(".").length;
    return (
        <Container maxWidth="sm" style={{textAlign: "center", marginTop: "50px"}}>
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
            />
            <Typography variant="h6" style={{marginTop: "20px"}}>
                Words: {words} | Characters: {characters} | Sentences: {sentences}
            </Typography>
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
