import { Box, Flex, HStack, Image, Stack } from "@chakra-ui/react";
import FirstNavbar from "../Navbars/FirstNavbar";
import ThirdNavbar from "../Navbars/NavbarThird";
import SecondNavbar from "../Navbars/SecondNavbar";
import { useEffect, useRef, useState } from "react";
import { dataone } from "./Childrens";
import One from "../Homecomponents.jsx/Homeone";
import Two from "../Homecomponents.jsx/Hometwo";
import Three from "../Homecomponents.jsx/Homethree";
import Homefour from "../Homecomponents.jsx/Homefour";
import Homefive from "../Homecomponents.jsx/Homefive";

export default function Home() {
  const [time, settime] = useState(0);
  if (time === dataone.length) {
    settime(0);
  }
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current !== null) return;
    ref.current = setInterval(() => {
      settime((time) => time + 1);
    }, 3000);
  }, []);
  return (
    <Box>
      {/* first nabars */}
      <Box>
        <FirstNavbar />
        <SecondNavbar />
        <ThirdNavbar />
      </Box>
      {/* image coursel */}
      <Box cursor={"pointer"}>
        <Image src={dataone[time]} alt="images" />
      </Box>
      <br />
      {/* images 3rd */}
      <Box>
        <One
          src={
            "https://files.myglamm.com/site-images/original/2240x614-copy_6.jpg"
          }
        />
      </Box>
      <br />
      {/* names */}
      <Box>
        <Two names={"IN THE SPOTLIGHT"} />
      </Box>
      <br />
      {/* box four */}
      <Flex w={"89%"} m="auto">
        <HStack>
          <Box>
            <Three
              src={
                "https://files.myglamm.com/site-images/original/700x488-avc.jpg"
              }
              name1={"FLAT 50% OFF"}
              name2={"GRAB THE DISCOUNT"}
            />
          </Box>
          <Box>
            <Three
              src={
                "https://files.myglamm.com/site-images/original/700x488-avc_1.jpg"
              }
              name1={"LIT LIQUID LIPSTICK"}
              name2={"GRAB THE DISCOUNT"}
            />
          </Box>
          <Box>
            <Three
              src={
                "https://files.myglamm.com/site-images/original/In-the-Spotlight-700x488.jpg"
              }
              name1={"MAKE UP UNDER 399"}
              name2={"GRAB THE DISCOUNT"}
            />
          </Box>
        </HStack>
      </Flex>
      {/* single images */}
      <br />
      <Box>
        <Stack spacing={3}>
          <Box>
            <One
              src={
                "https://files.myglamm.com/site-images/original/2240x614-C_6.gif"
              }
            />
          </Box>
          <Box>
            <One
              src={
                "https://files.myglamm.com/site-images/original/2240x614-Sleek-desktop_1.gif"
              }
            />
          </Box>
          {/* Again one name */}
          <Box>
            <Two names={"BANK PARTNER"} />
          </Box>
        </Stack>
      </Box>
      {/* bank cards */}
      <br />
      <Flex w={"89%"} m="auto">
        <HStack>
          <Box>
            <Three
              src={
                "https://files.myglamm.com/site-images/original/IDFC-offer-banner-660x330_3.jpg"
              }
              name1={"FLAT 20% OFF"}
              name2={"GRAB THE DISCOUNT"}
            />
          </Box>
          <Box>
            <Three
              src={
                "https://files.myglamm.com/site-images/768x432/simpl-offer-banner-660x330_6.jpg"
              }
              name1={"UPTO 10% OFF"}
              name2={"GRAB THE DISCOUNT"}
              height={"180px"}
              width={"370px"}
            />
          </Box>
          <Box>
            <Three
              src={
                "https://files.myglamm.com/site-images/original/mobikwik-offer-banner-660x330_5.jpg"
              }
              name1={"CASHBACK UPTO 150"}
              name2={"GRAB THE DISCOUNT"}
            />
          </Box>
        </HStack>
      </Flex>
      {/* Best Sellers */}
      <Box>
        <Two names={"BEST SELLERS"} />
      </Box>
      <br />
      <Box>
        <Homefour />
      </Box>
      <br />
      <Box>
        <Two names={"ESSENTIAL BUDGET BUYS"} />
      </Box>
      <br />
      <Flex w={"89%"} m="auto">
        <HStack>
          <Box>
            <Three
              src={
                "https://files.myglamm.com/site-images/original/combo-Banner--700-x-488_1.jpg"
              }
              name1={"WIPEOUT"}
              name2={"Wipeout"}
            />
          </Box>
          <Box>
            <Three
              src={
                "https://files.myglamm.com/site-images/original/Glamm-Picks-700x488.jpg"
              }
              name1={"UNDER 499 STORE"}
              name2={"Grab Now Fast"}
            />
          </Box>
          <Box>
            <Three
              src={
                "https://files.myglamm.com/site-images/original/Glamm-Must-haves-desktop.jpg"
              }
              name1={"UNDER 999 STORE"}
              name2={"GRAB THE DISCOUNT"}
            />
          </Box>
        </HStack>
      </Flex>
      <br />
      <Box>
        <Two names={"SHOP FROM CATEGORIES"} />
      </Box>
      <br />
      <Box>
        <Homefive />
      </Box>
      <br />
      <br />  
      <Box>
        <Two names={"KITS & COMBOS"} />
      </Box>
    </Box>
  );
}
