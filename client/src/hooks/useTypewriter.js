import { useState, useEffect } from 'react'

const useTypewriter = (items, typingSpeed = 65, deletingSpeed = 35, pauseDuration = 1800) => {
  const [text, setText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = items[currentIndex]
    let timeout

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeed)
      } else {
        setIsDeleting(false)
        setCurrentIndex((currentIndex + 1) % items.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, currentIndex, items, typingSpeed, deletingSpeed, pauseDuration])

  return text
}

export default useTypewriter
