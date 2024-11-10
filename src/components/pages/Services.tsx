import { Box, Flex } from "@radix-ui/themes";
import React from "react";

const ServicesPage = () => {
  return (
    <Flex className="h-full p-3 flex-col ml-20">
      <Box className="bg-[#0788FF] bg-opacity-20 text-white w-fit p-2 rounded-md h-fit ">
        MY WORK
      </Box>
      <Box className="text-4xl font-semibold text-white w-fit p-2 rounded-md h-fit">
        DESIGN SERVICES I AM PROVIDING
      </Box>
      <Flex className="space-x-3">
        <div className="pt-6">
          <div className="w-[300px] h-[400px] bg-white rounded-lg flex flex-col">
            <div className="w-full p-3 h-[320px] rounded-lg">
              <img
                src="/nway.JPG"
                alt="Website Design"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="flex justify-between items-center px-3 py-2">
              <div>
                <div className="text-lg font-semibold">Website Design</div>
                <div className="text-sm text-gray-500">
                  Web Design, App Design
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <div className="w-[300px] h-[400px] bg-white rounded-lg flex flex-col">
            <div className="w-full p-3 h-[320px] rounded-lg">
              <img
                src="/nway.JPG"
                alt="Website Design"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="flex justify-between items-center px-3 py-2">
              <div>
                <div className="text-lg font-semibold">Website Design</div>
                <div className="text-sm text-gray-500">
                  Web Design, App Design
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <div className="w-[300px] h-[400px] bg-white rounded-lg flex flex-col">
            <div className="w-full p-3 h-[320px] rounded-lg">
              <img
                src="/nway.JPG"
                alt="Website Design"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="flex justify-between items-center px-3 py-2">
              <div>
                <div className="text-lg font-semibold">Website Design</div>
                <div className="text-sm text-gray-500">
                  Web Design, App Design
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <div className="w-[300px] h-[400px] bg-white rounded-lg flex flex-col">
            <div className="w-full p-3 h-[320px] rounded-lg">
              <img
                src="/nway.JPG"
                alt="Website Design"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="flex justify-between items-center px-3 py-2">
              <div>
                <div className="text-lg font-semibold">Website Design</div>
                <div className="text-sm text-gray-500">
                  Web Design, App Design
                </div>
              </div>
            </div>
          </div>
        </div>
      </Flex>
    </Flex>
  );
};

export default ServicesPage;
