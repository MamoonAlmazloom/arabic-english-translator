import SpeakerButton from './SpeakerButton';

function TranslationOutput({ text, onCopy, copied }) {
  // Detect language
  const detectLanguage = (text) => {
    const arabicPattern = /[\u0600-\u06FF]/;
    return arabicPattern.test(text) ? 'ar' : 'en';
  };

  return (
    <div className="relative mt-6 p-4 bg-white border-2 border-gray-300 rounded-lg min-h-[150px]">
      {text && (
        <>
          <div className="absolute bottom-2 left-2">
            <SpeakerButton text={text} language={detectLanguage(text)} />
          </div>
          
          <button
            onClick={onCopy}
            className="absolute top-2 right-2 px-3 py-1 text-sm bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded hover:from-blue-500 hover:to-blue-600 transition"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </>
      )}
      
      {text ? (
        <p className="text-gray-700 whitespace-pre-wrap pt-8 pb-12">{text}</p>
      ) : (
        <div className="text-gray-400 text-lg flex justify-between">
          <span>Translation will appear here...</span>
          <span dir="rtl">ستظهر الترجمة هنا...</span>
        </div>
      )}
    </div>
  );
}

export default TranslationOutput;