import React from "react";
import styled from "styled-components";
import Post from "./Post";
import Share from "./Share";
import { Posts } from "../pages/dummyData";

function Feed() {
  return (
    <Container>
      <Wrapper>
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default Feed;
const Container = styled.div`
  flex: 5.5;
`;
const Wrapper = styled.div`
  padding: 20px;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
