import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const ProjectPage = () => {
  return (
    <Flex className="h-full p-6 flex-col ml-20 bg-[#0788FF] bg-opacity-20 w-full">
      <Box className="bg-[#0788FF] bg-opacity-20 text-white w-fit p-2 rounded-md h-fit">
        MY WORK
      </Box>
      <Box className="text-4xl font-semibold text-white w-fit p-2 rounded-md h-fit">
        RECENT PROJECT
      </Box>
      <Flex className="space-x-3" justify={"center"}>
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <div className="pt-6">
                <div className="w-[450px] h-[400px] bg-white rounded-lg flex flex-col">
                  <div className="w-full p-3 h-[320px] rounded-lg">
                    <img
                      src="/nway.JPG"
                      alt="Website Design"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex justify-between items-center px-3 py-2">
                    <div>
                      <div className="text-lg font-semibold">
                        Website Design
                      </div>
                      <div className="text-sm text-gray-500">
                        Web Design, App Design
                      </div>
                    </div>
                    <div>
                      <a href={""}>
                        <button className="bg-blue-500 w-[40px] h-[40px] border border-black rounded-full border border-white text-lg font-bold flex items-center justify-center">
                          <ArrowRight className="text-white" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              {" "}
              <div className="pt-6">
                <div className="w-[450px] h-[400px] bg-white rounded-lg flex flex-col">
                  <div className="w-full p-3 h-[320px] rounded-lg">
                    <img
                      src="/nway.JPG"
                      alt="Website Design"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex justify-between items-center px-3 py-2">
                    <div>
                      <div className="text-lg font-semibold">
                        Website Design
                      </div>
                      <div className="text-sm text-gray-500">
                        Web Design, App Design
                      </div>
                    </div>
                    <div>
                      <a href={""}>
                        <button className="bg-blue-500 border border-black w-[40px] h-[40px] rounded-full border border-white text-lg font-bold flex items-center justify-center">
                          <ArrowRight className="text-white" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              {" "}
              <div className="pt-6">
                <div className="w-[450px] h-[400px] bg-white rounded-lg flex flex-col">
                  <div className="w-full p-3 h-[320px] rounded-lg">
                    <img
                      src="/nway.JPG"
                      alt="Website Design"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex justify-between items-center px-3 py-2">
                    <div>
                      <div className="text-lg font-semibold">
                        Website Design
                      </div>
                      <div className="text-sm text-gray-500">
                        Web Design, App Design
                      </div>
                    </div>
                    <div>
                      <a href={""}>
                        <button className="bg-blue-500 border border-black w-[40px] h-[40px] rounded-full border border-white text-lg font-bold flex items-center justify-center">
                          <ArrowRight className="text-white" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              {" "}
              <div className="pt-6">
                <div className="w-[450px] h-[400px] bg-white rounded-lg flex flex-col">
                  <div className="w-full p-3 h-[320px] rounded-lg">
                    <img
                      src="/nway.JPG"
                      alt="Website Design"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex justify-between items-center px-3 py-2">
                    <div>
                      <div className="text-lg font-semibold">
                        Website Design
                      </div>
                      <div className="text-sm text-gray-500">
                        Web Design, App Design
                      </div>
                    </div>
                    <div>
                      <a href={""}>
                        <button className="bg-blue-500 border border-black w-[40px] h-[40px] rounded-full border border-white text-lg font-bold flex items-center justify-center">
                          <ArrowRight className="text-white" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              {" "}
              <div className="pt-6">
                <div className="w-[450px] h-[400px] bg-white rounded-lg flex flex-col">
                  <div className="w-full p-3 h-[320px] rounded-lg">
                    <img
                      src="/nway.JPG"
                      alt="Website Design"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex justify-between items-center px-3 py-2">
                    <div>
                      <div className="text-lg font-semibold">
                        Website Design
                      </div>
                      <div className="text-sm text-gray-500">
                        Web Design, App Design
                      </div>
                    </div>
                    <div>
                      <a href={""}>
                        <button className="bg-blue-500 border border-black w-[40px] h-[40px] rounded-full border border-white text-lg font-bold flex items-center justify-center">
                          <ArrowRight className="text-white" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Flex>
    </Flex>
  );
};

export default ProjectPage;
