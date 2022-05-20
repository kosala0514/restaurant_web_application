import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import FormInput from '../Form/res_form';
// import { Modal2 } from './sign_up';


const Background = styled.div`
  width: 100%;
  height: 80vh;
  /* background: rgba(0, 0, 0, 0.8); */
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWrapper = styled.div`
  width: 40vw;
  height: 84vh;
  margin-bottom: 45px;
  /* box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2); */
  background: #0C3242;
  /* opacity: -0.4; */
  color: #fff;
  /* display: grid;  */
  /* grid-template-columns: 1fr 1fr; */
  position: relative;
  z-index: 10;
  border-radius: 25px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  /* position: relative; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 0 !important;
  /* display: none ; */
  
  /* overflow: hidden ; */
`;

const Button = styled.button`
width: 30vw;
margin-top: 10px;
  align-items:center ;
  padding: 0px 0px;
  border-radius: 10px;
  border: none;
  color: #0C3242 !important;
  background: #fff !important;
  font-size: 18px;
  cursor: pointer;
`;


export const Modal = ({ showModal, setShowModal, Title }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  // const [username, setUsername] = useState("")
  // const usernameRef = useRef()
  //   console.log(usernameRef)
  
  const [valuesSignIn, setValuesSignIn] = useState({
    email:"",
    password:"",
  });

  const inputsSignIn = [
    {
      id :1,
      name: "email",
      type:"email",
      placeholder:"Email Address",
      label:"Email Address",
    },
    {
      id :2,
      name: "password",
      type:"password",
      placeholder:"Password",
      label:"Password",
    },
  ]

  const [valuesSignUp, setValuesSignUp] = useState({
    fname:"",
    email:"",
    age:"",
    address:"",
    telephone:"",
    password:"",
  });

  const inputsSignUp = [
    {
      id :1,
      name: "fname",
      type:"text",
      placeholder:"Full Name",
      label:"Full Name",
    },
    {
      id :2,
      name: "email",
      type:"email",
      placeholder:"Email Address",
      label:"Email Address",
    },
    {
      id :3,
      name: "age",
      type:"text",
      placeholder:"Age",
      label:"Age",
    },
    {
      id :4,
      name: "address",
      type:"text",
      placeholder:"Address",
      label:"Address",
    },
    {
      id :5,
      name: "tele",
      type:"text",
      placeholder:"Telephone No.",
      label:"Telephone No.",
    },
    {
      id :6,
      name: "password",
      type:"password",
      placeholder:"Password",
      label:"Password",
    },
  ]
  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
    // console.log(usernameRef);
  }

  const onChange = (e) => {
    setValuesSignIn({...valuesSignIn,
      [e.target.name]:e.target.value
    })
  }

  // console.log(values)

  const [isSignIn, setSignIn] = useState(true);

  const openModal2 = () => {
    setSignIn(prev => !prev);  
  };


  return (
    <>
      {showModal ? isSignIn ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              {/* <ModalImg src={require('./modal.jpg')} alt='camera' /> */}
              <ModalContent>
                <form onSubmit={handleSubmit}>
                  <h1 className='sign__in__head'>{Title}</h1>
                  {/* <FormInput placeholder="Username" setUsername={setUsername}/> */}
                  {/* <FormInput refer={usernameRef} placeholder="Username"/> */}
                  {inputsSignIn.map((input) => (
                    <FormInput 
                      key={input.id}
                      {...input} 
                      value={valuesSignIn[input.name]}
                      onChange={onChange}
                    />
                  ))}
                  {/* <FormInput name="username" placeholder="Username" />
                  <FormInput name="email" placeholder="Email" /> */}
                  <h5 className='forgot_pass'>Forgot password ?</h5>
                  <Button children="Sign In"/>
                  <h5 onClick={openModal2} className='account_phase'>Haven’t account ? Sign Up</h5>
                  {/* <Modal2 showModal={showModal2} setShowModal={setShowModal2} Title="Sign Up"/> */}
                </form>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ):(
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              {/* <ModalImg src={require('./modal.jpg')} alt='camera' /> */}
              <ModalContent>
                <form onSubmit={handleSubmit}>
                  <h1  className='sign__up__head'>Sign Up</h1>
                  {/* <FormInput placeholder="Username" setUsername={setUsername}/> */}
                  {/* <FormInput refer={usernameRef} placeholder="Username"/> */}
                  {inputsSignUp.map((input) => (
                    <FormInput 
                      key={input.id}
                      {...input} 
                      value={valuesSignUp[input.name]}
                      onChange={onChange}
                    />
                  ))}
                  {/* <FormInput name="username" placeholder="Username" />
                  <FormInput name="email" placeholder="Email" /> */}
                  {/* <h5 className='forgot_pass'>Forgot password ?</h5> */}
                  <Button children="Sign Up"/>
                  <h5 onClick={openModal2} className='account_phase'>Have account ? Sign In</h5>
                  {/* <Modal2 showModal={showModal2} setShowModal={setShowModal2} Title="Sign Up"/> */}
                </form>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};