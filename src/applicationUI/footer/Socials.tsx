import {
  Button,
  HStack,
  VisuallyHidden,
  useColorModeValue
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Socials() {
  return (
    <HStack spacing={4} pt={5}>
      <SocialButton label={"Twitter"} href={"#"}>
        <FaTwitter />
      </SocialButton>
      <SocialButton label={"YouTube"} href={"#"}>
        <FaYoutube />
      </SocialButton>
      <SocialButton label={"Instagram"} href={"#"}>
        <FaInstagram />
      </SocialButton>
    </HStack>
  );
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <Button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      p={0}
      fontSize={"25px"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};
