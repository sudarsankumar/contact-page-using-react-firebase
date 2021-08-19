import React , {useState} from 'react'
import "../App.css"
import { db } from '../Firebase'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [load, setLoad] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoad(true)
        db.collection('contact').add({
            name: name,
            email : email,
            message : message
        })
        .then(() => {
            alert('Thank you for your response')
            setLoad(false)
        })
        .catch(error => {
            alert(error.message)
            setLoad(false)
        })
        setName('')
        setEmail('')
        setMessage('')
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Form</h1>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" autoFocus required placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            <label for="email">Email</label>
            <input type="text" name="email" id="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label for="message">Message</label>
            <textarea name="message" id="message" required cols="30" rows="10" placeholder="Leave your message" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
            <button type="submit" style={{background : load ? "ccc" : "rgb(2, 2, 110)"}}>Send Message</button>
        </form>
    )
}

export default Contact
