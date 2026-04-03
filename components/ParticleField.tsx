"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 4500;
const SPREAD = 28;
const DEPTH = 12;
const MOUSE_RADIUS = 3.2;
const MOUSE_STRENGTH = 0.9;
const BASE_SPEED = 0.006;

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    renderer.setClearColor(0x000000, 0);

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
    camera.position.z = 14;

    // --- Particles ---
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = new Float32Array(PARTICLE_COUNT * 3); // original drift velocities
    const originalPositions = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const alphas = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * SPREAD;
      const y = (Math.random() - 0.5) * SPREAD * 0.6;
      const z = (Math.random() - 0.5) * DEPTH;

      positions[i * 3]     = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3]     = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Gentle random drift per particle
      velocities[i * 3]     = (Math.random() - 0.5) * BASE_SPEED;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * BASE_SPEED;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * BASE_SPEED * 0.3;

      sizes[i] = Math.random() * 1.8 + 0.6;
      alphas[i] = Math.random() * 0.5 + 0.15;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("aAlpha", new THREE.BufferAttribute(alphas, 1));

    // Custom shader material for soft glowing dots
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute float aSize;
        attribute float aAlpha;
        varying float vAlpha;

        void main() {
          vAlpha = aAlpha;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (280.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vAlpha;

        void main() {
          // Soft circle
          vec2 uv = gl_PointCoord - vec2(0.5);
          float dist = length(uv);
          if (dist > 0.5) discard;
          float alpha = (1.0 - dist * 2.0) * vAlpha;
          gl_FragColor = vec4(0.431, 0.906, 0.718, alpha); // #6EE7B7
        }
      `,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // --- Mouse tracking ---
    const mouse = new THREE.Vector2(9999, 9999);
    const mouse3D = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    const onMouseLeave = () => { mouse.set(9999, 9999); };

    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    // --- Resize ---
    const onResize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    // --- Animation loop ---
    let frameId: number;
    const posAttr = geometry.attributes.position as THREE.BufferAttribute;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Resolve mouse to 3D world position on z=0 plane
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(plane, mouse3D);

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const ix = i * 3, iy = ix + 1, iz = ix + 2;

        // Drift
        positions[ix]     += velocities[ix];
        positions[iy]     += velocities[iy];
        positions[iz]     += velocities[iz];

        // Wrap bounds
        if (positions[ix] >  SPREAD / 2) positions[ix] = -SPREAD / 2;
        if (positions[ix] < -SPREAD / 2) positions[ix] =  SPREAD / 2;
        if (positions[iy] >  SPREAD * 0.3) positions[iy] = -SPREAD * 0.3;
        if (positions[iy] < -SPREAD * 0.3) positions[iy] =  SPREAD * 0.3;

        // Mouse repulsion
        if (mouse3D.x !== 9999) {
          const dx = positions[ix] - mouse3D.x;
          const dy = positions[iy] - mouse3D.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < MOUSE_RADIUS * MOUSE_RADIUS && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH;
            positions[ix] += (dx / dist) * force;
            positions[iy] += (dy / dist) * force;
          }
        }
      }

      posAttr.needsUpdate = true;

      // Subtle camera drift based on mouse
      camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 0.8 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
}
