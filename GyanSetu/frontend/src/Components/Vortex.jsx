import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";
import "./Vortex.css";
import { useNavigate } from "react-router-dom";

export const Vortex = (props) => {
  const navigate = useNavigate();

  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const particleCount = props.particleCount || 50; // Reduced
  const particlePropCount = 16;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 200;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 7;
  const rangeRadius = props.rangeRadius || 0.1;
  const baseHue = props.baseHue || 220;
  const rangeHue = 90;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || "#000000";

  let tick = 0;
  const noise3D = createNoise3D();
  let particleProps = new Float32Array(particlePropsLength);
  let center = [0, 0];

  const rand = (n) => n * Math.random();
  const randRange = (n) => n - rand(2 * n);
  const fadeInOut = (t, m) => {
    let hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;

  const resize = (canvas, ctx) => {
    const { innerWidth, innerHeight } = window;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    center = [innerWidth / 2, innerHeight / 2];
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const setup = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (ctx) {
        resize(canvas, ctx);
        initParticles();
        if (isHovered) draw(canvas, ctx);
      }
    }
  };

  const initParticles = () => {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let x, y, vx, vy, life, ttl, speed, radius, hue;
    x = rand(canvas.width);
    y = center[1] + randRange(rangeY);
    vx = 0;
    vy = 0;
    life = 0;
    ttl = baseTTL + rand(rangeTTL);
    speed = baseSpeed + rand(rangeSpeed);
    radius = baseRadius + rand(rangeRadius);
    hue = baseHue + rand(rangeHue);
    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  let frameSkip = 0;
  const draw = (canvas, ctx) => {
    tick++;
    frameSkip++;
  
    if (frameSkip % 2 === 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Completely clear
      drawParticles(ctx);
    }
  
    if (isHovered) {
      animationRef.current = window.requestAnimationFrame(() => draw(canvas, ctx));
    }
  };
  

  const drawParticles = (ctx) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i, ctx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let x = particleProps[i],
      y = particleProps[i + 1],
      vx = particleProps[i + 2],
      vy = particleProps[i + 3],
      life = particleProps[i + 4],
      ttl = particleProps[i + 5],
      speed = particleProps[i + 6],
      radius = particleProps[i + 7],
      hue = particleProps[i + 8];

    let n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * Math.PI * 1;
    vx = lerp(vx, Math.cos(n), 0.5);
    vy = lerp(vy, Math.sin(n), 0.5);
    let x2 = x + vx * speed;
    let y2 = y + vy * speed;

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);
    life++;
    particleProps.set([x2, y2, vx, vy, life], i);

    if (x > canvas.width || x < 0 || y > canvas.height || y < 0 || life > ttl) {
      initParticle(i);
    }
  };

  const drawParticle = (x, y, x2, y2, life, ttl, radius, hue, ctx) => {
    ctx.save();
    ctx.shadowBlur = 45; // Increased for soft glow
    ctx.shadowColor = `hsla(${hue}, 100%, 60%, 1.8)`;
    ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.arc(x2, y2, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  };
  

  useEffect(() => {
    setup();
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered]);

  return (
    <div
      className="vortex-container"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="vortex-animation">
        <canvas ref={canvasRef}></canvas>
      </motion.div>
      <div className="vortex-content">{props.children}</div>
      <button className="shimmer-btn" onClick={() => navigate("/login")}>Explore GyanSetu!</button>
    </div>
  );
};
