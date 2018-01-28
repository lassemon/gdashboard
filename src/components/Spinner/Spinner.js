import React from 'react';
import styled from 'styled-components';

class Spinner extends React.Component{
  render(){
    const SpinnerContainer = styled.div`
      margin: 0 auto;
      width: 6em;
      height: 6em;
      text-align: center;
      font-size: 10px;

      > div {
        background-color: #ff8551;
        height: 100%;
        width: 10%;
        margin: 0 .2em 0 0;
        display: inline-block;

        -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
        animation: sk-stretchdelay 1.2s infinite ease-in-out;
      }

      .rect2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
      }

      .rect3 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
      }

      .rect4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
      }

      .rect5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
      }

      @-webkit-keyframes sk-stretchdelay {
        0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
        20% { -webkit-transform: scaleY(1.0) }
      }

      @keyframes sk-stretchdelay {
        0%, 40%, 100% {
          transform: scaleY(0.4);
          -webkit-transform: scaleY(0.4);
        }  20% {
          transform: scaleY(1.0);
          -webkit-transform: scaleY(1.0);
        }
      }
    `;

    return (
      <SpinnerContainer>
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </SpinnerContainer>
    );
  }
};

export default Spinner;
