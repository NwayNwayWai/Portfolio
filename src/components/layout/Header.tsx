import { Box, Flex } from "@radix-ui/themes";
import React from "react";
import { Button } from "../ui/button";

const HeaderPage = () => {
  return (
    <Flex
      className=" bg-black h-[80px] text-white items-center px-10 py-6 w-full pl-20"
      justify={"between"}
    >
      <Box className="font-bold">NWAY NWAY WAI</Box>
      <Flex className="space-x-10 items-center">
        <Box>HOME</Box>
        <Box>ABOUT ME</Box>
        <Box>PROJECT</Box>
        <Box>SERVICE</Box>
        <Box>CONTACT</Box>
        <Button className="rounded-3xl bg-blue-500 border border-white">
          LET'S TALK
        </Button>
      </Flex>
    </Flex>
  );
};

export default HeaderPage;
