import React from 'react'
import App from './App'
const Review = ({ data }) => {
    const [index, setIndex] = React.useState(0);
    const prevButton = () => {
        setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    }
    const { name, job, image, text } = data[index];

    const nextButton = () => {
        setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }

    const randomButton = () => {
        setIndex(Math.floor(Math.random() * data.length));
    }
    return (
        <div>
            <h1 id="review-heading">Our Reviews</h1>
            <div className='review'>
                <h2 id='author'>{name}</h2>
                <h3 id='job'>{job}</h3>
                <p id='info'>{text}</p>
                <img className='person-img' src={image} alt={name} id='person-img' />
            </div>
            <button onClick={prevButton} id='prev-btn'>Prev</button>
            <button onClick={nextButton} id='next-btn'>Next</button>
            <button onClick={randomButton} id='random-btn'>Surprise Me</button>
        </div>
    )
}

export default Review
