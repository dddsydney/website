import React, { StatelessComponent } from 'react'

interface ResponsiveVideoArg {
  src: string
  title?: string
}

const ResponsiveVideo: StatelessComponent<ResponsiveVideoArg> = ({ src, title }) => {
  if (!src) {
    return null
  }
  return (
    <div className="responsive-video">
      <iframe
        title={title || 'YouTube Video Player'}
        width="560"
        height="315"
        src={src}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )
}

export default ResponsiveVideo
