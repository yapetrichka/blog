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
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleSponsorClick}
        className="group bg-white border border-gray-200 rounded-lg px-6 py-3 shadow-sm hover:shadow-md transition-all duration-200 hover:border-gray-300"
      >
        <div className="flex items-center justify-center gap-2">
          <Heart className="w-3 h-3 text-gray-600 group-hover:text-black transition-colors duration-200" style={{ fill: 'none', stroke: 'currentColor' }} />
          <span className="text-gray-700 font-medium group-hover:text-black transition-colors duration-200">
            {siteConfig.boosty.texts.sponsor}
          </span>
          <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
        </div>
      </button>
    </div>
  )
}