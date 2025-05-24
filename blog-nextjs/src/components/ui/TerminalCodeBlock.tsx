'use client'

import { useState } from 'react'
import { Copy, Check, Terminal, Sparkles } from 'lucide-react'
import { TerminalHeader } from './TerminalTypewriter'

interface TerminalCodeBlockProps {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
  className?: string
}

export function TerminalCodeBlock({ 
  code, 
  language = 'bash', 
  title,
  showLineNumbers = true,
  className = ""
}: TerminalCodeBlockProps) {
  const [copied, setCopied] = useState(false)
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const lines = code.split('\n')
  
  // Catppuccin terminal syntax highlighting
  const highlightSyntax = (line: string) => {
    return line
      // Comments
      .replace(/(#.*)/g, '<span class="text-text-tertiary catppuccin-overlay0">$1</span>')
      // Strings
      .replace(/(".*?")/g, '<span class="text-accent-yellow catppuccin-yellow">"$1"</span>')
      .replace(/('.*?')/g, '<span class="text-accent-yellow catppuccin-yellow">\'$1\'</span>')
      // Commands
      .replace(/^(\s*)(sudo|npm|yarn|git|docker|cd|ls|mkdir|rm|cp|mv|chmod|chown)(\s)/g, 
        '$1<span class="text-accent-primary catppuccin-mauve">$2</span>$3')
      // Flags
      .replace(/(\s)(-{1,2}[a-zA-Z-]+)/g, '$1<span class="text-accent-teal catppuccin-teal">$2</span>')
      // Variables
      .replace(/(\$[A-Z_][A-Z0-9_]*)/g, '<span class="text-accent-secondary catppuccin-lavender">$1</span>')
      // File paths
      .replace(/(\/[^\s]*)/g, '<span class="text-accent-green catppuccin-green">$1</span>')
  }

  return (
    <div className={`terminal-window overflow-hidden ${className}`}>
      {/* Catppuccin terminal header */}
      <div className="flex items-center justify-between bg-bg-tertiary px-4 py-2 border-b border-border-terminal">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-catppuccin-red rounded-full"></div>
            <div className="w-3 h-3 bg-catppuccin-yellow rounded-full"></div>
            <div className="w-3 h-3 bg-catppuccin-green rounded-full"></div>
          </div>
          <Sparkles className="w-4 h-4 text-text-tertiary ml-4 catppuccin-blue" />
          <span className="text-text-tertiary text-xs font-mono">
            {title || `${language} - Catppuccin Terminal`}
          </span>
        </div>
        
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-1 px-2 py-1 text-text-tertiary hover:text-accent-primary transition-colors duration-200 rounded catppuccin-blue"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              <span className="text-xs">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span className="text-xs">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content with Catppuccin styling */}
      <div className="bg-bg-primary p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              {showLineNumbers && (
                <span className="text-text-tertiary text-xs mr-4 select-none min-w-[2rem] text-right catppuccin-overlay0">
                  {index + 1}
                </span>
              )}
              <code 
                className="text-text-primary flex-1"
                dangerouslySetInnerHTML={{ __html: highlightSyntax(line) || '&nbsp;' }}
              />
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}

// Catppuccin terminal output component
interface TerminalOutputProps {
  prompt?: string
  command: string
  output?: string
  className?: string
}

export function TerminalOutput({ 
  prompt = "❯", 
  command, 
  output,
  className = ""
}: TerminalOutputProps) {
  return (
    <div className={`terminal-output ${className}`}>
      <div className="font-mono">
        {/* Catppuccin terminal command line */}
        <div className="flex items-center mb-2">
          <span className="text-accent-secondary catppuccin-mauve">{prompt} </span>
          <span className="text-text-white">{command}</span>
        </div>
        
        {/* Output with Catppuccin styling */}
        {output && (
          <div className="text-text-primary text-sm leading-relaxed whitespace-pre-wrap pl-4 border-l-2 border-border-terminal">
            {output}
          </div>
        )}
      </div>
    </div>
  )
} 