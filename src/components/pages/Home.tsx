import { Box, Flex } from "@radix-ui/themes";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import TypingText from "../shared/TypeText";

const HomePage = () => {
  return (
    <Flex
      className="items-center h-full ml-20 space-y-10 md:space-y-0 flex-wrap md:flex-nowrap p-5"
      justify={"between"}
    >
      <Box className="space-y-3 w-1/2">
        <div className="bg-[#0788FF] bg-opacity-20 text-white w-fit p-2 rounded-md">
          NWAY NWAY WAI
        </div>
        <div className="text-5xl text-white font-semibold">
          HAY! I'M NWAY NWAY
        </div>

        <TypingText
          texts={["I'M A FRONDEND DEVELOPER"]}
          speed={200}
          loop={true}
        />

        <div className="text-white w-fit p-2 rounded-md">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment.
        </div>
        <Flex className="space-x-4">
          <Button className="bg-blue-500 text-white rounded-3xl px-5 flex items-center space-x-2">
            <span>GET IN TOUCH</span>
            <ArrowRight />
          </Button>
          <Flex className="space-x-3">
            <Link href={"https://www.facebook.com/nwaywai02?mibextid=kFxxJD"}>
              <Button className="bg-blue-600 w-[40px] h-[40px] rounded-full border border-white text-xl font-bold">
                f
              </Button>
            </Link>
            <Link href={"https://www.linkedin.com/in/nway-nway-wai"}>
              <Button className="bg-[#3aa9f2] w-[40px] h-[40px] rounded-full border border-white text-lg font-bold">
                in
              </Button>
            </Link>
            <Link href={""}>
              <Button className="bg-green-500 w-[40px] h-[40px] rounded-full border border-white text-lg font-bold">
                <FaWhatsapp />
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
      <Box className="w-1/2">
        <img
          src="/nway.JPG"
          alt="Nway Nway Wai"
          className="rounded-full shadow-lg w-full h-auto"
        />
      </Box>
    </Flex>
  );
};

export default HomePage;
