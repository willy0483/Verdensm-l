import styled from "styled-components";

export const ContactStyled = styled.section`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 2rem 0;
  }
`;

export const ContactForm = styled.form`
  margin-top: 1rem;
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactInput = styled.div`
  display: flex;
  justify-content: space-between;

  input,
  textarea {
    width: 300px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
    &::placeholder {
      color: #ccc;
    }
  }

  input {
    height: 30px;
  }
  textarea {
    height: 100px;
    resize: none;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    padding: 10px 20px;
    background-color: #f7ebec;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
`;
