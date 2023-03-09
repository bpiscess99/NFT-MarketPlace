import React from 'react';
import styled from "styled-components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import subscribe from "../assets/subscribe.png";

const Subscribe = () => {
  return (
    <Section>

     <div className="content">
        <h2>Subscribe for Get update every New Offers</h2>
        <p>Lorem, ipsum. is simply dummy text of the printing and typesetting
          industry. Lorem Ispum has been the industry's standard.</p>
        

        <div className="input-container">
            <input type="text" placeholder='Enter Email'/>
            <BsFillArrowRightCircleFill/>
        </div>   
        
        </div>

        <div className="image">
            <img src={subscribe} alt="subscribe" />
        </div>

    </Section>
  )
}

export default Subscribe

const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;
gap: 3rem;
margin: 0 9rem;
margin-bottom: 5rem;
.content{
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  h2{
      font-size: 3rem;
  }
  p{
      color: #7b7e86;
      line-height: 2rem;
  }
  .input-container{
     padding: 0.3rem;
     display: flex;
     justify-content: center;
     align-items: center;
     width: max-content;
     gap: 1rem;
     border: 1px solid #c4c4c4;
     border-radius: 3rem;
     input{
       border: none;
       &:focus{
        outline: none;
    }
     padding-left: 2rem;
     padding-right: 5rem;
     font-size: 1.3rem;
    }
    svg{
        color: #2d69fd;
        font-size: 3rem;
    }    
  }
}
`;