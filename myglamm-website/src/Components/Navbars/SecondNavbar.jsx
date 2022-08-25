import { Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import Imagess from "../AllComponents/Images";
import { FaShoppingBag } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import "./Navbar.css";
import { Link } from "react-router-dom";
import BasicUsage from "../Mainpages/Modal";
export default function SecondNavbar() {
  const [text, setText] = useState("");

  return (
    <Box >
      <Box
        width={"87%"}
        margin="auto"
        display={"flex"}
        flexDir={"row"}
        mt={"10px"}
      >
        <Box display={"flex"} width={"1000px"} gap="30px">
          <Link to="/">
            <Imagess
              pathing={
                "https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg"
              }
            />
          </Link>
          <Input
            type={"text"}
            value={text}
            placeholder="Find Lipstick, Eyeliner, Makeup Tutorial, etc.."
            onChange={(e) => setText(e.target.value)}
            border="2px solid black"
          />
          <GoSearch id="boom" />
        </Box>
        <Box
          display={"flex"}
          w={"250px"}
          justifyContent={"flex-end"}
          gap="100px"
          marginTop={"8px"}
          fontSize={"25px"}
        >
          <Text>
            <Link to="/bag">
              {" "}
              <FaShoppingBag className="c2" />
            </Link>
          </Text>
          <Text>
            <BasicUsage />
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
