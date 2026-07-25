import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Paksa layar scroll ke posisi paling atas (x: 0, y: 0) saat rute/pathname berubah
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}