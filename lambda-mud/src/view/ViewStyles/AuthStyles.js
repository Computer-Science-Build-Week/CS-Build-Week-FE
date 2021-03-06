import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -9em; /*set to a negative number 1/2 of your height*/
  margin-left: -150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgrey;
  justify-content: center;

  h1 {
    font-size: 24px;
    text-align: center;
    padding: 10px;
    width: 100%;
    height: 100%;
  }
  span {
    margin: 10px 0;
    text-align: center;
    a {
      color: #999;
    }
  }
  form {
    /* border: 1px #999 solid; */
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    margin: auto;
    width: 100%;
    height: 220px;
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/rip.svg)
      bottom center;
    background-size: 150%;

    input {
      width: 200px;
      height: 30px;
      margin: 10px 0;
      font-size: 14px;
      border: 1px solid #999;
      border-radius: 3px;
      padding: 0 10px;
    }

    input[type="submit"] {
      background: #999;
      color: #fff;
      border-radius: 3px;
      padding: 0 10px;
      text-transform: uppercase;
      font-weight: bold;
      border: none;
      cursor: pointer;

      &:disabled {
        background: #ccc;
      }
    }
  }
`;
