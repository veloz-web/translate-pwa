export const useTextToSpeech = () => {
  const speak = (text: string, lang: string) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === 'en' ? 'en-US' : 'es-ES';
      utterance.rate = 0.8;
      utterance.volume = 1;
      speechSynthesis.speak(utterance);
    }
  };

  return { speak };
};