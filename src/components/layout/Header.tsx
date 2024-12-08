"use client";
import { Box, Flex } from "@radix-ui/themes";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const HeaderPage = () => {
  const [activeMenu, setActiveMenu] = useState("#home");
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: "HOME", path: "#home" },
    { label: "ABOUT ME", path: "#about-me" },
    { label: "PROJECT", path: "#project" },
    { label: "SERVICE", path: "#services" },
    { label: "CONTACT", path: "#contact" },
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
      rootMargin: "-50% 0px",  // Consider element in view when it's in the middle
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveMenu(`#${sectionId}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    menuItems.forEach(item => {
      const sectionId = item.path.replace('#', '');
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
      // const activeElement = menuRefs.current[activeIndex];
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
    <Flex
      className={cn(
        "fixed top-0 h-[80px] text-white items-center w-full pl-20 z-50 transition-all duration-300",
        isScrolled ? "bg-black" : "bg-transparent"
      )}
      justify={"between"}
    >
      <Box className="font-bold">NWAY NWAY WAI</Box>
      <Flex className="items-center relative">
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
      </Flex>
    </Flex>
  );
};

export default HeaderPage;
