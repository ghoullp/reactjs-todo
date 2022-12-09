import React, { memo } from 'react'

const Header = () => {
  return (
    <div className='bg-success text-white py-2 px-3 text-center text-uppercase rounded mb-3'>
      <h3>Todo App ReactJS</h3>
    </div>
  )
}
export default memo(Header)