function TranslateButton({ onClick, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 disabled:from-gray-400 disabled:to-gray-400"
    >
      {loading ? "Translating..." : "Translate"}
    </button>
  );
}

export default TranslateButton;
