import SpeakerButton from './SpeakerButton';

function TranslationInput({ value, onChange, onClear, onTranslate }) {
  // Detect language
  const detectLanguage = (text) => {
    const arabicPattern = /[\u0600-\u06FF]/;
    return arabicPattern.test(text) ? 'ar' : 'en';
  };
  const handleKeyDown = (e) => {
    if (e.key ===  "Enter") {
      e.preventDefault();
      onTranslate();
    }
  }


  return (
    <div className="relative">
      <textarea
        onKeyDown={handleKeyDown}
        rows="6"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 pb-10 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
      />

      {!value && (
        <div className="absolute top-4 left-4 right-4 pointer-events-none text-gray-400 text-lg flex justify-between">
          <span>Enter text to translate...</span>
          <span dir="rtl">أدخل النص للترجمة...</span>
        </div>
      )}

      {value && (
        <>
          <div className="absolute bottom-2 left-2">
            <SpeakerButton text={value} language={detectLanguage(value)} />
          </div>
          
          <button
            onClick={onClear}
            className="absolute bottom-2 right-2 px-3 py-1 text-xs font-medium text-red-500 hover:text-white hover:bg-red-500 rounded-md transition-all duration-200"
          >
            Clear
          </button>
        </>
      )}
    </div>
  );
}

export default TranslationInput;