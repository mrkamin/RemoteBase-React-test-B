import React, { useState } from 'react'

function Movieform() {
const [formData, setFormData] = useState({
  name: '',
  ratings: '',
  duration: '',
});

const handleInputChange = (e) => {
  const {id, value} = e.target;
  setFormData({
    ...formData,
    [id]: value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('form Data:', formData);

  setFormData({
    name: '',
    ratings: '',
    duration: '',
  });
};

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ handleSubmit }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              value={formData.ratings}
              onChange={handleInputChange}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              value={formData.duration}
              onChange={handleInputChange}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
