import styled from 'styled-components';

const Item = styled.div`
  background: #333333;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: inline-block;
  margin-right: 10px;
  min-height:400px;

  .image-container {
    position: relative;
  }
  .char-name-container {
    position: absolute;
    background: rgba(0,0,0,0.6);
    bottom: 0;
    width: 100%;
    color: #ccc;
  }
  }`;

export default Item;