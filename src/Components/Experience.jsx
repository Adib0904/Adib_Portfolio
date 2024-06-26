import React from 'react'
import { EXPERIENCES } from '../constants'
import { animate, motion } from 'framer-motion'

export const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>Education</motion.h2>
      <div>
        {
          EXPERIENCES.map((exp, ind) =>

            <div key={ind} className='mb-8 flex flex-wrap lg:justify-center'>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-400'>{exp.year}</p>
              </motion.div>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4">
                <h6 className='mb-2 font-semibold'>{exp.college} - <span className='text-sm text-purple-100'>{exp.strem}</span></h6>
                <p className='mb-4 text-neutral-400 '>{exp.description}</p>
                {
                  exp.grade.map((tech, i) =>
                    <span key={i} className='mr-2 mt-4 bg-neutral-900 px-2 py-2 text-sm font-medium text-purple-800'>{tech}</span>
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
