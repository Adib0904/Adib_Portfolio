import React from 'react'
import newlogo from '../assets/mainlogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img className='mx-2 w-16  ' src={newlogo} alt="" />
      </div>
      <div className='m-8 flex item-center justify-center gap-4 text=2xl'>
        <a href="https://www.linkedin.com/in/adib-shaikh-350162266" className='text-2xl'><FaLinkedin /></a>
        <a href="https://github.com/Adib0904" className='text-2xl'><FaGithub /></a>
        <a href="https://www.instagram.com/_a.d.i.b__?igsh=MW51c3ZteWVmczJmOQ%3D%3D&utm_source=qr" className='text-2xl'><FaInstagram /></a>
      </div>
    </nav>
  )
}
