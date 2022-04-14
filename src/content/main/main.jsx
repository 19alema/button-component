import React, { useState } from 'react';
import './main.css';
import {
    FaBars
} from 'react-icons/fa'



import Navbar from '../navbar/navbar';
import ButtonContent from '../buttonContent/buttonContent';
export default function Main() {
    const [sidebar, sidbarOpen] = useState(false);

    function toggleSideBar() {
        sidbarOpen(prev => !prev)
    }

    return (
        <div className="main_section">
            <Navbar sidebar = {
                sidebar
            }
            />
            <div>
                <FaBars className="sidebar" onClick={toggleSideBar} />
                <ButtonContent />
            </div>
           
        </div>
    )
}