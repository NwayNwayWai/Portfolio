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
    <div className="relative min-h-screen bg-gradient-to-r from-[#062139] to-[#040F1A]">
      <HeaderPage />
      <Flex className="min-h-screen font-serif pt-[80px]">
        <Box className={cn("w-full overflow-auto", className)}>{children}</Box>
      </Flex>
    </div>
  );
};

export default PageLayout;
