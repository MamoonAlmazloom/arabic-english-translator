import { useEffect, useState } from "react";
import { translateText } from "./utils/geminiApi";
import TranslationInput from "./components/TranslationInput";
import TranslateButton from "./components/TranslateButton";
import ErrorMessage from "./components/ErrorMessage";
import TranslationOutput from "./components/TranslationOutput";
import Footer from "./components/Footer";
import TranslationHistory from "./components/TranslationHistory";

function App() {
  const [input, setInput] = useState("");
  const [translate, setTranslate] = useState("");
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect (()=>{
      const savedHistory = localStorage.getItem("appHistory");
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    },[]);

  const handleTranslate = async () => {
    setLoading(true);
    setError("");
    setTranslate("");

    try {
      const translation = await translateText(input);
      setTranslate(translation);

      const newItem = {
        original: input,
        translated: translation,
        timestamp: new Date().toLocaleString(),
      };
      const newHistory = [newItem, ...history].slice(0, 10);
      setHistory(newHistory);
      localStorage.setItem("appHistory", JSON.stringify(newHistory));

    } catch (err) {
      setError(err.message || "Translation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(translate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError("Failed to copy text");
    }
  };

  const handleClear = () => {
    setInput("");
    setTranslate("");
    setError("");
    setCopied(false);
  };

const handleHistorySelect = (item) => {
  setInput(item.original);
  setTranslate(item.translated);
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Arabic ↔ English Translator
        </h1>

        <TranslationInput
          value={input}
          onChange={setInput}
          onClear={handleClear}
        />

        <TranslateButton onClick={handleTranslate} loading={loading} />

        <ErrorMessage message={error} />

        <TranslationOutput
          text={translate}
          onCopy={handleCopy}
          copied={copied}
        />
        <TranslationHistory 
          history={history}
          onSelect={handleHistorySelect}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
