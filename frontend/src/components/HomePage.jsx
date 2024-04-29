import React from 'react'
import machinelearning from './photos/machinelearning.jpeg'
import datanalysis from './photos/dataanalysis.png'
import Card from 'react-bootstrap/Card';
import fullstackImage from './photos/fullstack.png.jpeg'; // Import the image
import hackingImage from './photos/hacking.png.jpeg';
import '../components/style.css'
import NavbarMain from './NavbarMain';

const HomePage = () => {
  return (
    <div>
        <NavbarMain/>
        <div style={{ 
      backgroundImage: 'linear-gradient(to bottom, #f0f0f0, #ffffff)',
      padding: '20px',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className='d-flex flex-wrap justify-content-around'>
        {/* First Card */}
        <Card style={{ width: '18rem', margin: '20px', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s', ':hover': { transform: 'scale(1.05)' } }}>
          <Card.Img
            style={{ height: '200px', borderRadius: '10px 10px 0 0' }} // Set a fixed height for the image
            variant="top"
            src={fullstackImage}
          />
          <Card.Body>
            <Card.Title>Fullstack Development</Card.Title>
            <Card.Text>
              Full-stack development involves creating both the visible parts of a website (the frontend) and the behind-the-scenes functionality (the backend). This means full-stack developers handle everything from designing how a website looks to how it works, making them versatile and capable of building entire web applications on their own.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Second Card */}
        <Card style={{ width: '18rem', margin: '20px', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s', ':hover': { transform: 'scale(1.05)' } }}>
          <Card.Img
            style={{ height: '200px', borderRadius: '10px 10px 0 0' }} // Set a fixed height for the image
            variant="top"
            src={hackingImage}
          />
          <Card.Body>
            <Card.Title>Hacking</Card.Title>
            <Card.Text>
              A hacking course teaches individuals about cybersecurity and ethical hacking, covering topics like identifying vulnerabilities, conducting penetration tests, and using hacking tools responsibly. Students gain practical skills through hands-on exercises, learning how to protect systems and networks from cyber threats.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Third Card */}
        <Card style={{ width: '18rem', margin: '20px', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s', ':hover': { transform: 'scale(1.05)' } }}>
          <Card.Img
            style={{ height: '200px', borderRadius: '10px 10px 0 0' }} // Set a fixed height for the image
            variant="top"
            src={datanalysis}
          />
          <Card.Body>
            <Card.Title>Data Analytics</Card.Title>
            <Card.Text>
              A data analytics course teaches data analysis for informed decisions. It covers topics like data visualization, statistical analysis, predictive modeling, and data-driven decision-making. Students learn to interpret data, derive insights, and make informed business decisions.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Fourth Card */}
        <Card style={{ width: '18rem', margin: '20px', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s', ':hover': { transform: 'scale(1.05)' } }}>
          <Card.Img
            style={{ height: '200px', borderRadius: '10px 10px 0 0' }} // Set a fixed height for the image
            variant="top"
            src={machinelearning}
          />
          <Card.Body>
            <Card.Title>Machine Learning</Card.Title>
            <Card.Text>
              A machine learning course delves into algorithms and models that enable computers to learn from data and make predictions. Topics include supervised and unsupervised learning, regression, classification, and neural networks. Students gain skills in data preprocessing, model training, and evaluation, essential for various applications like recommendation systems and image recognition.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
    </div>
  )
}

export default HomePage
