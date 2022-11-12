import type { NextPage } from "next";
import styled from "styled-components";

const StyledTest = styled.h1`
  color: ${({ theme }) => theme.colors.background};
`;

const Home: NextPage = () => {
  return <StyledTest>hello world</StyledTest>;
};

export default Home;
