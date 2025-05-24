'use client'

import { useEffect, useState } from 'react'

interface TerminalTypewriterProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  showCursor?: boolean
  onComplete?: () => void
}

export function TerminalTypewriter({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = "", 
  showCursor = true,
  onComplete
}: TerminalTypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, currentIndex === 0 ? delay : speed)

      return () => clearTimeout(timer)
    } else if (!isComplete) {
      setIsComplete(true)
      if (onComplete) {
        onComplete()
      }
    }
  }, [currentIndex, text, speed, delay, isComplete, onComplete])

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
      {showCursor && (
        <span 
          className={`inline-block w-2 h-5 bg-accent-primary ml-1 ${
            isComplete ? 'animate-terminal-blink' : ''
          }`}
        >
          {!isComplete && '█'}
        </span>
      )}
    </span>
  )
}

// Terminal prompt component
interface TerminalPromptProps {
  user?: string
  directory?: string
  command?: string
  className?: string
}

export function TerminalPrompt({ 
  user = "user", 
  directory = "dreamcode", 
  command,
  className = ""
}: TerminalPromptProps) {
  return (
    <div className={`font-mono text-sm ${className}`}>
      <span className="text-accent-secondary">{user}@{directory}:~$ </span>
      {command && <span className="text-text-primary">{command}</span>}
    </div>
  )
}

// Terminal window header
export function TerminalHeader({ title = "Terminal" }: { title?: string }) {
  return (
    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-border-terminal">
      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-text-tertiary text-xs font-mono ml-4">{title}</span>
      </div>
    </div>
  )
} 