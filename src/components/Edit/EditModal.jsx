import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
    MDBInputGroup,
} from 'mdb-react-ui-kit'

export default function EditModal(props) {
    const API = 'http://api-test.bhut.com.br:3000/api/cars'

    const handleUpdate = async (id) => {
        await props.handleUpdate(id)
        props.getCar(API)
    }

    return (<>
        <MDBModal staticBackdrop tabIndex='-1' show={props.visible}>
            <MDBModalDialog size='lg' centered>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>{`Editando o carro da marca ${props.editing.title}`}</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={props.toggleModalShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBInputGroup textBefore='Titulo' className='mb-3'>
                            <input value={props.editing.title} onChange={(evt) => props.handleEditing.title(evt.target.value)} className='form-control' type='text' placeholder="Digite a nova marca" />
                        </MDBInputGroup>
                        <MDBInputGroup textBefore='Marca' className='mb-3'>
                            <input value={props.editing.brand} onChange={(evt) => props.handleEditing.brand(evt.target.value)} className='form-control' type='text' placeholder="Digite o novo modelo" />
                        </MDBInputGroup>
                        <MDBInputGroup textBefore='Preço' className='mb-3'>
                            <input value={props.editing.price} onChange={(evt) => props.handleEditing.price(evt.target.value)} className='form-control' type='text' placeholder="Digite o novo preço" />
                        </MDBInputGroup>
                        <MDBInputGroup textBefore='Ano' className='mb-3'>
                            <input value={props.editing.age} onChange={(evt) => props.handleEditing.age(evt.target.value)} className='form-control' type='number' placeholder="Digite o novo ano" />
                        </MDBInputGroup>
                    </MDBModalBody>
                    <div className='d-flex justify-content-center'>
                        
                    </div>
                    <MDBModalFooter>
                        <MDBBtn  color='secondary' onClick={props.toggleModalShow}>
                            Fechar
                        </MDBBtn>
                        <MDBBtn  onClick={() => handleUpdate(props.editing._id)}>Salvar edições</MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    </>)
}