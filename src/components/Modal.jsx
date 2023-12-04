import '../utils/modal.css'

function Modal({openModal, setOpenModal, text}) {
    
    return (
        <>
        {openModal ? 
            (<div className='modal'>
                <p>{text}</p>
                <button onClick={() => setOpenModal(false)}>X</button>
            </div>)
        : null}
        </>
    )
}

export default Modal