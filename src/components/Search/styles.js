import styled from 'styled-components';

export const Container = styled.div`
  background: #242435;
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  align-items: center;
  justify-content: center;

  h1 {
    color: #f5f5f6;
    font-size: 25px;
    font-weight: 500;
    text-align: center;

    span {
      color: #b6b8bd;
      font-family: 'Poppins', sans-serif;
      font-style: italic;
      font-weight: 200;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: row;

  input {
    width: 250px;
    flex: 1;
    padding: 10px 15px;
    border: 0px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: bold;
    background: #342e47;
    color: #696a6d;
    letter-spacing: 0.3px;
  }
`;
