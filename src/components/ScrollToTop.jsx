import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Ye hook pata lagata hai ki hum kaunse page par hain
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi pathname (URL) badlega, ye window ko upar 0,0 par bhej dega
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ye screen par kuch dikhata nahi, bas background mein kaam karta hai
};

export default ScrollToTop;