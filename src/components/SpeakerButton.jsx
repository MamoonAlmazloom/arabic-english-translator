import { useState } from 'react';

function SpeakerButton({ text, language }) {
  const [speaking, setSpeaking] = useState(false);

  const handleSpeak = () => {
    if (!text) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'ar' ? 'ar-SA' : 'en-US';
    
    // Calm and formal voice settings
    utterance.rate = 0.85;      // Slower = more calm (0.1-10, default 1)
    utterance.pitch = language === 'ar' ? 1.2 : 0.95;     // Higher pitch for Arabic (0-2, default 1)
    utterance.volume = 0.9;     // Slightly quieter = more calm (0-1)
    
    // Try to select a better voice if available
    const voices = window.speechSynthesis.getVoices();
    
    if (language === 'ar') {
      // For Arabic, try to find the best quality voice
      // Priority: Google voices > Microsoft voices > any Arabic voice
      const arabicVoices = voices.filter(voice => voice.lang.startsWith('ar'));
      const preferredVoice = 
        arabicVoices.find(v => v.name.includes('Google')) ||
        arabicVoices.find(v => v.name.includes('Microsoft')) ||
        arabicVoices[0];
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
        console.log('Using Arabic voice:', preferredVoice.name);
      }
    } else {
      // For English
      const preferredVoice = voices.find(voice => 
        voice.lang.startsWith('en') && (voice.name.includes('Female') || voice.name.includes('Daniel'))
      );
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
    }

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={handleSpeak}
      disabled={!text}
      className={`p-2 rounded-full transition-all ${
        speaking
          ? 'bg-blue-500 text-white animate-pulse'
          : 'bg-blue-200 text-gray-600 hover:bg-blue-100 hover:text-blue-600'
      } disabled:opacity-30 disabled:cursor-not-allowed`}
      title="Listen to pronunciation"
    >
      {speaking ? '🔊' : '🔈'}
    </button>
  );
}

export default SpeakerButton;