import { Box, Flex } from "@radix-ui/themes";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";

const ServicesPage = () => {
  return (
    <Flex className="h-full  flex-col ml-20 mt-10">
      <Box className="bg-[#0788FF] bg-opacity-20 text-white w-fit p-2 rounded-md h-fit ">
        SERVICES
      </Box>
      <Box className="text-4xl font-semibold text-white w-fit p-2 rounded-md h-fit">
        DESIGN <span className="text-blue-500">SERVICES </span>I AM PROVIDING
      </Box>
      <Flex className="space-x-3">
        <div className="relative ">
          <div className="pt-6 ">
            <div className="w-[300px] h-[400px] rounded-lg overflow-hidden">
              <img
                src="/nway.JPG"
                alt="Website Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Box className="absolute bottom-0 p-3  text-white ">
            <div className="font-bold text-lg">Website Design</div>
            <div className="text-sm border-b border-gray-400 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </div>

            <div className="flex  space-x-1  w-[80px] h-[80px] text-yellow-400">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </Box>
        </div>
        <div className="relative ">
          <div className="pt-6 ">
            <div className="w-[300px] h-[400px] rounded-lg overflow-hidden">
              <img
                src="/nway.JPG"
                alt="Website Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Box className="absolute bottom-0 p-3  text-white ">
            <div className="font-bold text-lg">Website Design</div>
            <div className="text-sm border-b border-gray-400 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </div>

            <div className="flex  space-x-1  w-[80px] h-[80px] text-yellow-400">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </Box>
        </div>
        <div className="relative ">
          <div className="pt-6 ">
            <div className="w-[300px] h-[400px] rounded-lg overflow-hidden">
              <img
                src="/nway.JPG"
                alt="Website Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Box className="absolute bottom-0 p-3  text-white ">
            <div className="font-bold text-lg">Website Design</div>
            <div className="text-sm border-b border-gray-400 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </div>

            <div className="flex  space-x-1  w-[80px] h-[80px] text-yellow-400">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </Box>
        </div>
        <div className="relative ">
          <div className="pt-6 ">
            <div className="w-[300px] h-[400px] rounded-lg overflow-hidden">
              <img
                src="/nway.JPG"
                alt="Website Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Box className="absolute bottom-0 p-3  text-white ">
            <div className="font-bold text-lg">Website Design</div>
            <div className="text-sm border-b border-gray-400 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </div>

            <div className="flex  space-x-1  w-[80px] h-[80px] text-yellow-400">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </Box>
        </div>
      </Flex>
    </Flex>
  );
};

export default ServicesPage;
