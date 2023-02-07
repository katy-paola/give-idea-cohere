import { useState } from 'react'
import { getProposalFromCohere } from './service/getProposalFromCohere.js'
import Modal from './components/Modal.jsx'

const App = () => {
  const [idea, setIdea] = useState('')
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    const response = await getProposalFromCohere()
    setLoading(false)
    setIdea(response)
    handleShow()
  }

  const handleShow = () => {
    setShow(!show)
  }

  const isIdeadGenerated = idea?.text

  return (
    <div className='container'>
      <header className='header'>
        <h1 className='title'>¿Sin ideas para tu proyecto con
          <span className='span-logo'>
            <img src='/img/logo-cohere.svg' alt='Logo Co:here' width='100px' className='img-logo' />
          </span>
          ?
        </h1>
      </header>
      <main className='main'>
        <figure className='figure'>
          <img src='/img/idea-img.svg' alt='' className='img' />
        </figure>
        <p className='paragraph'>
          Deja que te ayude con una propuesta aleatoria generada por la propia IA de Co:here.
        </p>
        <button className='button' onClick={handleClick}>
          {loading
            ? (
              <>
                <svg
                  width='20' height='20' fill='currentColor' className='spin-louder' viewBox='0 0 1792 1792'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z'
                  />
                </svg>
                Generando propuesta...
              </>
              )
            : (
              <>Generar propuesta</>
              )}
        </button>

      </main>
      <footer className='footer'>
        <div className='info'>
          <img src='/icon/logo-github.svg' alt='Logo GitHub' className='logo-github' />
          <p className='author'>Made with
            <span>
              <img src='/icon/heart.svg' alt='Heart' className='heart' />
            </span>
            by <a href='#'>Andrés</a> y <a href='#'>Katy</a>
          </p>
        </div>
      </footer>

      {
        show && (
          <Modal setShow={handleShow}>

            <h2 className='modal-subtitle'>Idea generada</h2>

            <p
              dangerouslySetInnerHTML={{ __html: idea?.text }}
              className='modal-idea'
            />

            <div>
              {isIdeadGenerated && (
                <a className='deepl' href={`https://www.deepl.com/es/translator#en/es/${idea?.text}`} target='_blank' rel='noreferrer'>
                  Traducir en DeepL
                </a>)}
            </div>
          </Modal>)
      }
    </div>

  )
}

export default App
