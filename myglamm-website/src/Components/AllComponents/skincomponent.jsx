import { Box, Img, Text } from "@chakra-ui/react";
import "./allcom.css";
export default function SkinComponent({ src, name1, name2, rupee }) {
  return (
    <Box
      cursor={"pointer"}
      width={"325px"}
      height={"550"}
      borderRadius="3px"
      boxShadow={
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      }
    >
      <Img id="proone" src={src} />
      <br />
      <Text id="protwo">{name1}</Text>
      <Text id="prothree">{name2}</Text>
      <br />
      <Text id="profour">₹ {rupee}</Text>
    </Box>
  );
}
