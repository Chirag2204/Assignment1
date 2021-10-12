import React, { useState, useEffect } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { createPost } from '../actions/postActions'

const CreatePostScreen = ({ history }) => {
    const [eventName, setEventName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [location, setLocation] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const dispatch = useDispatch()
    const postCreate = useSelector(state => state.postCreate)
    const { loading, error, postInfo } = postCreate

    useEffect(() => {
        if (postInfo) {
            history.push('/')
        }

    }, [postInfo, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createPost(eventName, date, time, location, imageUrl));
    }

    return (
        <Container>
            <h1 >Create Event</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler} className='py-3'>
                <Form.Group controlId='eventName' className='py-3'>
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter Event Name' value={eventName} onChange={(e) => { setEventName(e.target.value) }}></Form.Control>
                </Form.Group>
                <Form.Group controlId='date' className='py-3'>
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control type='text' placeholder='Enter Event Date' value={date} onChange={(e) => { setDate(e.target.value) }}></Form.Control>
                </Form.Group>
                <Form.Group controlId='time' className='py-3'>
                    <Form.Label>Event Time</Form.Label>
                    <Form.Control type='text' placeholder='Enter Event Time' value={time} onChange={(e) => { setTime(e.target.value) }}></Form.Control>
                </Form.Group>
                <Form.Group controlId='location' className='py-3'>
                    <Form.Label>Event location</Form.Label>
                    <Form.Control type='text' placeholder='Enter Event Location' value={location} onChange={(e) => { setLocation(e.target.value) }}></Form.Control>
                </Form.Group>
                <Form.Group controlId='imageUrl' className='py-3'>
                    <Form.Label>Event Image Url</Form.Label>
                    <Form.Control type='text' placeholder='Enter Image Url' value={imageUrl} onChange={(e) => { setImageUrl(e.target.value) }}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary' onClick={submitHandler}>Create</Button>
            </Form>
        </Container>
    )
}

export default CreatePostScreen
