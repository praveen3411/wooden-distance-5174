import { Box } from "@chakra-ui/react";
import FirstNavbar from "../Navbars/FirstNavbar";
import ThirdNavbar from "../Navbars/NavbarThird";
import SecondNavbar from "../Navbars/SecondNavbar";
import Two from "../Homecomponents.jsx/Hometwo";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import SkinComponent from "../AllComponents/skincomponent";
import Footer from "../Homecomponents.jsx/Footer";
export default function Makeup() {
  const [dom, setDom] = useState([]);
  let functiontwo = () => {
    axios
      .get(`http://localhost:5000/api/makeup`)
      .then((res) => {
        console.log(res.data);
        setDom(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    functiontwo();
  }, []);
  return (
    <Box>
      <FirstNavbar />
      <SecondNavbar />
      <ThirdNavbar />
      <br />
      <br />
      <Box>
        <Two names={"MAKEUP KIT'S"} />
      </Box>
      <Box
        width={"89%"}
        margin={"auto"}
        display={"flex"}
        flexDir={"row"}
        flexWrap={"wrap"}
      >
        {dom.map((item) => (
          <Box key={item.id} padding={"24px"}>
            <SkinComponent
              src={item.avatar}
              name1={item.mname}
              name2={item.subname}
              rupee={item.cost}
            />
          </Box>
        ))}
      </Box>
      <br />
      <Box margin={"auto"} width={"89%"}>
        <Footer />
      </Box>
    </Box>
  );
}
