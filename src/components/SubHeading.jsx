import React from 'react'

const SubHeading = ({className, title}) => {
  return (
    <>
        <div className={className}>
            <h2 className='text-3xl text-black font-semibold font-philospher suheading_items py-2.5 capitalize inline'>{title}</h2>
        </div>
    </>
  )
}

export default SubHeading