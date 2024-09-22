import { useRef, useState, ReactNode } from 'react';

interface ScrollableComponentProps {
  children: ReactNode; // Definisikan tipe untuk props children
}

const ScrollableComponent: React.FC<ScrollableComponentProps> = ({ children }) => {
  const [showScrollbar, setShowScrollbar] = useState(false);
  const scrollRef = useRef<number | null>(null);

  const handleScroll = () => {
    setShowScrollbar(true);
    if (scrollRef.current) clearTimeout(scrollRef.current);
    scrollRef.current = window.setTimeout(() => {
      setShowScrollbar(false);
    }, 1000);
  };

  return (
    <div
      className={`scrollable-element ${showScrollbar ? 'show-scrollbar' : ''}`}
      onScroll={handleScroll}
      style={{ height: '100%', overflowY: 'auto' }} // Ubah di sini
    >
      {children}
    </div>
  );
};

export default ScrollableComponent;
