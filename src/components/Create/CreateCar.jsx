import React, { useState } from 'react';

import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

import './CreateCar.css'

export default function CreateCar() {

    const API = 'http://api-test.bhut.com.br:3000/api/cars'

    const [title, setTitle] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState("")
    const [age, setAge] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()

        const car = { 
            title,
            brand,
            price,
            age
        }

        await fetch(API, {
            method: "POST",
            body: JSON.stringify(car),
            headers: {
                "Content-Type": "application/json",
            },
        })

        setTitle('')
        setBrand('')
        setPrice('')
        setAge('')
    }


  return (
    <MDBContainer fluid id='create-car'>
        <MDBRow className='row-cols-1 row-cols-md-2 g-5'>
            <MDBCol>  
                <MDBContainer id='car-container'>
                    <MDBCardImage src='src/assets/carImage.jpg' id='car-image'></MDBCardImage>
                    <MDBInput label='Fotos' id='formControlDefault' type='text' disabled/>
                </MDBContainer>
            </MDBCol>
            <MDBCol> 
                <MDBContainer>
                    <form onSubmit={handleSubmit}>
                        <h1>Cadastre aqui seu carro</h1>
                        <MDBInput
                            className='mb-3' 
                            label='Fabricante'
                            type='text' 
                            onChange={(e) => setBrand(e.target.value)} 
                            value={brand || ""}
                            required/>
                        <MDBInput
                            className='mb-3'  
                            label='Modelo'
                            type='text' 
                            onChange={(e) => setTitle(e.target.value)} 
                            value={title || ""}
                            required/> 
                        <MDBInput 
                            className='mb-3' 
                            label='Preço'
                            type='text' 
                            onChange={(e) => setPrice(e.target.value)} 
                            value={price || ""}
                            required/> 
                        <MDBInput 
                            className='mb-3' 
                            label='Ano'
                            type='number' 
                            onChange={(e) => setAge(e.target.value)} 
                            value={age || ""}
                            required/> 
                        <MDBBtn onClick={handleSubmit} className="m-2">Salvar</MDBBtn>
                        <MDBBtn href='/' className="m-2">Cancelar</MDBBtn>
                    </form>
                </MDBContainer>
            </MDBCol> 
        </MDBRow>
    </MDBContainer>
  );
}