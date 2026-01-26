"use client";
import { useRef, useEffect, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(InertiaPlugin);

const throttle = (func, limit) => {
  let lastCall = 0;
  return (...args) => {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
};

const hexToRgb = (hex) => {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  return m
    ? {
        r: parseInt(m[1], 16),
        g: parseInt(m[2], 16),
        b: parseInt(m[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
};

const DotGrid = ({
  children,
  dotSize = 16,
  gap = 32,
  baseColor = "#5227FF",
  activeColor = "#FF5722",
  proximity = 150,
  speedTrigger = 100,
  shockRadius = 250,
  shockStrength = 5,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.5,
  className = "",
  style,
}) => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const circlePath = useMemo(() => {
    if (typeof window === "undefined") return null;
    const p = new Path2D();
    p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    return p;
  }, [dotSize]);

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));
    const cell = dotSize + gap;

    const startX = (width - (cols * cell - gap)) / 2 + dotSize / 2;
    const startY = (height - (rows * cell - gap)) / 2 + dotSize / 2;

    const dots = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          cx: startX + x * cell,
          cy: startY + y * cell,
          xOffset: 0,
          yOffset: 0,
          _inertiaApplied: false,
        });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    buildGrid();
    const ro = new ResizeObserver(buildGrid);
    wrapperRef.current && ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [buildGrid]);

  useEffect(() => {
    if (!circlePath) return;
    let raf;

    const draw = () => {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      const { x, y } = pointerRef.current;

      dotsRef.current.forEach((dot) => {
        const dx = dot.cx - x;
        const dy = dot.cy - y;
        const dist = Math.hypot(dx, dy);
        const t = Math.max(0, 1 - dist / proximity);

        const r = baseRgb.r + (activeRgb.r - baseRgb.r) * t;
        const g = baseRgb.g + (activeRgb.g - baseRgb.g) * t;
        const b = baseRgb.b + (activeRgb.b - baseRgb.b) * t;

        ctx.save();
        ctx.translate(dot.cx + dot.xOffset, dot.cy + dot.yOffset);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fill(circlePath);
        ctx.restore();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, [circlePath, baseRgb, activeRgb, proximity]);

  useEffect(() => {
    const move = throttle((e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      pointerRef.current.x = e.clientX - rect.left;
      pointerRef.current.y = e.clientY - rect.top;
    }, 30);

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className={`relative w-full h-full ${className}`} style={style}>
      <div ref={wrapperRef} className="absolute inset-0">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* 🔥 CONTENT USTIDA */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {children}
        </div>
      </div>
    </section>
  );
};

export default DotGrid;
