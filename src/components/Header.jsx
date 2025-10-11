import React from 'react'
import todo_icon from '../assets/check-list.png';

function Header() {
  return (
    /**
     * ===================== Header Section =====================
     * - Displays the app logo and title at the top of the page.
     * - Acts as a static component — does not use any state or props.
    */
    <header className='text-center mb-2 p-2'>
        {/* ===================== Logo and Title ===================== */}
        <div className='flex items-center justify-center gap-2'>
            <img src={todo_icon} alt="Todo_icon" width="30px" height="30px"/>
            <h1 className='text-3xl font-bold mb-2 text-[#0bd4ea]'>Todo List App</h1>
        </div>

        {/* ===================== Tagline ===================== */}
        <p className='text-md'>Stay Organized and Manage Your Tasks Efficiently</p>
    </header>
  )
}

export default Header;
