# Arabic ↔ English Translator

A bilingual web application that provides instant AI-powered translation between Arabic and English using Google's Gemini AI.

## 🌟 Features

- **Bidirectional Translation**: Automatically detects language and translates between Arabic and English
- **Bilingual Interface**: UI text displayed in both English and Arabic for accessibility
- **Clean Architecture**: Professional component-based structure with separation of concerns
- **Real-time Translation**: Powered by Google Gemini 2.5 Flash model
- **Copy to Clipboard**: One-click copy functionality for translated text
- **Responsive Design**: Beautiful gradient UI built with Tailwind CSS
- **Input Management**: Clear button for quick text reset

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **AI Model**: Google Gemini 2.5 Flash API
- **Architecture**: Component-based with utility separation

## 📁 Project Structure
```
translator-app/
├── src/
│   ├── components/
│   │   ├── TranslationInput.jsx    # Input textarea with clear button
│   │   ├── TranslateButton.jsx     # Translation trigger button
│   │   ├── ErrorMessage.jsx        # Error display component
│   │   ├── TranslationOutput.jsx   # Output box with copy functionality
│   │   └── Footer.jsx              # Branding footer
│   ├── utils/
│   │   └── geminiApi.js            # Gemini API integration
│   ├── App.js                      # Main component orchestration
│   └── index.css                   # Tailwind imports
├── .env                            # Environment variables (not tracked)
├── .gitignore
├── README.md
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/MamoonAlmazloom/arabic-english-translator.git
   cd arabic-english-translator
```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
```
   REACT_APP_GEMINI_API_KEY=your_api_key_here
```
   
   Get your API key from: https://makersuite.google.com/app/apikey

4. **Start the development server**
```bash
   npm start
```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 💡 How It Works

1. User enters text in either Arabic or English
2. Gemini API automatically detects the language
3. Text is translated to the opposite language
4. Translation appears in the output box
5. User can copy the translation with one click

## 🎨 Design Highlights

- **Bilingual Placeholders**: English (left-aligned) and Arabic (right-aligned) for both input and output areas
- **Gradient Button**: Subtle blue-to-indigo gradient with smooth hover effects
- **Clean Layout**: Professional spacing and color scheme
- **Accessibility**: High contrast and clear visual hierarchy

## 🔒 Security

- API keys stored in environment variables
- `.env` file excluded from version control via `.gitignore`
- No sensitive data exposed in client-side code

## 📝 Code Quality

- **Component Architecture**: Each UI element is a reusable component
- **Separation of Concerns**: API logic separated in utility functions
- **Error Handling**: Comprehensive try-catch blocks with user feedback
- **State Management**: Clean React hooks (useState) for all interactions

## 🚧 Future Enhancements

- [ ] PDF text extraction and translation
- [ ] Translation history
- [ ] Multiple language support
- [ ] Dark mode toggle
- [ ] Character/word count
- [ ] Pronunciation guide

## 👤 Author

**Mamoon**

---

Built with ❤️ using React and Google Gemini AI API