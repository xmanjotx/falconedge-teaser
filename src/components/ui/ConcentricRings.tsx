import { motion } from 'framer-motion';

interface RingData {
  radius: number;
  segments: string[];
  rotationDuration: number;
  direction: 1 | -1;
  opacity: number;
}

// More muted amber/gold color scheme
const accentColor = "217, 119, 6"; // amber-600

const rings: RingData[] = [
  {
    radius: 240,
    segments: ["DATA PIPELINE", "API", "SENSORS"],
    rotationDuration: 180,
    direction: 1,
    opacity: 0.35
  },
  {
    radius: 320,
    segments: ["THREAT DETECTION", "ASSET TRACKING", "RISK ANALYSIS"],
    rotationDuration: 220,
    direction: -1,
    opacity: 0.25
  },
  {
    radius: 400,
    segments: ["VIDEO ANALYTICS", "SIGNAL PROCESSING", "DATA FUSION"],
    rotationDuration: 260,
    direction: 1,
    opacity: 0.18
  },
  {
    radius: 480,
    segments: ["DEFENSE", "SMART CITIES", "CRITICAL INFRASTRUCTURE"],
    rotationDuration: 300,
    direction: -1,
    opacity: 0.12
  },
  {
    radius: 560,
    segments: ["AI AGENTS", "EDGE COMPUTING", "ML INFERENCE"],
    rotationDuration: 360,
    direction: 1,
    opacity: 0.08
  },
];

function Ring({ ring }: { ring: RingData }) {
  const segmentAngle = 360 / ring.segments.length;
  const ringColor = `rgba(${accentColor}, ${ring.opacity})`;
  const textColor = `rgba(161, 161, 170, ${Math.min(ring.opacity * 2.5, 0.7)})`; // zinc-400 with opacity

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
      {/* Ring Circle - subtle dashed line */}
      <circle
        cx="50%"
        cy="50%"
        r={ring.radius}
        fill="none"
        stroke={ringColor}
        strokeWidth="1"
        strokeDasharray="2 6"
      />

      {/* Segment Labels */}
      {ring.segments.map((segment, i) => {
        const angle = (i * segmentAngle - 90) * (Math.PI / 180);
        const x = 700 + ring.radius * Math.cos(angle);
        const y = 700 + ring.radius * Math.sin(angle);
        return (
          <g key={i}>
            {/* Small dot marker */}
            <circle
              cx={x}
              cy={y}
              r="2.5"
              fill={ringColor}
            />
            {/* Text label */}
            <text
              x={x}
              y={y - 12}
              fill={textColor}
              fontSize="9"
              fontFamily="Inter, system-ui, sans-serif"
              fontWeight="500"
              textAnchor="middle"
              style={{
                transform: `rotate(${-ring.direction * 360}deg)`,
                transformOrigin: `${x}px ${y}px`,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
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
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-80">
      <svg
        viewBox="0 0 1400 1400"
        className="w-full h-full max-w-[1400px] max-h-[1400px]"
        style={{ transform: 'translateY(25%)' }}
      >
        <defs>
          {/* Subtle radial gradient for center */}
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={`rgba(${accentColor}, 0.08)`} />
            <stop offset="70%" stopColor={`rgba(${accentColor}, 0.02)`} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Very subtle background glow */}
        <circle cx="700" cy="700" r="200" fill="url(#centerGlow)" />

        {/* Rings */}
        {rings.map((ring, index) => (
          <Ring key={index} ring={ring} />
        ))}

        {/* Inner ring - subtle border for globe area */}
        <circle
          cx="700"
          cy="700"
          r="150"
          fill={`rgba(${accentColor}, 0.02)`}
          stroke={`rgba(${accentColor}, 0.15)`}
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}
