import React, {useEffect, useState} from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import emailjs from 'emailjs-com'

let firstRender = true

const Contact = ({title}) => {
    const [contactName, setContactName] = useState('')
    const [contactTel, setContactTel] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [contactMessage, setContactMessage] = useState('')
  
    const [disable, setDisabled] = useState(true)
  
    const [nameClass, setNameClass] = useState(null)
    const [telClass, setTelClass] = useState(null)
    const [emailClass, setEmailClass] = useState(null)
    const [messageClass, setMessageClass] = useState(null)
  
    const userId = 'user_K47MoKZnN8fLoMbNu779s'
    const serviceId = 'gmail'
    const adminTemplateId = 'template_admin'
    const contactTemplateId = 'template_contact'
  
    const [validationMessage, setValidationMessage] = useState('')
  
    useEffect(() => {
  
      if (firstRender === false) {
        let nbErrors = 0
  
        // erreur pour le nom : obligatoire + 3 caractères min
        const formValidationName = () => {
          if (contactName === '' || contactName.length < 3) {
            setNameClass('error')
            nbErrors++
          } else {
            setNameClass('success')
          }
        }
  
        // erreur pour le téléphone: 10 caractères min + pattern
        const formValidationTel = () => {
          if (contactTel.length > 0) {
            if (contactTel.length < 10 || isNaN(contactTel)) {
              setTelClass('error')
              nbErrors++
            } else {
              setTelClass('success')
            }
          } else {
            setTelClass(null)
          }
        }
  
        // erreur email: obligatoire + pattern
        const emailPattern = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
        const formValidationEmail = () => {
          if (contactEmail === '' || !contactEmail.match(emailPattern)) {
            setEmailClass('error')
            nbErrors++
          } else {
            setEmailClass('success')
          }
        }

        // erreur message : obligatoire + 3 caractères min
        const formValidationMessage = () => {
          if (contactMessage === '' || contactMessage.length < 3) {
            setMessageClass('error')
            nbErrors++
          } else {
            setMessageClass('success')
          }
        }
  
        formValidationName()
        formValidationTel()
        formValidationEmail()
        formValidationMessage()
  
        setDisabled(nbErrors > 0)
      }
  
      if (firstRender) {
        firstRender = false
      }
    }, [
      contactEmail,
      contactMessage,
      contactTel,
      contactName,
      setDisabled
    ])
  
    const onSubmit = event => {
      sendFeedback(adminTemplateId, {
        from_name: contactName,
        from_tel: contactTel,
        message_html: contactMessage,
        reply_to: contactEmail
      })
  
      sendFeedback(contactTemplateId, {
        from_name: contactName,
        from_tel: contactTel,
        message_html: contactMessage,
        reply_to: contactEmail
      })
  
      event.preventDefault()
    }
  
    const sendFeedback = (templateId, variables) => {
      emailjs
        .send(serviceId, templateId, variables, userId)
        .then(res => {
          setValidationMessage(
            <p
              className='alert alert-success text-center box fade show'
              role='alert'
            >
              &nbsp; Demande envoyée avec succès
              <br />
              <span className='emoticon' role='img' aria-label='thumb up'>
                &#x1f44d;
              </span>
            </p>
          )
  
          setContactName('')
          setContactTel('')
          setContactEmail('')
          setContactMessage('')
          setTimeout(cleanValidation, 5000)
        })
        .catch(err => {
          setValidationMessage(
            <p
              className='alert alert-danger text-center box fade show'
              role='alert'
            >
              err.message
            </p>
          )
          console.error('Oups : ', err)
        })
    }
  
    const cleanValidation = () => {
      setValidationMessage('')
    }
  
    return (
        <>
        <Header />
        <main className='App-main contact'>
            <h2 className="subtitle">{title}</h2>
            <div className="coordonees">
                <p>
                    <span>Adresse e-mail :</span>
                    <a href='mailto:camillechassaing.jdb@gmail.com'>camillechassaing.jdb@gmail.com</a>
                </p>
                <p>
                    <span>N° de téléphone :</span>
                    <a href='tel:+33673833827'>+33 6 73 83 38 27</a>
                </p>
            </div>

            <form className='app_form box bg-alt' onSubmit={onSubmit}>
                <div className={'form-group ' + nameClass}>
                    <label htmlFor='contact_name'>Nom<span className="required">*</span></label>
                    <input
                    type='text'
                    className='form-control'
                    id='contact_name'
                    placeholder='ex: Sophie Dupont'
                    value={contactName}
                    required
                    onChange={e => setContactName(e.target.value)}
                    />
                </div>

                <div className={'form-group ' + telClass}>
                    <label htmlFor='contact_phone'>Téléphone</label>
                    <input
                    type='tel'
                    className='form-control'
                    id='contact_phone'
                    placeholder='ex: 01 23 45 67 89'
                    value={contactTel}
                    onChange={e => setContactTel(e.target.value)}
                    />
                </div>

                <div className={'form-group ' + emailClass}>
                    <label htmlFor='contact_email'>Email<span className="required">*</span></label>
                    <input
                    type='email'
                    className='form-control'
                    id='contact_email'
                    placeholder='ex: sophie@dupont.com'
                    value={contactEmail}
                    required
                    onChange={e => setContactEmail(e.target.value)}
                    />
                </div>

                <div className={'form-group ' + messageClass}>
                    <label htmlFor='contact_message'>Message<span className="required">*</span></label>
                    <textarea
                    className='form-control'
                    id='contact_message'
                    rows='4'
                    placeholder='Bonjour,'
                    value={contactMessage}
                    required
                    onChange={e => setContactMessage(e.target.value)}
                    />
                </div>

                <div className='form-group mt-4'>{validationMessage}</div>
                <div className='flex-right'>
                    <div
                    className={
                        disable ? 'app_button mr-3 disabled' : 'app_button mr-3'
                    }
                    >
                    <button disabled={disable} type='submit'>
                        Envoyer
                    </button>
                    </div>
                </div>
            </form>
        </main>
        <Footer />
        </>
    );
};

export default Contact;