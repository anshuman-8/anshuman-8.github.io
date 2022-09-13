import React from 'react'
import Image from 'next/image';
import ProfileImg from '../public/images/profileImage.jpg';

function Profile() {
  return (
    <div className='pt-8'>
      <div className='my-10 align-middle'>
        <Image src={ProfileImg} alt="anshuman's Image" height={'165px'} width={'165px'} className='rounded-full'></Image>
      </div>
      <div className=''>
        <h1 className='text-3xl font-bold'>I'm Anshuman Swain</h1>
        <div className='my-5'>
        <p className='text-sm text-gray-500'>I'm a CSE undergrad at Amrita Vishwa Vidhyapeetham, Kerala, batch of 2025.</p>
        <p className='text-sm text-gray-500'>I like to work with TS, JS and it's various frameworks. Python is my 2nd language of choice.</p>
        <p className='text-sm text-gray-500'>I have built many projects on AI-ML.</p>
        <p className='text-sm text-gray-500'>This website shows my contact details, past experience along with some of the projects that I have worked on.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Profile
