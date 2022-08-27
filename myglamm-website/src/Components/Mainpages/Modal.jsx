import {
  Button,
  FormControl,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
let initail = {
  slect: "",
  numbers: "",
};
export default function BasicUsage() {
  const [userde, setUserde] = useState(initail);
  let boom = useNavigate(null);
  let savedetails = () => {
    boom("/user");
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <FaUserAlt onClick={onOpen} className="c2" />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign={"center"} fontWeight={"semibold"} color={"grey"}>
              Get 15% Good Point on every Order
            </Text>
            <br />
            <Image
              m={"auto"}
              width={"300px"}
              p={"10px"}
              src="https://www.myglamm.com/images/myglamm-logo.png"
            />
            <br />
            <Text textAlign={"center"} fontWeight={"bold"}>
              MOBILE NUMBER
            </Text>
            <hr />
            <br />
            <HStack>
              <Select
                name="slect"
                value={userde.slect}
                onChange={(e) => e.target.value}
                w={"120px"}
                placeholder="+91"
                border="2px solid pink"
              >
                <option value="option1">+ 91</option>
              </Select>
              <FormControl isRequired>
                <Input
                  isrequired
                  value={userde.numbers}
                  textAlign={"center"}
                  border="2px solid pink"
                  type={"number"}
                  placeholder="Ener Your Number"
                  name="numbers"
                  onChange={(e) => setUserde(e.target.value)}
                />
              </FormControl>
            </HStack>
            <br />
            <Text textAlign={"center"} fontWeight={"bold"} fontSize={"12px"}>
              By Signing up you agree to our{" "}
              <Link to="/">Terms & Conditions</Link>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={savedetails}
              color="white"
              bgColor={"black"}
              variant="solid"
              width={"500px"}
            >
              CONTINUE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
