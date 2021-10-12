import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../actions/postActions';
import EventCard from '../components/EventCard';
import Loader from '../components/Loader';
import Message from '../components/Message';
import '../style.css'

export const HomeScreen = () => {

    const dispatch = useDispatch();
    const showPosts = useSelector(state => state.showPosts)
    const { loading, error, posts } = showPosts

    useEffect(() => {
        console.log("hello");
        dispatch(listPosts());
    }, [dispatch])

    return (
        <div>
            <Button className='mx-3 my-3 py-3' variant='primary'><Link to='/createpost' ><i className='fas fa-plus'> Create Event</i></Link></Button>
            {loading ? <Loader /> : error ? <Message variant='success' children={error} /> : (
                <>
                    {posts.map(post => (
                        <EventCard 
                            key={post._id}
                            id={post._id}
                            eventName={post.eventName}
                            date={post.date}
                            time={post.time}
                            location={post.location}
                            imageUrl={post.imageUrl}
                            isLiked={post.isLiked}
                        />
                    )
                    )
                    }
                </>
            )}
        </div>
    )
}
