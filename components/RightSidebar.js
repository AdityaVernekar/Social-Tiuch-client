import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Badge from "@mui/material/Badge";

function RightSidebar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <Top>
          <Gift src="/assets/gift.png" height={50} width={50} objectFit="contain" />
          <Text>
            <b>Abhishek Raikar</b> and <b>5 others</b> have their birthday today
          </Text>
        </Top>
        <AddContainer>
          <Gift src="/assets/add.jpg" layout="fill" objectFit="cover" />
        </AddContainer>
        <List>
          <Text>Online Friends</Text>
          <ListItem>
            <Badge color="primary" variant="dot">
              <Profile src="/assets/pp.jpg" width={30} height={30} objectFit="contain" />
            </Badge>
            <Name>Abhishek</Name>
          </ListItem>
          <ListItem>
            <Badge color="primary" variant="dot">
              <Profile src="/assets/pp.jpg" width={30} height={30} objectFit="contain" />
            </Badge>
            <Name>Abhishek</Name>
          </ListItem>
          <ListItem>
            <Badge color="primary" variant="dot">
              <Profile src="/assets/pp.jpg" width={30} height={30} objectFit="contain" />
            </Badge>
            <Name>Abhishek</Name>
          </ListItem>
          <ListItem>
            <Badge color="primary" variant="dot">
              <Profile src="/assets/pp.jpg" width={30} height={30} objectFit="contain" />
            </Badge>
            <Name>Abhishek</Name>
          </ListItem>
        </List>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <Heading>My Information</Heading>
        <RightProfile>
          <Span>City:</Span>
          <Span>Vasco-da-gama</Span>
        </RightProfile>
        <RightProfile>
          <Span>From:</Span>
          <Span>Madrid</Span>
        </RightProfile>
        <RightProfile>
          <Span>Relatioship Status:</Span>
          <Span>Complicated</Span>
        </RightProfile>
        <Heading> My Followers</Heading>
        <FollowContainer>
          <Followers>
            <DP src="/assets/gg.jpg" width={100} height={100} objectFit="contain" />
            <DpName>Abhishek</DpName>
          </Followers>
          <Followers>
            <DP src="/assets/pp.jpg" width={100} height={100} objectFit="contain" />
            <DpName>Abhishek</DpName>
          </Followers>
          <Followers>
            <DP src="/assets/gg.jpg" width={100} height={100} objectFit="contain" />
            <DpName>Abhishek</DpName>
          </Followers>
          <Followers>
            <DP src="/assets/pp.jpg" width={100} height={100} objectFit="contain" />
            <DpName>Abhishek</DpName>
          </Followers>
          <Followers>
            <DP src="/assets/gg.jpg" width={100} height={100} objectFit="contain" />
            <DpName>Abhishek</DpName>
          </Followers>
          <Followers>
            <DP src="/assets/pp.jpg" width={100} height={100} objectFit="contain" />
            <DpName>Abhishek</DpName>
          </Followers>
        </FollowContainer>
        <AddContainer>
          <Gift src="/assets/add.jpg" layout="fill" objectFit="cover" />
        </AddContainer>
      </>
    );
  };
  return (
    <Container>
      <Wrapper>{!profile ? <HomeRightBar /> : <ProfileRightBar />}</Wrapper>
    </Container>
  );
}

export default RightSidebar;

const RightProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 0 10px;
`;
const Span = styled.span`
  margin-right: 20px;
`;

const FollowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
`;

const Followers = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  align-items: center;
  border-radius: 10px;
  /* margin: 0px 3px; */
  cursor: pointer;
`;
const DP = styled(Image)`
  border-radius: 50%;
`;
const DpName = styled.p`
  text-align: center;
`;

const Container = styled.div`
  flex: 3.5;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const Heading = styled.h1`
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
`;

const Gift = styled(Image)`
  border-radius: 10px;
`;

const Text = styled.p`
  margin-left: 10px;
`;

const AddContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin: 10px 0;
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
