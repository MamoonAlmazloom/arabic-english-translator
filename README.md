# CalmTranslate - Arabic ↔ English Translator

> AI-powered bidirectional translation between Arabic and English with instant pronunciation and persistent history

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://calmtranslate.vercel.app/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 🚀 [Live Demo](https://calmtranslate.vercel.app/)

Try it now: **https://calmtranslate.vercel.app/**

---

## 🌟 Features

✅ **Bidirectional Translation** - Automatically detects and translates between Arabic ↔ English  
✅ **Translation History** - Saves your last 10 translations with timestamps  
✅ **Persistent Storage** - History survives page refreshes using localStorage  
✅ **Bilingual Interface** - UI text in both English and Arabic for accessibility  
✅ **Loading Animation** - Professional bouncing dots during translation  
✅ **One-Click Copy** - Copy translations to clipboard instantly  
✅ **Speaker Button** - Listen to pronunciation of input and output text  
✅ **Clean Architecture** - Professional component-based React structure  
✅ **Responsive Design** - Beautiful gradient UI with Tailwind CSS

---

## 🛠️ Tech Stack

| Technology                  | Purpose                       |
| --------------------------- | ----------------------------- |
| **React 18**                | Frontend framework            |
| **Tailwind CSS**            | Styling and responsive design |
| **Google Gemini 2.5 Flash** | AI translation engine         |
| **localStorage API**        | Client-side data persistence  |
| **Vercel**                  | Deployment and hosting        |

---

## 📁 Project Structure

```
translator-app/
├── src/
│   ├── components/
│   │   ├── TranslationInput.jsx      # Input textarea with bilingual placeholders & speaker button
│   │   ├── TranslateButton.jsx       # Gradient button with loading state
│   │   ├── LoadingSpinner.jsx        # Animated bouncing dots
│   │   ├── ErrorMessage.jsx          # Error display component
│   │   ├── TranslationOutput.jsx     # Output box with copy & speaker button
│   │   ├── SpeakerButton.jsx         # Text-to-speech pronunciation component
│   │   ├── TranslationHistory.jsx    # History list with click-to-load
│   │   └── Footer.jsx                # Branding footer
│   ├── utils/
│   │   └── geminiApi.js              # Gemini API integration
│   ├── App.js                        # Main component orchestration
│   └── index.css                     # Tailwind imports
├── .env                              # Environment variables (gitignored)
├── .gitignore
├── README.md
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

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

```env
   REACT_APP_GEMINI_API_KEY=your_api_key_here
```

4. **Start development server**

```bash
   npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## 💡 How It Works

```
User Input → Gemini API → Language Detection → Translation → Display
                                ↓
                         Save to History
                                ↓
                         Store in localStorage
```

1. User enters text in Arabic or English
2. Google Gemini AI detects the source language
3. Text is translated to the opposite language
4. Translation displayed with copy button and speaker button
5. Click speaker button (🔈) to listen to pronunciation
6. Saved to history (last 10 translations)
7. History persists across browser sessions

### Speaker Button Features

- **Automatic Language Detection**: Detects Arabic vs English text
- **Native Browser Text-to-Speech**: Uses Web Speech API for pronunciation
- **Visual Feedback**: Button animates with pulse effect during playback
- **Positioned Smartly**: Located at bottom of input/output boxes to avoid text overlap

---

## 🎨 UI Highlights

- **Bilingual Placeholders**: English (left) and Arabic (right) text alignment
- **Gradient Button**: Blue-to-indigo with smooth hover transitions
- **Loading State**: Animated bouncing dots during API calls
- **History Cards**: Click any past translation to reload it
- **Responsive Layout**: Works on desktop, tablet, and mobile

---

## 🔒 Security & Best Practices

✅ API keys in environment variables (never committed)  
✅ Error handling with user-friendly messages  
✅ Input validation before API calls  
✅ Component-based architecture for maintainability  
✅ Separation of concerns (UI vs API logic)

---

## 📝 Code Quality Features

- **React Hooks**: `useState`, `useEffect` for state management
- **localStorage Integration**: Persistent client-side storage
- **Async/Await**: Clean asynchronous API calls
- **Error Boundaries**: Comprehensive try-catch blocks
- **Component Reusability**: DRY principles throughout

---

## 🚧 Roadmap

- [ ] PDF text extraction and translation
- [ ] Dark mode toggle
- [ ] Multiple language support (beyond Arabic/English)
- [ ] Character/word count display
- [ ] Export history as CSV
- [ ] Voice input/output

---

## 📦 Deployment

Deployed on **Vercel** with automatic CI/CD:

- Push to `main` branch → Auto-deploy
- Environment variables configured in Vercel dashboard
- HTTPS enabled by default

---

## 👤 Author

**Mamoon Almazloom**

📍 Dammam/Khobar, Saudi Arabia  
🎓 Computer Science Graduate  
💼 Aspiring Software Engineer

---

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React, Tailwind CSS, and Google Gemini AI**
