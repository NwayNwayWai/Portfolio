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
    <div className="relative overflow-hidden h-screen bg-[#0c0f2e]">
      <HeaderPage />
      <Flex className="h-full overflow-hidden bg-linear-gradient(90deg, #07233b 1.67%, #041d34 39.95%, #04192d 58.24%, #040e18 80.28%, #050c16 101.48%)">
        <Box className={cn("flex-1  overflow-auto", className)}>{children}</Box>
      </Flex>
    </div>
  );
};

export default PageLayout;
