import React from 'react'
import todo_icon from '../assets/check-list.png';

const Header = () => {
  return (
    <header className='text-center mb-2 p-2'>
        <div className='flex items-center justify-center gap-2'>
            <img src={todo_icon} alt="Todo_icon" width="30px" height="30px"/>
            <h1 className='text-3xl font-bold mb-2 text-[#0bd4ea]'>Todo List App</h1>
        </div>   
        <p className='text-md'>Stay Organized and Manage Your Tasks Efficiently</p>
    </header>
  )
}

export default Header;
