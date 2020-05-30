import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px 20px 0px;

  h1 {
    margin-right: 20px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 5px;
  }
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
  margin-top: 5px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  text-justify: center;
  text-align: center;
  width: 100%;
  margin-top: 5px;
`;

export const Star = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  p {
    margin-left: 8px;
  }
`;
