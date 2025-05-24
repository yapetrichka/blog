'use client'

import React, { useEffect, useState } from 'react'

interface TypewriterCodeEffectProps {
  className?: string
  delay?: number
}

const codeSnippets = [
  'const player = new Player();',
  'if (Input.GetKeyDown(KeyCode.Space)) {',
  '  player.Jump();',
  '}',
  '',
  'function Update() {',
  '  transform.position += velocity;',
  '  CheckCollisions();',
  '}',
  '',
  'var gameObject = Instantiate(prefab);',
  'Destroy(gameObject, 3.0f);',
  '',
  'public class GameManager : MonoBehaviour {',
  '  [SerializeField] private int score;',
  '  private void Start() {',
  '    InitializeGame();',
  '  }',
  '}',
  '',
  'using System.Collections.Generic;',
  'using UnityEngine;',
  'using Unity.Netcode;',
  '',
  'Vector3 direction = transform.forward;',
  'Ray ray = new Ray(transform.position, direction);',
  'if (Physics.Raycast(ray, out hit)) {',
  '  Debug.Log("Hit: " + hit.collider.name);',
  '}',
]

export function TypewriterCodeEffect({ className = '', delay = 0 }: TypewriterCodeEffectProps) {
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentLineIndex < codeSnippets.length) {
          const currentLine = codeSnippets[currentLineIndex]
          
          if (currentChar <= currentLine.length) {
            setVisibleLines(prev => {
              const newLines = [...prev]
              newLines[currentLineIndex] = currentLine.substring(0, currentChar)
              return newLines
            })
            setCurrentChar(prev => prev + 1)
          } else {
            // Move to next line
            setCurrentLineIndex(prev => prev + 1)
            setCurrentChar(0)
            
            // Add a small pause between lines
            setTimeout(() => {}, 100)
          }
        } else {
          // Restart animation
          setVisibleLines([])
          setCurrentLineIndex(0)
          setCurrentChar(0)
        }
      }, 50) // Typing speed

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [currentLineIndex, currentChar, delay])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className={`typewriter-code ${className}`}>
      {visibleLines.map((line, index) => (
        <div key={index} className="typewriter-line" style={{ animationDelay: `${index * 0.1}s` }}>
          {line}
          {index === currentLineIndex && showCursor && (
            <span className="typewriter-cursor ml-1"></span>
          )}
        </div>
      ))}
    </div>
  )
}

export default TypewriterCodeEffect 