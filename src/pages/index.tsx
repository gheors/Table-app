import type { NextPage } from "next";
import ApplicationWrapper from "../applicationUI/structure/ApplicationWrapper";
import Hero from "../applicationUI/hero/Hero";

const IndexPage: NextPage = () => {
  return (
    <ApplicationWrapper textPageHead="Welcome at Tables Session">
      <Hero />
    </ApplicationWrapper>
  );
};

export default IndexPage;
