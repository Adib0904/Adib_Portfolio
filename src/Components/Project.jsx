import React from 'react'
import { PROJECTS } from '../constants'
import { animate, motion } from 'framer-motion'

export const Project = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
      <div>
        {
          PROJECTS.map((pro, ind) =>
            <div key={ind} className='mb-8 flex flex-wrap lg:justify-center'>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4">
                <img
                  src={pro.image}
                  width={250}
                  height={250}
                  alt={pro.title}
                  className='mb-6 rounded'
                />
              </motion.div>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4">
                <a href={pro.url}><h6 className='mb-2 font-semibold'>{pro.title} &#128279;</h6></a>
                <p className='mb-4 text-neutral-400'>{pro.description}</p>
                {
                  pro.technologies.map((tech, i) =>
                    <span key={i} className='mr-2 rounded  bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                  )
                }
              </motion.div>
            </div>

          )
        }
      </div>
    </div>
  )
}
