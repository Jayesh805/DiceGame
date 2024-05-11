import styled from 'styled-components';
 import { Button } from '../styled/Button';
const StartGame = ({toggle}) => {
  return (
    <Container>
       <div >
       <img src="/Images/dices.png" alt="first" />
       </div>
        <div className="content">
            <h1>
                Dice game   
            </h1>
            <Button onClick={toggle}>Play now</Button>
        </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
max-width: 1180px;
display: flex;
height: 100vh;
margin: 0 auto;
align-items: center;
.content{
  h1{
    font-size: 98px;
    white-space: nowrap;
  }
}
`;
