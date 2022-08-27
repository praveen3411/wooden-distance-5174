import { Box, Button, Center, HStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SkinComponent from "../AllComponents/skincomponent";
import Footer from "../Homecomponents.jsx/Footer";
import Two from "../Homecomponents.jsx/Hometwo";
import FirstNavbar from "../Navbars/FirstNavbar";
import ThirdNavbar from "../Navbars/NavbarThird";
import SecondNavbar from "../Navbars/SecondNavbar";

export default function Collection() {
  const [coll, setColl] = useState([]);
  const [parm, setParms] = useSearchParams();
  const [pages, setpages] = useState(Number(parm.get("page")) || 1);
  const [sorting, setSorting] = useState(null);
  const [pricing, setpricing] = useState(1);
  let collfunction = ({ pages, sorting, pricing }) => {
    axios
      .get(
        `http://localhost:5000/api/collection?_page=${pages}&_limit=30&_sort=mname&_order=${sorting}&cost_gte=${pricing}`
      )
      .then((res) => {
        setColl(res.data);
      })
      .then((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    setParms({
      pages: pages,
      sorting:sorting,
      pricing:pricing,
    });
    collfunction({ pages, sorting, pricing });
  }, [pages, sorting, pricing]);

  return (
    <div>
      <FirstNavbar />
      <SecondNavbar />
      <ThirdNavbar />
      <br />
      <br />
      <Box>
        <Two names={"ALL COLLECTIONS"} />
      </Box>
      <br />
      <Center>
        <HStack spacing={4}>
          <Button
            bgColor={"pink"}
            fontWeight={"bold"}
            onClick={() => setSorting("asc")}
          >
            ASSE..
          </Button>
          <Button
            bgColor={"pink"}
            fontWeight={"bold"}
            onClick={() => setpricing(400)}
          >
            {" "}
            AB ₹400
          </Button>
          <Button
            bgColor={"pink"}
            borderRadius={"50%"}
            onClick={() => setpages(1)}
            fontWeight={"bold"}
          >
            1
          </Button>
          <Button
            bgColor={"pink"}
            borderRadius={"50%"}
            onClick={() => setpages(2)}
            fontWeight={"bold"}
          >
            2
          </Button>
          <Button
            bgColor={"pink"}
            borderRadius={"50%"}
            onClick={() => setpages(3)}
            fontWeight={"bold"}
          >
            3
          </Button>
          <Button
            bgColor={"pink"}
            borderRadius={"50%"}
            onClick={() => setpages(4)}
            fontWeight={"bold"}
          >
            4
          </Button>
          <Button
            bgColor={"pink"}
            fontWeight={"bold"}
            onClick={() => setpricing(1000)}
          >
            {" "}
            AB ₹800
          </Button>
          <Button
            bgColor={"pink"}
            fontWeight={"bold"}
            onClick={() => setSorting("desc")}
          >
            DESC..
          </Button>
        </HStack>
      </Center>
      <br />
      <Box
        width={"89%"}
        margin={"auto"}
        display={"flex"}
        flexDir={"row"}
        flexWrap={"wrap"}
      >
        {coll.map((item) => (
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
    </div>
  );
}
