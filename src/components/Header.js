/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from "styled-components"

function Header() {
  return (
  <Nav>
    
    <NavMenu>
        <a>
            
            <span>HOME</span>
        </a>
        <a>
            
            <span>SEARCH</span>
        </a>
        <a>
            
            <span>WATCHLIST</span>
        </a>
        <a>
      
            <span>ORIGINALS</span>
        </a>
        <a>
        
            <span>MOVIES</span>
        </a><a>
            
            <span>SERIES</span>
        </a>
        
       


    </NavMenu>
  </Nav>


  )
}

export default Header
const Nav = styled.nav`
height:70px;
background: #FFFF00;
display: flex;
align-items: center;
padding: 0 36px;


`


const NavMenu = styled.div`
display:flex;
margin-left:25px;
align-items:center;
a{
    display:flex;
    align-items: center;
    padding:0 12px;
    cursor:pointer;
    

a:hover{
    filter: brightnesss(70%);
}
img{
    height:20px;
}
span{
    font-size: 13px;
    letter-spacing: 1.42px;
    position:relative;

    &:after {
        content: "";
        height: 2px;
        position: absolute;
        background:white;
        left:0;
        right:0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX();

    }

  
}
 &:hover{
    span:after{
        tranform:scaleX(1);
        opacity: 1;
    }
 }   
}
`


