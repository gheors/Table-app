import { Flex, Container } from "@chakra-ui/react";
import { PropsWithChildren, useState, UIEvent } from "react";
import NavBar from "../navbar/components/NavBar";
import HeadPage from "./PageHead";
import Footer from "../footer/Footer";

interface Props {
  textPageHead: string;
}
export default function ApplicationWrapper({
  children,
  textPageHead,
}: PropsWithChildren<Props>) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const currentScrollPos = event.currentTarget.scrollTop;
    const nearToBottom =
      event.currentTarget.scrollHeight -
      event.currentTarget.scrollTop -
      event.currentTarget.clientHeight;

    if (currentScrollPos > scrollPosition) setShowNavbar(false);
    else setShowNavbar(true);
    if (nearToBottom > 200) setScrollPosition(currentScrollPos);
  };
  return (
    <Flex
      flexDir={"column"}
      maxW={"6xl"}
      m="auto"
      overflow={"hidden"}
      h="100vh"
    >
      <HeadPage text={textPageHead} />
      <NavBar showNavbar={showNavbar} />
      <Container
        h={!showNavbar ? "100vh" : "calc(100vh - 60px)"}
        mt={!showNavbar ? "0px" : "60px"}
        onScroll={handleScroll}
        overflow={"auto"}
        scrollBehavior={"smooth"}
        transition={"0.5s"}
      >
        {children}
        <Footer />
      </Container>
    </Flex>
  );
}
