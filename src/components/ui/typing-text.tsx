import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export function TypingText({ text, speed = 100, className = "" }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={`${className} ${currentIndex < text.length ? 'typing-animation' : ''}`}>
      {displayedText}
    </span>
  );
}