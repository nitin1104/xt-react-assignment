import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
    red: '#FF0000',
    blue: "#33BEFF ",
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#e9e7e9',
    offWhite: '#EDEDED',
    terracotta: '#d07d28',
    darkGrey: '#333333',
    white: '#ffffff',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};


const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  padding: 2rem;
`;

injectGlobal`

  *, *:before, *:after {
    box-sizing: inherit;
  }
  .float-left {
      float: left;
  }
  .float-right {
      float: right;
  }

  .card {
    background: #333333;
    .list-group-item {
      background: none;
      padding-left: 0;
    }
    .desc-value {
      color: #d07d28;
      float: right;
      text-align: right;
  }
    .desc-label {
      color: #ffffff;
      text-transform: uppercase;
    }
    .image-container {
      position: relative;
    }
    .char-name-container {
      color: #ffffff;
      position: absolute;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      width: 100%;
      span {
        font-size: 12px;
      }
    }
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Inner>{this.props.children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;