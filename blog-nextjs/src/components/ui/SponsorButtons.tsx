'use client'

import { Heart, ExternalLink } from 'lucide-react'
import siteConfig from '@/site.config'

export default function SponsorButtons() {
  if (!siteConfig.boosty.enabled) {
    return null
  }

  const handleSponsorClick = () => {
    window.open(siteConfig.boosty.donateUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleSponsorClick}
        className="group relative overflow-hidden rounded-2xl bg-cyberpunk-base/80 backdrop-blur-xl border border-cyberpunk-yellow/20 px-6 py-3 shadow-2xl hover:shadow-cyberpunk-yellow/20 transition-all duration-300 hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(255, 205, 0, 0.1) 100%)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-yellow/0 to-cyberpunk-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-center gap-2">
          <Heart className="w-5 h-5 text-cyberpunk-yellow fill-current animate-pulse" />
          <span className="text-cyberpunk-white font-medium">
            {siteConfig.boosty.texts.sponsor}
          </span>
          <ExternalLink className="w-4 h-4 text-cyberpunk-yellow opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
      </button>
    </div>
  )
} 