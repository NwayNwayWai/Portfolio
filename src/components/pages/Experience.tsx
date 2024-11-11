import { Box, Flex } from "@radix-ui/themes";
import React from "react";
import { Button } from "../ui/button";

const ExperiencePage = () => {
  return (
    <Box className="mt-10 h-full ml-20 space-y-3">
      <Box className="bg-[#0788FF] bg-opacity-20 text-white w-fit p-2 rounded-md h-fit ">
        EXPERIENCE
      </Box>
      <Box className="text-4xl font-semibold text-white w-fit rounded-md h-fit">
        MY WORK <span className="text-blue-500">EXPERIENCE </span>
      </Box>
      <Box className="w-full h-[250px] pr-10 pt-8">
        <Flex className="w-full h-[240px] p-5 bg-[#0788FF] bg-opacity-20 rounded-lg space-x-3 ">
          <Box className="bg-blue-500 h-[200px] w-1/2 space-y-3 p-4 rounded-lg">
            <div className="text-white text-2xl font-semibold">
              Front-end Developer
            </div>
            <div>
              <div className="text-gray-50 text-[13px]">WELAB | REMOTE</div>
              <div className="text-white text-[16px]">JAN 2019 - PRESENT</div>
            </div>
            <Button className="rounded-3xl bg-white text-black text-xs font-semibold h-8">
              {"FULL TIME "}
            </Button>
          </Box>
          <div className="pl-3">
            <div className="text-3xl font-bold text-white">About Company</div>
            <div className="text-base text-white pt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation.
            </div>
          </div>
        </Flex>
      </Box>
    </Box>
  );
};

export default ExperiencePage;
