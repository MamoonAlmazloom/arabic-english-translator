# Arabic ↔ English Translator

An AI-powered web application that translates text between Arabic and English using Google's Gemini API.

## Features

- **Bi-directional Translation**: Automatically detects language and translates between Arabic and English
- **Real-time Translation**: Powered by Google Gemini AI
- **Modern UI**: Clean, responsive interface with Tailwind CSS
- **Copy to Clipboard**: One-click copy of translated text
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during translation

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **AI API**: Google Gemini (gemini-1.5-flash)
- **State Management**: React Hooks (useState)

## Installation

1. Clone the repository
```bash
git clone [your-repo-url]
cd translator-app
```

2. Install dependencies
```bash
npm install
```

3. Get a Google Gemini API key
   - Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Sign in with your Google account
   - Click "Get API Key" or "Create API Key"
   - Copy your API key

4. Create a `.env` file in the root directory and add your API key:
```bash
REACT_APP_GEMINI_API_KEY=your_api_key_here
```
**Note:** Never commit your `.env` file to git. It's already in `.gitignore`.

5. Start the development server
```bash
npm start
```

## Usage

1. Enter text in English or Arabic in the input box
2. Click "Translate" button
3. View the translation in the output box
4. Click "Copy" to copy the translation to clipboard
5. Click "Clear" to reset the input

## Future Enhancements

- [ ] PDF document translation
- [ ] Language detection display
- [ ] Translation history
- [ ] Multiple language support
- [ ] Character count and limits
- [ ] Export translations

## Author

**Mamoon**  
Building AI-powered applications | Saudi Arabia

---

*This project was built as part of my software engineering portfolio.*
