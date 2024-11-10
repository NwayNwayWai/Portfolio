import { Box, Flex } from "@radix-ui/themes";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutMePage = () => {
  return (
    <Flex className="h-full p-3">
      <Box className="w-1/2">
        <img
          src="/nway.JPG"
          alt="Nway Nway Wai"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </Box>
      <Box className="space-y-3 w-1/2 p-8">
        <div className="bg-[#0788FF] bg-opacity-20 text-white w-fit p-2 rounded-md">
          ABOUT US
        </div>
        <div className="text-4xl text-white font-semibold">
          I AM AVAILABLE FOR FRONDEND WEB PROJECT
        </div>
        <div className="text-white w-fit p-2 rounded-md">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from de
          Finibus Bonorum et Malorum by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </div>
        <Flex className="space-x-4 ">
          <Flex
            className="w-[140px] h-[120px] p-[20px] flex-col rounded-lg bg-white bg-opacity-5 text-white"
            justify={"center"}
          >
            <div className="text-white text-3xl font-semibold">280+</div>
            <div className="text-white text-lg">Google Review</div>
          </Flex>

          <Flex
            className="w-[140px] h-[120px]  p-[20px] flex-col rounded-lg bg-white bg-opacity-5 text-white"
            justify={"center"}
          >
            <div className="text-white text-3xl font-semibold">5+</div>
            <div className="text-white text-lg">Years Experience</div>
          </Flex>

          <Flex
            className="w-[140px] h-[120px]  p-[20px] flex-col rounded-lg bg-white bg-opacity-5 text-white"
            justify={"center"}
          >
            <div className="text-white text-3xl font-semibold">15+</div>
            <div className="text-white text-lg">Awward Winning</div>
          </Flex>
        </Flex>
        <Box className="pt-4">
          <Button className="bg-blue-500 text-white rounded-3xl px-5 flex items-center space-x-2 ">
            <span>GET IN TOUCH</span>
            <ArrowRight />
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default AboutMePage;
