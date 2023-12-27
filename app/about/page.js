import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <>
      <Navbar />
      <div class="container team-section">
        <h2 class="text-center mb-4">Meet Our Team</h2>
        <div class="row">
          <div class="col-md-4 team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Web Developer</p>
          </div>
          <div class="col-md-4 team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Graphic Designer</p>
          </div>
          <div class="col-md-4 team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Bob Johnson</h3>
            <p>Marketing Specialist</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page