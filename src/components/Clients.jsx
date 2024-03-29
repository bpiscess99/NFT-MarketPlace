import React from 'react';
import styled from "styled-components";
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.png';
import client6 from '../assets/client6.png';


const Clients = () => {
    const clients = [client1, client2, client3, client4, client5, client6]
  return (
    
    <Section>
      {clients.map((client, index) => {
        return (
        <div className="client" key={index}>
        <img src={client} alt="client" data-aos="fade-down"/>
        </div>
        );
      })}
      
    </Section>
  )
};

export default Clients;

const Section = styled.section`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   margin:0 2rem;
   margin-bottom: 5rem;
`;

