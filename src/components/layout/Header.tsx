"use client";
import { Box, Flex } from "@radix-ui/themes";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const HeaderPage = () => {
  const [activeMenu, setActiveMenu] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: "Home", path: "#home" },
    { label: "About", path: "#about-me" },
    { label: "Projects", path: "#project" },
    { label: "Services", path: "#services" },
    { label: "Contact", path: "#contact" },
  ];

  // Handle scroll events and section visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Create intersection observer
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px", // Consider element in view when it's in the middle
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveMenu(`#${sectionId}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    menuItems.forEach((item) => {
      const sectionId = item.path.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [menuItems]);

  const updateIndicatorPosition = useCallback(() => {
    const activeIndex = menuItems.findIndex((item) => item.path === activeMenu);
    if (activeIndex >= 0 && menuRefs.current[activeIndex]) {
      setIndicatorPosition(activeIndex * 120); // 120px is the width of each menu item
    }
  }, [activeMenu]);

  // Update indicator position when active menu changes
  useEffect(() => {
    updateIndicatorPosition();
  }, [activeMenu, updateIndicatorPosition]);

  // Handle page navigation and update active menu
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || "#home";
      setActiveMenu(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleMenuClick = (path: string) => {
    setActiveMenu(path);
    window.location.hash = path.substring(1);
  };

  return (
    <>
      {/* Web Header */}
      <div
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 hidden md:block",
          isScrolled ? "bg-black" : "bg-transparent"
        )}
      >
        <Flex
          className="h-[80px] text-white items-center w-full pl-20"
          justify="between"
        >
          <Box className="font-bold">NWAY NWAY WAI</Box>
          <div className="flex items-center relative">
            {menuItems.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className="relative h-10 w-[120px] transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.path);
                }}
              >
                <Flex
                  ref={(el) => {
                    menuRefs.current[index] = el;
                  }}
                  justify="center"
                  align="center"
                  className={cn(
                    "h-full cursor-pointer transition-all duration-300",
                    activeMenu === item.path
                      ? "text-blue-500 font-bold scale-105"
                      : "hover:text-blue-400 hover:scale-105"
                  )}
                >
                  {item.label}
                </Flex>
              </Link>
            ))}

            {/* Indicator box with smooth animation */}
            <div
              className="absolute h-[3px] bottom-0 bg-blue-500 transition-all duration-500 ease-in-out"
              style={{
                left: `${indicatorPosition}px`,
                width: "120px",
              }}
            />

            <Link href={"#contact"}>
              <Button className="rounded-3xl bg-blue-500 border border-white ml-4">
                {`LET'S TALK`}
              </Button>
            </Link>
          </div>
        </Flex>
      </div>

      {/* Mobile Bottom Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10 md:hidden z-50">
        <nav className="flex justify-around items-center h-16 w-full max-w-md mx-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => handleMenuClick(item.path)}
              className="flex flex-col items-center justify-center py-1 px-2 w-full"
            >
              {/* Icons for each menu item */}
              <div
                className={cn(
                  "transition-colors duration-200",
                  activeMenu === item.path ? "text-blue-500" : "text-white/70"
                )}
              >
                {item.label === "Home" && (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                )}
                {item.label === "About" && (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                )}
                {item.label === "Projects" && (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                )}
                {item.label === "Services" && (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                )}
                {item.label === "Contact" && (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </div>
              <span
                className={cn(
                  "text-xs transition-colors duration-200 mt-1 whitespace-nowrap",
                  activeMenu === item.path
                    ? "text-blue-500 font-bold"
                    : "text-white/70"
                )}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default HeaderPage;
