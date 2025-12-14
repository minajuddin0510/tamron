import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { useEffect, useRef } from "react";

// Define page order for scroll navigation
const pageOrder = ["/", "/about", "/services", "/blogs", "/contact"];

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only trigger on significant scroll at page boundaries
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;
      const isAtTop = scrollTop <= 50;

      if (isScrolling.current) return;

      const currentIndex = pageOrder.indexOf(location.pathname);
      
      // Scroll down at bottom of page
      if (e.deltaY > 30 && isAtBottom && currentIndex < pageOrder.length - 1) {
        isScrolling.current = true;
        const nextPage = pageOrder[currentIndex + 1];
        navigate(nextPage);
        
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
      
      // Scroll up at top of page
      if (e.deltaY < -30 && isAtTop && currentIndex > 0) {
        isScrolling.current = true;
        const prevPage = pageOrder[currentIndex - 1];
        navigate(prevPage);
        
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout.current);
    };
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 animate-fade-in">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}