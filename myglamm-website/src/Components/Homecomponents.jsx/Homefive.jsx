import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import HomeF from "./homef";

export default function Homefive() {
  return (
    <Box>
      <Box width={"89%"} m={"auto"}>
        <HStack>
          <HomeF
            src={"https://files.myglamm.com/site-images/original/SKin-1-2.png"}
            name={"Skin"}
          />
          <HomeF
            src={"https://files.myglamm.com/site-images/original/Lips-3.png"}
            name={"Lips"}
          />
          <HomeF
            src={
              "https://files.myglamm.com/site-images/original/Superfoods-Model-120-X-120-px_2.jpg"
            }
            name={"Hair"}
          />
          <HomeF
            src={
              "https://files.myglamm.com/site-images/original/Eyes-4.png"
            }
            name={"Eyes"}
          />
          <HomeF
            src={"https://files.myglamm.com/site-images/original/Face-5.png"}
            name={"Face"}
          />
          <HomeF
            src={"https://files.myglamm.com/site-images/original/Nails-1.png"}
            name={"Nails"}
          />
          <HomeF
            src={"https://files.myglamm.com/site-images/original/App-PersonalCare_2.png"}
            name={"Sanitizing Care"}
          />
          <HomeF
            src={"https://files.myglamm.com/site-images/original/Bath.png"}
            name={"Bating"}
          />
        </HStack>
      </Box>
    </Box>
  );
}
