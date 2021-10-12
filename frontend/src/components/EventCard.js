import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Image, Row, Button } from 'react-bootstrap'
import { listPosts, updatePost } from '../actions/postActions'
import '../style.css'

const EventCard = (props) => {
    const id = props.id
    const [liked, setLiked] = useState(props.isLiked)

    const dispatch = useDispatch()

    const postUpdate = useSelector(state => state.postUpdate)
    const { loading, error, updatedPost } = postUpdate

    useEffect(() => () => {
        console.log("Hello eventcard");
        dispatch(listPosts());

    }, [error])

    async function clickHandler() {

        dispatch(updatePost(id, !liked))
        setLiked(!liked)
    }

    return (
        <div>
            <Container className='event-card'>
                <Row>
                    <Col sm={3} className='event-image'>
                        <Image src={props.imageUrl} fluid />
                    </Col>
                    <Col sm={6} className='event-desc'>
                        <h2>{props.eventName}</h2>
                        <p>{props.time},{props.date}</p>
                        <p>{props.location}</p>
                    </Col>
                    <Col sm={3} >
                        <Row className='icons'>
                            <Col sm={2}>
                                <i class="fas fa-upload"></i>
                            </Col>
                            <Col sm={2}>
                                <div onClick={() => clickHandler()}>{liked ? (<i class="fas fa-heart"></i>) : (<i class="far fa-heart"></i>)}</div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default EventCard
