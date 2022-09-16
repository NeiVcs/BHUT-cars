import React, { useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBBtn,
} from 'mdb-react-ui-kit'

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false)

  return (
    <MDBNavbar expand='md' dark bgColor='dark' >
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>
          <img
            src='src/assets/icon.png'
            width='80'
            alt='icon'
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBBtn color='info' aria-current='page' href='/CreateCar'>
                Cadastre agora seu carro!
              </MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}