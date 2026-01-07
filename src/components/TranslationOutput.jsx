function TranslationOutput({ text, onCopy, copied }) {
  return (
    <div className="relative mt-6 p-4 bg-white border-2 border-gray-300 rounded-lg min-h-[150px]">
      {text ? (
        <p className="text-gray-700 whitespace-pre-wrap">{text}</p>
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
