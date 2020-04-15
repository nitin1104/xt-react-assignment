import styled from 'styled-components';

const Filter = styled.div`
    background: transparent;
    border: 1px solid ${props => props.theme.offWhite};
    position: relative;
    display: block;
    margin-bottom: 20px;
    h3 {
        text-transform: uppercase;
        display:block;
        text-align:center;
        font-size: 1rem;
        margin-top: 1rem;
    }
  ul {
    padding: 0 20px;
    list-style: none;
    li {
      font-size: 1.2rem;
      padding: 10px 0;
      line-height: 0.5rem;
    }
    .checkbox-value {
      color: ${props => props.theme.terracotta};
      margin-left: 10px;
    }
  }
  .filter-name {
    margin-left: 10px;
    font-size: 14px;
  }
  }`;

export default Filter;