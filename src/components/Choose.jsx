import React from 'react';
import styled from "styled-components";
import choose from "../assets/choose.png";
import Button from './Button';


const Choose = () => {
  return (
    <Section>

    <div className="image" data-aos="fade-up">
        <img src={choose} alt="choose" />
    </div>

    <div className="content" data-aos="fade-down">
        <h2>Why should you Choose Our Website ?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit in temporibus quia, id fugit illum, laudantium iste, pariatur voluptatem ducimus quis aliquid. Iure culpa dignissimos explicabo eos soluta amet error neque sit excepturi cumque!</p>
        <Button text="Read More" blue/>
    </div>
      
    </Section>
  )
}

export default Choose

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
  }
`;