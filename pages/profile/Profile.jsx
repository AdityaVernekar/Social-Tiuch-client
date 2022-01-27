import styled from "styled-components";
import React from 'react';
import Header from '../../components/Header';
import LeftSidebar from '../../components/LeftSidebar';
import RightSidebar from '../../components/RightSidebar';
import Feed from "../../components/Feed";
import Image from "next/image";

function Profile() {
    return <div>
        <Header />
        <Container>
            <LeftSidebar profile />
            <RightContainer>
                <Top>
                    <ProfileCoverContainer className="parent">
                        <ProfileCover src="/assets/post.jpg" layout="fill" objectFit="cover" />
                        {/* <ProfileImage src="/assets/pp.jpg" width={100} height={100} objectFit="cover" className="dp" /> */}
                        <img src="/assets/pp.jpg" alt="" className="dp" />
                    </ProfileCoverContainer>
                    <ProfileInfo>
                        <Heading>Aditya Vernekar</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vero!</Text>

                    </ProfileInfo>

                </Top>
                <Bottom>
                    <Feed />
                    <RightSidebar profile />

                </Bottom>

            </RightContainer>
        </Container>
    </div>;
}

export default Profile;
const Container = styled.div`
  display: flex;
  width: 100%;
  position:absolute;
  top: 60px;
  /* overflow: hidden; */
`;

const RightContainer = styled.div`
flex:9
/* overflow-y: scroll; */
`;


const Top = styled.div`

`


const Bottom = styled.div`
display: flex;`


const ProfileCoverContainer = styled.div``
/* position: relative;
width: 100%;
height: 300px;` */

const ProfileImage = styled(Image)``
/* border-radius: 100px;
position: absolute;
top: 0;
right: 0;
margin:auto;` */


const ProfileCover = styled(Image)`
/* position: absolute; */
`

const ProfileInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 40px 0 0 20px;
background:whitesmoke;`

const Heading = styled.h2``
const Text = styled.p`
font-size: 18px;
color: #828282;`