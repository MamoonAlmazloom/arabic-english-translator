function TranslationHistory({ history, onSelect }) {
  if (history.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold text-gray-600 mb-2">Recent Translations</h3>
      <div className="space-y-2">
        {history.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelect(item)}
            className="w-full text-left p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition"
          >
            <p className="text-xs text-gray-500 mb-1">{item.timestamp}</p>
            <p className="text-sm text-gray-700 truncate">{item.original}</p>
            <p className="text-sm text-blue-600 truncate">→ {item.translated}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TranslationHistory;