import {
  Box,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import DarkModeButton from "./buttons/DarkModeButton";
import Link from "next/link";

interface Props {
  showNavbar: boolean;
}

export default function NavBar({ showNavbar }: Props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      position={"fixed"}
      maxW="6xl"
      w="100%"
      top={showNavbar ? "0px" : "-60px"}
      transition={"0.5s"}
      zIndex={1}
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <Icon as={IoMdClose} w={5} h={5} />
              ) : (
                <Icon as={HiOutlineMenu} w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems={"center"}
        >
          <Link href={"/"}>
            <Image src="/logo.svg" h="35px" alt="logo" />
          </Link>
          <Flex display={{ base: "none", md: "flex" }} ml={5}>
            <DesktopNav />
          </Flex>
        </Flex>

        <DarkModeButton />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
