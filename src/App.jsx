import { ThemeProvider } from "./Components/ThemeContext.jsx"
import WordCounter from "./Components/WordCounter";

function App() {
    return (
        <ThemeProvider>
        <WordCounter/>
        </ThemeProvider>
    );
}
export default App;