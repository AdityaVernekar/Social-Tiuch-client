import Image from 'next/image';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';
import { Users } from "../pages/dummyData"

function Post({ post }) {
    const [showOptions, setShowOptions] = React.useState(false);
    const [like, setLike] = React.useState(post.like);
    const [isLiked, setIsLiked] = React.useState(false);
    const user = Users.filter(user => user.id === post.userId)[0].username;
    const [showLike, setShowLike] = React.useState(false);


    // const likepng = document.getElementById("likepng");

    const LikeHandler = () => {
        if (isLiked) {
            setLike(like - 1);
            setIsLiked(false);
            setShowLike(false);
        }
        else {
            setLike(like + 1);
            setIsLiked(true);
            setShowLike(true);
        }

        setTimeout(() => {
            setShowLike(false);
            console.log(showLike);
        }, 1000);
    }
    return <Container>
        <Wrapper>
            <Top>
                <User>
                    <Profile src="/assets/pp.jpg" width={40} height={40} objectFit="contain" />
                    <SpanContainer>

                        <Span>{user}</Span>
                        <Time>...{post.date}</Time>

                    </SpanContainer>

                </User>
                <MoreVertIcon />
            </Top>
            <Line />
            <Middle>
                <PostContainer>

                    {/* <LikeImage src="/assets/like.png" showLike={showLike} layout='fill' width={30} height={30} objectFit="contain" id='likepng' className="" /> */}
                    <PostImage src="/assets/post.jpg" layout='fill' objectFit="cover" onDoubleClick={LikeHandler} />
                </PostContainer>
                <Text>
                    {post.desc == null ? " " : <Span>{user}</Span>}
                    {post.desc}
                </Text>
            </Middle>
            <Bottom>
                <User>

                    <Profile src="/assets/like.png" onClick={LikeHandler} width={30} height={30} objectFit="contain" className={isLiked ? "liked" : ""} />
                    <Text>
                        {like} People like this
                    </Text>
                </User>
                <Span onClick={() => setShowOptions(val => !val)}>{post.comment} comments</Span>
            </Bottom>
            {showOptions && (
                <CommentContainer>
                    <Comment>
                        <User>

                            <Span>_adi_padi</Span>
                            <Text>dbvjcsmcscscmk</Text>
                        </User>
                        <Time>
                            2 secs ago
                        </Time>

                    </Comment>
                    <Comment>
                        <User>

                            <Span>_adi_padi</Span>
                            <Text>dbvjcsmcscscmk</Text>
                        </User>
                        <Time>
                            2 secs ago
                        </Time>

                    </Comment>
                    <Comment>
                        <User>

                            <Span>_adi_padi</Span>
                            <Text>dbvjcsmcscscmk</Text>
                        </User>
                        <Time>
                            2 secs ago
                        </Time>

                    </Comment>
                    <Comment>
                        <User>

                            <Span>_adi_padi</Span>
                            <Text>dbvjcsmcscscmk</Text>
                        </User>
                        <Time>
                            2 secs ago
                        </Time>

                    </Comment>
                </CommentContainer>
            )}
            <CommentBottom>
                <Input placeholder="Add a comment..." />
                <Button>Post</Button>
            </CommentBottom>



        </Wrapper>
    </Container>;
}

export default Post;

const Container = styled.div`
margin:25px 0;
border-radius:10px;`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

padding:10px 2px;
border-radius: 10px;
`
const Wrapper = styled.div`
padding:20px;`
const Bottom = styled.div`
display: flex;
align-items: center;
justify-content: space-between;`

const Text = styled.p`
display: flex;
align-items: center;
margin-right: 10px;

`
const Profile = styled(Image)`
border-radius: 100px;
margin-right: 10px;
cursor: pointer;`

const Input = styled.input`
outline: none; border: none;
margin-left: 10px;
padding: 10px;
width: 100%;
border-bottom: 1px solid #ccc;`

const Line = styled.hr``
const Middle = styled.div`
position: relative;`

const User = styled.div`
display: flex;
align-items: center;
&>* {
    margin-left: 20px;
}`

const PostImage = styled(Image)`
    border-radius: 2px;
    `
const PostContainer = styled.div`
position: relative;
width: 100%;
height: 300px; 
border-radius: 10px;
cursor: pointer;`

const Span = styled.span`
font-weight: bold;
color:#28292b;
margin-right:20px;
cursor: pointer;
`

const Time = styled.span`
color:#828282;
font-size:12px;
margin-right:30px;`

const CommentContainer = styled.div`
width: 100%;
height: 70px;
overflow-y: scroll;`;

const Comment = styled.div`
display: flex;
align-items: center;
justify-content: space-between;`;

const CommentBottom = styled.div`
display:flex;
align-items:center;
justify-content:space-between;`

const Button = styled.button` padding: 12px;
padding: 8px;
border-radius: 10px;
border: none;
color: blue;
background: white;
cursor: pointer;
margin-right: 20px;
font-weight: 500;

`
const SpanContainer = styled.div`
display:flex;
align-items:center;
flex-direction:column;
&>span:last-child{
    margin-left:15px;
    font-size:10px;
}`


const LikeImage = styled(Image)`border-radius: 100px;
margin-right: 10px;
cursor: pointer;
position: absolute;
top: 10px;
right: 10px;
margin:auto;
z-index:10;
 display:${props => props.showLike ? "block" : "hidden"}
; 



`