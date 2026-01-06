import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [translate, setTranslate] = useState("");
  const [loading, setLoading] = useState(false);
  const [copy, setCopy] = useState(false);

  const handleTranslate = async () => {
    if (!input.trim()) {
      setError("Please enter some text to translate");
      return;
    }
    setLoading(true);
    setError(""); // Clear previous errors
    setTranslate(""); // Clear previous translation

    try {
      const genAI = new GoogleGenerativeAI(
        process.env.REACT_APP_GEMINI_API_KEY
      );
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const prompt = `Translate the following text. If it's in English, translate to Arabic. If it's in Arabic, translate to English. Only provide the translation, no explanations:\n\n${input}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const translation = response.text();

      setTranslate(translation);
    } catch (err) {
      setError("Translation failed. Please check your API key or try again.");
      console.error("Translation error:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(translate);
      setCopy(true);
      setTimeout(setCopy(false), 2000);
    } catch (err) {
      setError("copy is not successful");
    }
  };
  const handleClear = () => {
    setError("")
    setInput("")
    setTranslate("")
    setCopy("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Arabic ↔ English Translator
        </h1>

        <div className="relative">
          <textarea
            placeholder="Enter text to translate..."
            rows="6"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-4 pb-10 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
          />

          {input && (
            <button
              onClick={handleClear}
              className="absolute bottom-2 right-2 px-3 py-1 text-xs font-medium text-red-500 hover:text-white hover:bg-red-500 rounded-md transition-all duration-200"
            >
              Clear
            </button>
          )}
        </div>

        <button
          onClick={handleTranslate}
          disabled={loading}
          className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? "Translating..." : "Translate"}
        </button>

        {error && (
          <div className="mt-4 p-4 bg-red-100 border-2 border-red-400 rounded-lg">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        <div className="relative mt-6 p-4 bg-white border-2 border-gray-300 rounded-lg min-h-[150px]">
          {translate && (
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 px-3 py-1 text-sm bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded hover:from-blue-500 hover:to-blue-600 transition"
            >
              {copy ? "Copied!" : "Copy"}
            </button>
          )}
          <p className="text-gray-700 whitespace-pre-wrap">
            {translate || "Translation will appear here..."}
          </p>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            Built by <span className="font-semibold text-gray-450">Mamoon</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
