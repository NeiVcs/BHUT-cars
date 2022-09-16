import { useState, useEffect } from "react"
import {
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit'

import EditModal from "../Edit/EditModal"

import './Home.css'

export default function Home() {

    const API = 'http://api-test.bhut.com.br:3000/api/cars'

    const [cars, setCars] = useState([])
    const [ShowEditModal, setShowEditModal] = useState(false)

    const toggleModalShow = () => setShowEditModal(!ShowEditModal)

    const modelCarInitialState = { _id: "", title: "", brand: "", price: "", age: 0 }

    const [getModelCar, setModelCar] = useState(modelCarInitialState)

    const getCar = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setCars(data)
    }

    useEffect(() => {
        getCar(API)
    }, [])

    const handleDelete = async (id) => {
        await fetch(API + "/" + id, {
            method: "DELETE"
        })
        getCar(API)
    }

    const handleModelChange = {
        title: (title) => setModelCar({ ...getModelCar, title: title }),
        brand: (brand) => setModelCar({ ...getModelCar, brand: brand }),
        price: (price) => setModelCar({ ...getModelCar, price: price }),
        age: (age) => setModelCar({ ...getModelCar, age: age }),
    }

    const handleUpdate = async (id) => {
        await fetch(`${API}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(getModelCar)
        })
        setModelCar(modelCarInitialState)
        toggleModalShow()
        getCar()
    }

    const handleEdit = (car) => {
        setModelCar(car)
        toggleModalShow()
    }

    const onlyNumbersRegex = /[^0-9]/

    return <div id="home">
        <MDBContainer fluid>
            <MDBRow className='row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5'>
                {cars.map((car) => {
                    if (!onlyNumbersRegex.test(car.price)) {
                        return <MDBCol>
                            <MDBCard alignment="center" className="card mb-2" key={car._id}>
                                <MDBCardImage src='src/assets/carImage.jpg' position='top' alt='Imagem do carro' />
                                <MDBCardBody>
                                    <div>
                                        <p className="car-brand">{car.brand}</p>
                                        <p className="car-title">{car.title}</p>
                                        <p className="car-price">R$ {parseInt(car.price).toLocaleString()}</p>
                                        <div className="info">
                                            <p>{car.age}</p>
                                            <p>Km não informado</p>
                                        </div>
                                    </div>
                                    <MDBBtn onClick={() => handleEdit({ _id: car._id, title: car.title, brand: car.brand, price: car.price, age: car.age })} className="m-1 p-2">Editar</MDBBtn>
                                    <MDBBtn onClick={() => handleDelete(car._id)} className="m-1 p-2">Excluir</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    }
                }
                )}

                <EditModal
                    editing={getModelCar}
                    visible={ShowEditModal}
                    toggleModalShow={toggleModalShow}
                    handleEditing={handleModelChange}
                    handleUpdate={handleUpdate}
                    getCar={getCar}
                />

            </MDBRow>
        </MDBContainer>
    </div>
}