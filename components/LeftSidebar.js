import { Link } from "@mui/material";
import React from "react";
import styled from "styled-components";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import {
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import Image from "next/image";
function LeftSidebar({ profile }) {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>
            <RssFeedIcon />
            <Name>Feed</Name>
          </ListItem>
          <ListItem>
            <Chat />
            <Name>Chats</Name>
          </ListItem>
          <ListItem>
            <PlayCircleFilledOutlined />
            <Name>Videos</Name>
          </ListItem>
          <ListItem>
            <Group />
            <Name>Groups</Name>
          </ListItem>
          <ListItem>
            <Bookmark />
            <Name>Bookmarks</Name>
          </ListItem>
          <ListItem>
            <HelpOutline />
            <Name>Questions</Name>
          </ListItem>
          <ListItem>
            <WorkOutline />
            <Name>Jobs</Name>
          </ListItem>
          <ListItem>
            <Event />
            <Name>Events</Name>
          </ListItem>
          <ListItem>
            <School />
            <Name>Courses</Name>
          </ListItem>
        </List>
        <Button>Show More</Button>
        <Line />
        <List>
          <ListItem>
            <Profile src="/assets/pp.jpg" width={30} height={30} objectFit="contain" />
            <Name>Abhishek</Name>
          </ListItem>
          <ListItem>
            <Profile src="/assets/pp.jpg" width={30} height={30} objectFit="contain" />
            <Name>Abhishek</Name>
          </ListItem>
          <ListItem>
            <Profile src="/assets/pp.jpg" width={30} height={30} objectFit="contain" />
            <Name>Abhishek</Name>
          </ListItem>
          <ListItem>
            <Profile src="/assets/pp.jpg" width={30} height={30} objectFit="contain" />
            <Name>Abhishek</Name>
          </ListItem>
        </List>
      </Wrapper>
      {profile && (
        <AddContainer>
          <Gift src="/assets/dp.jpg" layout="fill" objectFit="contain" className="br" />
        </AddContainer>
      )}
    </Container>
  );
}

export default LeftSidebar;
const AddContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin: 10px 0;
  padding: 20px;
  border-radius: 10px;
`;
const Gift = styled(Image)`
  border-radius: 10px;
`;
const Container = styled.div`
  flex: 3;
  height: calc(100vh - 60px);
  /* overflow-y: scroll; */
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Profile = styled(Image)`
  border-radius: 100px;
  margin-right: 10px;
`;
const Name = styled.span`
  margin-left: 10px;
  color: #3b3b40;
  font-weight: 600;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  & > svg {
    margin-right: 20px;
  }
  &:hover {
    background-color: #d7d8de;
  }
`;

const Button = styled.button`
  padding: 12px;
  width: 150px;
  border-radius: 10px;
  border: none;
  background: #d7d8de;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #aaaaad;
    transition: 0.6s ease-out;
  }
`;

const Line = styled.hr`
  border: 1px solid #e6e6e6;
  margin: 20px 0;
`;
