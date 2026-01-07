function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="mt-4 p-4 bg-red-100 border-2 border-red-400 rounded-lg">
      <p className="text-red-700">{message}</p>
    </div>
  );
}

export default ErrorMessage;
