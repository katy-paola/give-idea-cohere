const Modal = ({ children, setShow }) => {
  return (
    <div>
      <div className='block' onClick={setShow} />
      <div className='modal'>
        <div className='modal-content'>
          <span className='span-close' onClick={setShow}>
            <img src='/icon/x-circle.svg' alt='' className='close' />
          </span>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
