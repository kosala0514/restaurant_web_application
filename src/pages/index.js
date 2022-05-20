import React, { useState } from 'react';
import styled from 'styled-components';
// import { Button } from '../components/Button/res_button'
import ResCarousel from '../components/Carousel/res_carousel'
import { Modal } from '../components/PopUp/model';

const Container = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Button = styled.button`
  min-width: 100px;
  position: absolute;
  margin-top: -98vh;
  margin-left: 80vw;
  padding: 5px 20px;
  border-radius: 10px;
  border: none;
  background: #0C3242;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const Home = () => {
    const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
    return (
        <Container> 
           <ResCarousel/>
           <Button children="Sign In" onClick={openModal}/>
           <Modal showModal={showModal} setShowModal={setShowModal} Title="Sign In"/>
        </Container>
    )
}

export default Home

