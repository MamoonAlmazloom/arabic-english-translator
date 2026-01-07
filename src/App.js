import { useState } from "react";
import { translateText } from "./utils/geminiApi";
import TranslationInput from "./components/TranslationInput";
import TranslateButton from "./components/TranslateButton";
import ErrorMessage from "./components/ErrorMessage";
import TranslationOutput from "./components/TranslationOutput";
import Footer from "./components/Footer";

function App() {
  const [input, setInput] = useState("");
  const [translate, setTranslate] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    setError("");
    setTranslate("");

    try {
      const translation = await translateText(input);
      setTranslate(translation);
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

        <Footer />
      </div>
    </div>
  );
}

export default App;
