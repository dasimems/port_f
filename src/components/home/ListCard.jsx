import React from 'react'

const ListCard = ({icon, title, ...props}) => {
  return (
    <div className='banner-list-card flex-container align-center' {...props}>

        <div className='icon-container flex-container align-center justify-center'>
            {icon}
        </div>

        <div className='list-title flex-container align-center'>
            <p>{title}</p>
        </div>
      
    </div>
  )
}

export default ListCard
