import Image from "next/image";
import styled from "styled-components";
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';


function Share() {
    return <Container>
        <Wrapper>
            <Top>
                <Profile src="/assets/pp.jpg" width={50} height={50} objectFit="contain" />
                <Input placeholder="What's on your mind..?" />
            </Top>
            <Line />
            <Bottom>
                <ShareOptions>
                    <ShareOption>
                        <PermMedia htmlColor="tomato" />
                        <Text>Photo</Text>
                    </ShareOption>
                    <ShareOption>
                        <Label htmlColor="blue" />
                        <Text>Tag</Text>
                    </ShareOption>
                    <ShareOption>
                        <Room htmlColor="green" />
                        <Text>Location</Text>
                    </ShareOption>
                    <ShareOption>
                        <EmojiEmotions htmlColor="goldenrod" />
                        <Text>Emoji</Text>
                    </ShareOption>
                </ShareOptions>
                <Button>Share</Button>
            </Bottom>
        </Wrapper>
    </Container>;
}

export default Share;

const Container = styled.div`
width: 100%;
height: 170px;
border-radius: 10px;
box-shadow: 3px 11px 17px 9px rgba(171,171,171,0.29);
-webkit-box-shadow: 3px 11px 17px 9px rgba(171,171,171,0.29);
-moz-box-shadow: 3px 11px 17px 9px rgba(171,171,171,0.29);
`
const Wrapper = styled.div`
padding:10px;`
const Top = styled.div`
display: flex;
align-items: center;`
const Bottom = styled.div`
display: flex;
align-items: center;
justify-content: space-between;`
const Profile = styled(Image)`border-radius: 100px;
margin-right: 10px;`

const Input = styled.textarea`outline: none; border: none;
margin-left: 10px;
padding: 10px;
width: 100%;
resize: none;
padding-top: 10px;

`

const Line = styled.hr`
margin:10px;
`
const ShareOptions = styled.div`
display: flex;
margin-left:20px;
items-align: center;
justify-content: space-between;
`
const ShareOption = styled.div`
display: flex;
align-items: center;
margin-right: 20px;
&>*{
    margin-right: 5px;
    cursor: pointer;
}`
const Text = styled.p`
font-weight:600;
color: #828282;`

const Button = styled.button` padding: 12px;
padding: 8px;
border-radius: 10px;
border: none;
color: white;
background: green;
cursor: pointer;
margin-right: 20px;
font-weight: 500;
&:hover {
  background-color: darkgreen;
  transition: 2s ease-in-out;
  font-weight: 600;
}`