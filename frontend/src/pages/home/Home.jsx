import { Box, Button, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import { FaRupeeSign } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { FaCommentDollar } from "react-icons/fa";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <Box>
      <Box className="banner">
        {/* banner headder */}
        <Box>
          <Heading
            p={"15px"}
            color={"#00E676"}
            size={"lg"}
            textAlign={"center"}
            borderRadius={"5px"}
          >
            <Typewriter
              options={{
                strings: ["Get Started Today🔥", `Buy Right Now🙌`],
                autoStart: true,
                loop: true,
              }}
            />
          </Heading>
        </Box>
        <Box>
          <Heading
            size={["lg", "xl", "2xl"]}
            textAlign={"center"}
            w={"80%"}
            m={"auto"}
          >
            The Ultimate{" "}
            <Heading
              size={["lg", "xl", "2xl"]}
              as={"span"}
              textDecoration={"underline"}
            >
              500+ AI Motivational
            </Heading>
            Reels Bundle
          </Heading>
          <Heading
            w={"50%"}
            m={"10px auto"}
            size={["xs", "md", "md"]}
            textAlign={"center"}
          >
            Drive Massive Engagement on Facebook, Instagram, and YouTube with AI
            Motivational Reels
          </Heading>
        </Box>

        {/* ad text and reels book show */}

        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={["column-reverse",'column-reverse', "column-reverse", "row"]}
          justifyContent={"space-around"}
          mt={"20px"}
        >
          <Box w={["100%",'100%', "100%", "40%"]}>
            <Box display={"flex"} gap={"15px"} m={"20px "}>
              <Button w={"50%"}>High Quality</Button>
              <Button w={"50%"}>
                {" "}
                <FaCommentDollar /> 100% Risk Free
              </Button>
            </Box>
            <Box display={"flex"} gap={"15px"} m={"20px"}>
              <Button w={"50%"}>
                <FaRupeeSign /> Small Investment
              </Button>
              <Button w={"50%"}>
                <GrDeliver /> Instatnt Delivery
              </Button>
            </Box>
            <Box m={"20px"}>
              <Button
                color={"white"}
                bgGradient="linear(to-l, red, yellow)"
                fontSize={"2xl"}
                _hover={{ bgGradient: "linear(to-l, red, teal)" }}
                w={"100%"}
                h={"20"}
              >
                ONLY ₹ 199{" "}
                <Box pl={"20px"} as="span">
                  <BsFillArrowRightSquareFill />
                </Box>
              </Button>
              <Heading textAlign={"center"}>
                Only{" "}
                <Heading as={"span"} textDecoration={"underline"} size={"2xl"}>
                  3
                </Heading>
                Bundle left...
              </Heading>
            </Box>
          </Box>
          <Box w={["100%", "100%", "30%"]}>
            <Img
              display={"block"}
              m={"auto"}
              w={["50%", "50%", "90%"]}
              src="https://digishopers.in/wp-content/uploads/2023/06/box-mockup-783x1024.webp"
            />
          </Box>
        </Box>
      </Box>

      {/* Reels growth screenshot */}
      <Box mt={"10px"}>
        <Heading fontWeight={"extrabold"} textAlign={"center"}>
          AI REELS{" "}
          <Heading
            as={"span"}
            color={"red"}
            textDecoration={"underline"}
            fontWeight={"extrabold"}
          >
            GROWTH
          </Heading>
          😍
        </Heading>
        <Box>
          <Img
            display={"block"}
            m={"auto"}
            w={"40%"}
            src="https://digishopers.in/wp-content/uploads/2023/06/ai-growth-example-webp-1024x722.webp"
          />
        </Box>
      </Box>

      {/* what you will get */}
      <Box>
        <Box display={"flex"} justifyContent={"center"} gap={"10px"} m={"10px"}>
          <Heading fontWeight={"extrabold"}>WHAT YOU WILL GET </Heading>
          <FaQuestion color={"red"} size={"60px"} />
        </Box>
        <Box
          w={"80%"}
          m={"auto"}
          border={"1px solid #BDBDBD"}
          justifyContent={"center"}
          mb={"10px"}
        >
          <Heading
            size={"lg"}
            fontWeight={"medium"}
            display={"flex"}
            gap={"10px"}
            p={"5px"}
          >
            <BsFillCheckCircleFill color="green" />
            500+ Ai Readymade Reel Videos (.mp4 Format )
          </Heading>
        </Box>
        <Box
          w={"80%"}
          m={"auto"}
          border={"1px solid #BDBDBD"}
          justifyContent={"center"}
          mb={"10px"}
        >
          <Heading
            size={"lg"}
            fontWeight={"medium"}
            display={"flex"}
            gap={"10px"}
            p={"5px"}
          >
            <BsFillCheckCircleFill color="green" />
            1200+ Canva Editable post BONUS
          </Heading>
        </Box>
        <Box
          w={"80%"}
          m={"auto"}
          border={"1px solid #BDBDBD"}
          justifyContent={"center"}
          mb={"10px"}
        >
          <Heading
            size={"lg"}
            fontWeight={"medium"}
            display={"flex"}
            gap={"10px"}
            p={"5px"}
          >
            <BsFillCheckCircleFill color="green" />
            Instagram growth Mastery Course BONUS
          </Heading>
        </Box>
        <Box
          w={"80%"}
          m={"auto"}
          border={"1px solid #BDBDBD"}
          justifyContent={"center"}
          mb={"10px"}
        >
          <Heading
            size={"lg"}
            fontWeight={"medium"}
            display={"flex"}
            gap={"10px"}
            p={"5px"}
          >
            <BsFillCheckCircleFill color="green" />
            90+ Sets Of hashtags
          </Heading>
        </Box>
        <Box
          w={"80%"}
          m={"auto"}
          border={"1px solid #BDBDBD"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={"10px"}
        >
          <Heading
            size={"lg"}
            fontWeight={"medium"}
            display={"flex"}
            gap={"10px"}
            p={"5px"}
          >
            <BsFillCheckCircleFill color="green" />
            Instagram Highlights Cover
          </Heading>
        </Box>
      </Box>
      <Button
        display={"block"}
        m={"auto"}
        h={"50px"}
        w={"50%"}
        fontSize={"2xl"}
        fontWeight={"bold"}
        bgGradient="linear(to-l, red, yellow)"
        colorScheme={"white"}
      >
        GET INSTANT ACCESS ₹ 199
      </Button>
    </Box>
  );
};

export default Home;
