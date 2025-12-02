import { motion } from 'framer-motion';

interface RingData {
  radius: number;
  segments: string[];
  rotationDuration: number;
  direction: 1 | -1;
  color: string;
}

const rings: RingData[] = [
  {
    radius: 260,
    segments: ["REAL-TIME DATA PIPELINE", "API", "SENSORS"],
    rotationDuration: 120,
    direction: 1,
    color: "rgba(249, 115, 22, 0.6)"
  },
  {
    radius: 340,
    segments: ["UNIFIED INTELLIGENCE", "THREAT", "INTEL", "ASSET", "RISK"],
    rotationDuration: 150,
    direction: -1,
    color: "rgba(249, 115, 22, 0.4)"
  },
  {
    radius: 420,
    segments: ["SITUATIONAL AWARENESS", "VIDEO", "SIGNAL", "FUSION", "ANALYTICS"],
    rotationDuration: 180,
    direction: 1,
    color: "rgba(249, 115, 22, 0.3)"
  },
  {
    radius: 500,
    segments: ["DEFENCE", "METRO CITIES", "INTELLIGENCE AGENCIES", "CRITICAL INFRASTRUCTURE"],
    rotationDuration: 200,
    direction: -1,
    color: "rgba(249, 115, 22, 0.2)"
  },
  {
    radius: 580,
    segments: ["AI AGENTS", "AUTONOMOUS RESPONSE", "EDGE COMPUTING", "MACHINE LEARNING"],
    rotationDuration: 240,
    direction: 1,
    color: "rgba(249, 115, 22, 0.15)"
  },
];

function Ring({ ring }: { ring: RingData }) {
  const segmentAngle = 360 / ring.segments.length;
  
  return (
    <motion.g
      animate={{ rotate: ring.direction * 360 }}
      transition={{
        duration: ring.rotationDuration,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ transformOrigin: 'center' }}
    >
      {/* Ring Circle */}
      <circle
        cx="50%"
        cy="50%"
        r={ring.radius}
        fill="none"
        stroke={ring.color}
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      
      {/* Segment Labels */}
      {ring.segments.map((segment, i) => {
        const angle = (i * segmentAngle - 90) * (Math.PI / 180); // Start from top
        const x = 700 + ring.radius * Math.cos(angle);
        const y = 700 + ring.radius * Math.sin(angle);
        return (
          <g key={i}>
            {/* Small dot marker */}
            <circle
              cx={x}
              cy={y}
              r="4"
              fill={ring.color}
            />
            {/* Text label */}
            <text
              x={x}
              y={y - 15}
              fill="rgba(255,255,255,0.8)"
              fontSize="11"
              fontFamily="Lexend, sans-serif"
              fontWeight="600"
              textAnchor="middle"
              style={{
                transform: `rotate(${-ring.direction * 360}deg)`,
                transformOrigin: `${x}px ${y}px`,
                letterSpacing: '0.05em'
              }}
            >
              {segment}
            </text>
          </g>
        );
      })}
    </motion.g>
  );
}

export function ConcentricRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <svg 
        viewBox="0 0 1400 1400" 
        className="w-full h-full max-w-[1400px] max-h-[1400px]"
        style={{ transform: 'translateY(30%)' }} // Push down to show upper arcs
      >
        <defs>
          {/* Radial gradient for center glow */}
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(249, 115, 22, 0.3)" />
            <stop offset="100%" stopColor="rgba(249, 115, 22, 0)" />
          </radialGradient>
        </defs>
        
        {/* Background glow */}
        <circle cx="700" cy="700" r="200" fill="url(#centerGlow)" />
        
        {/* Rings */}
        {rings.map((ring, index) => (
          <Ring key={index} ring={ring} />
        ))}
        
        {/* Center circle (placeholder for globe) */}
        <circle
          cx="700"
          cy="700"
          r="160"
          fill="rgba(249, 115, 22, 0.05)"
          stroke="rgba(249, 115, 22, 0.5)"
          strokeWidth="2"
        />
        
        {/* Center label */}
        <text
          x="700"
          y="720"
          fill="white"
          fontSize="18"
          fontFamily="Lexend, sans-serif"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="0.2em"
        >
          FALCONEDGE
        </text>
      </svg>
    </div>
  );
}
