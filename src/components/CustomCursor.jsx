import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        if (cursorDotRef.current) {
          cursorDotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });
    };

    const handleMouseDown = () => {
      if (cursorRef.current) cursorRef.current.style.scale = "0.8";
    };

    const handleMouseUp = () => {
      if (cursorRef.current) cursorRef.current.style.scale = "1";
    };

    // Detect interactive elements to trigger "magnetic" or "grow" effect
    const addHoverEffect = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('scale-[2.5]', 'bg-sky-500/20', 'border-sky-400');
        cursorDotRef.current.classList.add('scale-0');
      }
    };

    const removeHoverEffect = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('scale-[2.5]', 'bg-sky-500/20', 'border-sky-400');
        cursorDotRef.current.classList.remove('scale-0');
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Attach listeners to all buttons and links
    const interactives = document.querySelectorAll('button, a, .cursor-pointer');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 border-2 border-slate-500 rounded-full pointer-events-none z-[9999] -ml-4 -mt-4 transition-transform duration-300 ease-out will-change-transform"
      ></div>
      
      {/* Inner Dot */}
      <div 
        ref={cursorDotRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-sky-500 rounded-full pointer-events-none z-[9999] -ml-[3px] -mt-[3px] transition-transform duration-100 ease-out will-change-transform"
      ></div>
    </>
  );
}