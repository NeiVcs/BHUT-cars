import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            &copy; 2022 Copyright:{' '}
            <a className='text-light' href='https://mdbootstrap.com/'>
                NeiVcs
            </a>
        </div>
    </MDBFooter>
  )
}