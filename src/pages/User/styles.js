import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

export const Container = styled.div`
  height: 100%;
  margin: 10px 20px 0px;

  h1 {
    margin-right: 20px;
  }
`;

export const StyledCard = withStyles({
  root: {
    background: '#342e47',
    color: '#fff',
    fontFamily: 'Roboto, sans-serif',
  },
})(Card);

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 5px;
  }

  img {
    height: 116px;
    width: 110px;
    border-radius: 50%;
    border: 3px solid #fff;
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

  svg {
    margin-right: 5px;
  }
`;

export const Star = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  p {
    margin-left: 8px;
  }
`;

export const Title = styled.h3`
  font-weight: 100;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.start ? 'flex-start' : 'flex-end')};
  padding: 20px;
`;

export const Button = styled.button`
  border: 0;
  background: none;
  display: flex;
  align-items: center;

  &:disabled {
    opacity: 0.3;
  }
`;

export const Hidden = styled.div`
  display: hidden;
`;
