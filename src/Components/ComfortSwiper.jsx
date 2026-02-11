import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    title: 'РЕЖИМ "ТУРБО"',
    description:
      'В режиме охлаждения или обогрева нажмите кнопку "Turbo" на пульте — кондиционер включит усиленный поток воздуха, чтобы как можно быстрее достичь нужной температуры в помещении.',
    levels: [
      "Quiet",
      "Low",
      "Low-medium",
      "Medium",
      "Medium-high",
      "High",
      "Turbo",
    ],
    activeIndex: 6,
  },
  {
    id: 2,
    title: "ТИХИЙ РЕЖИМ",
    description:
      "В тихом режиме кондиционер работает на минимальной мощности вентилятора, обеспечивая комфортный сон без лишнего шума.",
    levels: [
      "Quiet",
      "Low",
      "Low-medium",
      "Medium",
      "Medium-high",
      "High",
      "Turbo",
    ],
    activeIndex: 0,
  },
  {
    id: 3,
    title: "СРЕДНИЙ РЕЖИМ",
    description:
      "Оптимальный баланс между производительностью и уровнем шума для повседневного использования.",
    levels: [
      "Quiet",
      "Low",
      "Low-medium",
      "Medium",
      "Medium-high",
      "High",
      "Turbo",
    ],
    activeIndex: 3,
  },
];

const colors = [
  "#B8E6F0",
  "#8DD8E8",
  "#5CC8D8",
  "#3BB8D0",
  "#2AA8CC",
  "#1E96C8",
  "#0080C0",
];

function SpeedGauge({ levels, activeIndex }) {
  const totalSegments = levels.length;
  const startAngle = -210;
  const endAngle = 30;
  const totalSweep = endAngle - startAngle;
  const segmentSweep = totalSweep / totalSegments;
  const gap = 3;
  const outerR = 110;
  const innerR = 68;
  const cx = 140;
  const cy = 140;

  function describeArc(startDeg, endDeg, outerRadius, innerRadius) {
    const s1 = ((startDeg + gap / 2) * Math.PI) / 180;
    const e1 = ((endDeg - gap / 2) * Math.PI) / 180;
    const x1 = cx + outerRadius * Math.cos(s1);
    const y1 = cy + outerRadius * Math.sin(s1);
    const x2 = cx + outerRadius * Math.cos(e1);
    const y2 = cy + outerRadius * Math.sin(e1);
    const x3 = cx + innerRadius * Math.cos(e1);
    const y3 = cy + innerRadius * Math.sin(e1);
    const x4 = cx + innerRadius * Math.cos(s1);
    const y4 = cy + innerRadius * Math.sin(s1);
    const largeArc = endDeg - startDeg - gap > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`;
  }

  function labelPosition(index) {
    const midAngle = startAngle + segmentSweep * index + segmentSweep / 2;
    const labelR = outerR + 22;
    const rad = (midAngle * Math.PI) / 180;
    return {
      x: cx + labelR * Math.cos(rad),
      y: cy + labelR * Math.sin(rad),
      angle: midAngle,
    };
  }

  return (
    <svg viewBox="0 0 280 200" style={{ width: "100%", maxWidth: 320 }}>
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7DD4E8" />
          <stop offset="100%" stopColor="#3BB8D0" />
        </radialGradient>
      </defs>

      {levels.map((_, i) => {
        const sAngle = startAngle + segmentSweep * i;
        const eAngle = sAngle + segmentSweep;
        const isActive = i <= activeIndex;
        return (
          <path
            key={i}
            d={describeArc(sAngle, eAngle, outerR, innerR)}
            fill={isActive ? colors[i] : "#E8EEF0"}
            style={{
              transition: "fill 0.5s ease",
              filter: i === activeIndex ? "url(#glow)" : "none",
            }}
          />
        );
      })}

      <circle cx={cx} cy={cy} r={48} fill="url(#centerGrad)" opacity="0.85" />
      <circle cx={cx} cy={cy} r={38} fill="white" opacity="0.25" />

      {levels.map((label, i) => {
        const pos = labelPosition(i);
        let rotation = pos.angle + 90;
        if (rotation > 90 && rotation < 270) rotation += 180;
        return (
          <text
            key={i}
            x={pos.x}
            y={pos.y}
            textAnchor="middle"
            dominantBaseline="middle"
            transform={`rotate(${rotation}, ${pos.x}, ${pos.y})`}
            style={{
              fontSize: "7.5px",
              fontFamily: "'DM Sans', sans-serif",
              fill: i <= activeIndex ? "#2A6F80" : "#A0B0B8",
              fontWeight: i === activeIndex ? 700 : 500,
              transition: "fill 0.3s, font-weight 0.3s",
            }}
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}

export default function AcFeatureCard() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStart = useRef(null);

  const goTo = (index) => {
    if (isAnimating || index === current) return;
    setDirection(index > current ? 1 : -1);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 400);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  const [paused, setPaused] = useState(false);
  const autoplayRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => {
        const nextIdx = (prev + 1) % slides.length;
        setDirection(1);
        return nextIdx;
      });
    }, 3500);
    return () => clearInterval(autoplayRef.current);
  }, [paused, current]);

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
    touchStart.current = null;
  };

  const slide = slides[current];

  return (
    <div
      style={{
        width: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 shadow-2xl space-y-6",
        fontFamily: "'DM Sans', sans-serif",
        padding: 20,
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          width: "100%",
          maxWidth: 400,
          background: "#fff",
          borderRadius: 24,
          boxShadow:
            "0 20px 60px rgba(0,80,100,0.12), 0 4px 16px rgba(0,80,100,0.06)",
          overflow: "hidden",
          position: "relative",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Gauge Area */}
        <div
          style={{
            background: "linear-gradient(180deg, #F6FBFC 0%, #FFFFFF 100%)",
            padding: "32px 24px 16px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            key={slide.id}
            style={{
              animation: isAnimating
                ? `slideOut${direction > 0 ? "Left" : "Right"} 0.4s ease`
                : `slideIn${direction > 0 ? "Right" : "Left"} 0.4s ease`,
            }}
          >
            <SpeedGauge levels={slide.levels} activeIndex={slide.activeIndex} />
          </div>
        </div>

        {/* Content Area */}
        <div style={{ padding: "8px 28px 28px" }}>
          <h2
            key={`title-${slide.id}`}
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#1A3A44",
              margin: "0 0 10px",
              letterSpacing: "0.5px",
              animation: "fadeUp 0.4s ease",
            }}
          >
            {slide.title}
          </h2>
          <p
            key={`desc-${slide.id}`}
            style={{
              fontSize: 13.5,
              lineHeight: 1.65,
              color: "#5A7A84",
              margin: 0,
              animation: "fadeUp 0.5s ease",
            }}
          >
            {slide.description}
          </p>
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            paddingBottom: 24,
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: current === i ? 24 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                cursor: "pointer",
                background:
                  current === i
                    ? "linear-gradient(90deg, #3BB8D0, #0080C0)"
                    : "#D0DEE2",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Nav Arrows */}
        <button
          onClick={prev}
          style={{
            position: "absolute",
            left: 8,
            top: "38%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.85)",
            border: "none",
            borderRadius: "50%",
            width: 32,
            height: 32,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            fontSize: 16,
            color: "#3BB8D0",
            opacity: 0.7,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 1)}
          onMouseLeave={(e) => (e.target.style.opacity = 0.7)}
        >
          ‹
        </button>
        <button
          onClick={next}
          style={{
            position: "absolute",
            right: 8,
            top: "38%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.85)",
            border: "none",
            borderRadius: "50%",
            width: 32,
            height: 32,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            fontSize: 16,
            color: "#3BB8D0",
            opacity: 0.7,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 1)}
          onMouseLeave={(e) => (e.target.style.opacity = 0.7)}
        >
          ›
        </button>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideOutLeft {
          to { opacity: 0; transform: translateX(-40px); }
        }
        @keyframes slideOutRight {
          to { opacity: 0; transform: translateX(40px); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
