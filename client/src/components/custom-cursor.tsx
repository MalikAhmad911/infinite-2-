import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const visible = useRef(false);
  const hovering = useRef(false);
  const clicking = useRef(false);
  const rafId = useRef(0);

  const render = useCallback(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.14;
    ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.14;

    const dotSize = 6;
    const ringSize = hovering.current ? 56 : 36;
    const ringOffset = ringSize / 2;

    dot.style.transform = `translate3d(${pos.current.x - dotSize / 2}px, ${pos.current.y - dotSize / 2}px, 0) scale(${clicking.current ? 0.6 : (hovering.current ? 0 : 1)})`;
    dot.style.opacity = visible.current ? "1" : "0";

    ring.style.transform = `translate3d(${ringPos.current.x - ringOffset}px, ${ringPos.current.y - ringOffset}px, 0) scale(${clicking.current ? 0.85 : 1})`;
    ring.style.opacity = visible.current ? "1" : "0";
    ring.style.width = `${ringSize}px`;
    ring.style.height = `${ringSize}px`;
    ring.style.borderColor = hovering.current ? "#3A5FBF" : "rgba(58,95,191,0.3)";
    ring.style.borderWidth = hovering.current ? "2px" : "1.5px";
    ring.style.backgroundColor = hovering.current ? "rgba(58,95,191,0.08)" : "transparent";

    rafId.current = requestAnimationFrame(render);
  }, []);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      visible.current = true;
      const target = e.target as HTMLElement;
      hovering.current = !!target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]");
    };
    const onLeave = () => { visible.current = false; };
    const onDown = () => { clicking.current = true; };
    const onUp = () => { clicking.current = false; };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafId.current);
    };
  }, [render]);

  if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{ willChange: "transform", transition: "width 0.2s, height 0.2s, border-color 0.2s, border-width 0.15s, background-color 0.2s", borderStyle: "solid" }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-brand-violet"
        style={{ willChange: "transform", transition: "transform 0.08s" }}
      />
    </>
  );
}
