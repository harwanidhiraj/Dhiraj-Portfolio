import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  strings: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

interface UseTypewriterReturn {
  displayText: string;
  cursorVisible: boolean;
}

const useTypewriter = ({
  strings,
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseDuration = 2000,
}: UseTypewriterOptions): UseTypewriterReturn => {
  const [stringIndex, setStringIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentString = strings[stringIndex];
    const speed = isDeleting ? deleteSpeed : typeSpeed;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentString.slice(0, displayText.length + 1));
        if (displayText.length === currentString.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setDisplayText(currentString.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, stringIndex, strings, typeSpeed, deleteSpeed, pauseDuration]);

  return { displayText, cursorVisible };
};

export default useTypewriter;
