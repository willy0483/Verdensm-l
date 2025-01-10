import { ContactStyled, ContactForm, ContactContainer,ContactInput } from "./Contact.Styled";
import { TitleContainer } from "../TitleContainer/TitleContainer";

import { useState, useEffect} from "react";

export const Contact = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [messageError, setMessageError] = useState("");

    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    let nameRegex = /^[a-zA-Z\s'-]+$/;

   const handleSubmit = (e) =>{
    e.preventDefault();

    let isValid = true;

    if (!emailRegex.test(email)) {
        setEmailError("*");
        isValid = false;
        console.log("email error");
        
    } else {
        setEmailError("");
    }

    if(!nameRegex.test(name)){
        setNameError("*");
        isValid = false;
        console.log("name error");
        
    }else{
        setNameError("");
    }

    if (message.length < 1) {
        setMessageError("*");
        isValid = false;
        console.log("message error");
        
    }else{
        setMessageError("");
    }

    if(!isValid){
        alert("Udfyld venligst alle felter korrekt");
    }else{
        alert("Tak for din besked");
        setEmail("");
        setName("");
        setMessage("");
    }
   }

   useEffect(() =>{
    if (!emailRegex.test(email)) {
        setEmailError("*");
    } else {
        setEmailError("");
    }
    if(!nameRegex.test(name)){
        setNameError("*");
    }else{
        setNameError("");
    }
    if(message.length < 1){
          setMessageError("*");
    }else{
        setMessageError("");
    }
   })

    return(
        <>
        <TitleContainer>KONTAKT OS</TitleContainer>
        <ContactStyled>
            <p>Udfyld og send formularen og vi vil hurtigst muligt besvare dine spørgsmål.</p>
            <ContactForm onSubmit={handleSubmit}>
                <ContactInput>
                    <div>
                <label htmlFor="Navn">Navn:</label>
                {nameError && <span style={{ color: "red" }}>{nameError}</span>}
                    </div>
                <input onChange={(e) => setName(e.target.value)} value={name}  type="text" id="Navn" placeholder="Indtast dit navn"/>
                </ContactInput>
                <ContactInput>
                    <div>
                    <label htmlFor="Email">Email:</label>
                    {emailError && <span style={{ color: "red" }}>{emailError}</span>}</div>
                    <input onChange={(e) => setEmail(e.target.value)} value={email}  id="Email" type="text" placeholder="Indtast din email" />
                </ContactInput>
                <ContactInput>
                    <div>
                    <label htmlFor="Besked">Besked:</label>
                    {messageError && <span style={{ color: "red" }}>{messageError}</span>}
                    </div>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} id="Besked"  placeholder="Indtast din besked"></textarea>
                </ContactInput>
                <ContactContainer><button>Send</button></ContactContainer>
            </ContactForm>
        </ContactStyled>
        </>
    )
}