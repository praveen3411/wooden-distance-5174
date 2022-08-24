import { Box, Img } from "@chakra-ui/react";
import { useState } from "react";
import FirstNavbar from "../Navbars/FirstNavbar";
import ThirdNavbar from "../Navbars/NavbarThird";
import SecondNavbar from "../Navbars/SecondNavbar";

export default function Home() {
  return (
    <div>
      <Box>
        <FirstNavbar />
        <SecondNavbar />
        <ThirdNavbar />
      </Box>
    </div>
  );
}
