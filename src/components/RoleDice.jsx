import styled from "styled-components"
const RoleDice = ({roleDice,currentDice}) => {

  
  
  return (
    <DiseContainer>
        <div className="dice" onClick={roleDice}>
             <img src={`/Images/Dice/dice_${currentDice}.png `} alt="dise 1" />
        </div>
        <p>Click on the Dice to roll</p>

    </DiseContainer>
  )
}

export default RoleDice

const DiseContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
 

    
`