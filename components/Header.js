import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Image from "next/image";
function Header() {
  return (
    <Container>
      <Logo>Social Touch</Logo>
      <SearchContainer>
        <SearchIcon />
        <SearchInput placeholder="Search for a friend,post or video..." />
      </SearchContainer>
      <Links>
        <Typo>Home</Typo>
        <Typo>Timeline</Typo>
      </Links>
      <IconContainer>
        <Badge badgeContent={4} color="secondary">
          <PersonIcon />
        </Badge>
        <Badge badgeContent={4} color="secondary">
          <ChatBubbleOutlineIcon />
        </Badge>
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconContainer>
      <ImageContainer>
        <ImageC src="/assets/pp.jpg" height={30} width={40} objectFit="cover" />
      </ImageContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4260f5;
  padding: 0 10px;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 50;
`;
const Logo = styled.h2`
  color: #fff;
  padding: 0px 10px;
`;

const ImageC = styled(Image)`
  border-radius: 100px;
`;

const ImageContainer = styled.div`
  border-radius: 100px;
`;

const Typo = styled.p`
  color: #fff;
  font-size: 18px;
  padding: 0px 10px;
  cursor: pointer;
  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 500px;
  background-color: #fff;
  padding: 0 5px;
`;

const SearchInput = styled.input`
  border: none;
  padding: 8px 8px;
  width: 100%;
  border-radius: 50px;
  outline: none;
  font-size: 14px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 15px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  & > * {
    margin: 0px 20px;
    position: relative;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;
