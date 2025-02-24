"use client"

interface BasketballCourtProps {
  className?: string
  width?: number
  height?: number
}

export function BasketballCourt({ 
  className = "", 
  width = 420,
  height = 800
}: BasketballCourtProps) {
  const viewBox = `0 0 ${width * 1.2} ${height * 1.1}`
  const basketSize = { 
    width: width * 0.3,
    height: height * 0.15
  }
  
  const courtX = width * 0.1
  const courtY = height * 0.05

  return (
    <div className={`relative w-[420px] max-w-full h-auto mx-auto ${className}`}>
      <svg
        width={width * 1.2}
        height={height * 1.1}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect width={width * 1.2} height={height * 1.1} fill="#88825f" />
        <rect x={courtX} y={courtY} width={width} height={height} fill="#d8a972" />
        <rect x={courtX + width * 0.15} y={courtY} width={width * 0.7} height={height * 0.19} fill="#ab680f" />
        <rect x={courtX + width * 0.15} y={courtY + height * 0.81} width={width * 0.7} height={height * 0.19} fill="#ab680f" />
        <rect x={courtX + 2} y={courtY + 2} width={width - 4} height={height - 4} stroke="white" strokeWidth={4} fill="none" />
        <circle cx={courtX + width / 2} cy={courtY + height / 2} r={width * 0.18} stroke="white" strokeWidth={4} fill="#ab680f" />
        <line x1={courtX} y1={courtY + height / 2} x2={courtX + width} y2={courtY + height / 2} stroke="white" strokeWidth={4} />
        <path
          d={`M ${courtX + width * 0.1} ${courtY} 
              A ${width * 0.4} ${height * 0.23} 0 0 1 ${courtX + width * 0.15} ${courtY + height * 0.19}`}
          stroke="white"
          strokeWidth={4}
          fill="none"
        />
        <path
          d={`M ${courtX + width * 0.9} ${courtY} 
              A ${width * 0.4} ${height * 0.23} 0 0 0 ${courtX + width * 0.85} ${courtY + height * 0.19}`}
          stroke="white"
          strokeWidth={4}
          fill="none"
        />
        <path
          d={`M ${courtX + width * 0.1} ${courtY + height}
              A ${width * 0.4} ${height * 0.23} 0 0 0 ${courtX + width * 0.15} ${courtY + height * 0.81}`}
          stroke="white"
          strokeWidth={4}
          fill="none"
        />
        <path
          d={`M ${courtX + width * 0.9} ${courtY + height}
              A ${width * 0.4} ${height * 0.23} 0 0 1 ${courtX + width * 0.85} ${courtY + height * 0.81}`}
          stroke="white"
          strokeWidth={4}
          fill="none"
        />
        <circle
          cx={courtX + width / 2}
          cy={courtY + height * 0.19}
          r={width * 0.18}
          stroke="white"
          strokeWidth={4}
          strokeDasharray="10,10"
          fill="none"
        />
        <circle
          cx={courtX + width / 2}
          cy={courtY + height * 0.81}
          r={width * 0.18}
          stroke="white"
          strokeWidth={4}
          strokeDasharray="10,10"
          fill="none"
        />
        <line x1={courtX + width * 0.15} y1={courtY + height * 0.19} x2={courtX + width * 0.85} y2={courtY + height * 0.19} stroke="white" strokeWidth={4} />
        <line x1={courtX + width * 0.15} y1={courtY + height * 0.81} x2={courtX + width * 0.85} y2={courtY + height * 0.81} stroke="white" strokeWidth={4} />
        <image
          href="/image-removebg-preview.png"
          x={courtX + width * 0.35}
          y={courtY - basketSize.height * 0.2}
          width={basketSize.width}
          height={basketSize.height}
          preserveAspectRatio="xMidYMid meet"
          transform={`rotate(180, ${courtX + width * 0.5}, ${courtY + basketSize.height * 0.2})`}
        />
        <image
          href="/image-removebg-preview.png"
          x={courtX + width * 0.35}
          y={courtY + height - basketSize.height * 0.6}
          width={basketSize.width}
          height={basketSize.height}
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    </div>
  )
}

