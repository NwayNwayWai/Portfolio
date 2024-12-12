import React from "react";
import HeaderPage from "./Header";
import { Box, Flex } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<Props> = ({ children, className }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#062139] to-[#040F1A] overflow-x-hidden">
      <HeaderPage />
      <Flex className="min-h-screen font-serif pt-[80px] pb-[64px] md:pb-0 px-4 md:px-6 lg:px-8">
        <Box
          className={cn(
            "w-full max-w-7xl mx-auto",
            "overflow-y-auto overflow-x-hidden",
            className
          )}
        >
          {children}
        </Box>
      </Flex>
    </div>
  );
};

export default PageLayout;
