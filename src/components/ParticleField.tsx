import { useMemo } from "react";

const ParticleField = () => {
  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: `${Math.random() * 15}s`,
      duration: `${Math.random() * 10 + 12}s`,
      opacity: Math.random() * 0.4 + 0.1,
    })), []
  );

  return (
    <div className="floating-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `particle-float ${p.duration} linear ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
