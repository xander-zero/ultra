import React, { useEffect, useState } from 'react'
import {FaTimes,FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Button } from '../../globalStyles';
import { MobileIcon, Nav, NavbarContainer, NavBtnLink, NavIcon, NavItem, NavItemBtn, NavLinks, NavLogo, NavMenu } from './Navabar.elements';



const Navbar =()=>{
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);

    const handleClick=()=>setClick(!click)
    const showButton=()=>{
        if(window.innerWidth< 960){
            setButton(false)
        }else {
            setButton(true)
        }
    }

    useEffect(()=>{
        showButton()
        window.addEventListener("resize",showButton)
    },[])

    return (
        <>
        <IconContext.Provider value={{color:"#fff"}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon />
                    ULTRA
                </NavLogo>
                <MobileIcon
                onClick={handleClick}
                >
                    {click ? <FaTimes /> :  <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/service'>Service</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/product'>Product</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/about'>About</NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to='/sign-up'>
                                <Button primary>
                                    SIGN UP
                                </Button>
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink to='/sing-in'>
                                <Button  fontBig primary>
                                    SIGN IN
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
       </IconContext.Provider>

        </>
    )
}
export default Navbar;