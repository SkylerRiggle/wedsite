import React from 'react';
import '../styles/Navbar.css';
import Signatures from '../images/signature.png';

const Registry = 'https://www.amazon.com/wedding/malorie-larman-skyler-riggle--october-2022/registry/3DTZ7NLBAOJF3' as string
const Photos = "https://drive.google.com/drive/folders/1zGVOfb_aMqBbfRFDyh2XfNqCvc7_rLrv" as string

function Navbar() {
  return (
    <div className='bar'>
        <img src={Signatures} alt="signature" className='icon'/>
        <p className='fancy-title' style={{color:'white', paddingLeft:'1vw', cursor:'pointer', fontSize:'3vw'}} 
        onClick={(e) => NavigateTo('header')}>Wed-Site</p>

        <ul className='nav-list'>
            <li>
                <button className='nav-link' onClick={(e) => NavigateTo('rsvp')}>RSVP</button></li>
            <li>
                <button className='nav-link' onClick={(e) => NavigateTo('schedule')}>SCHEDULE</button></li>
            <li>
                <button className='nav-link' onClick={(e) => NavigateTo('venue')}>VENUE</button></li>
            <li>
                <a href={Registry} className='nav-link'>REGISTRY</a></li>
            <li>
                <a href={Photos} className='nav-link'>PHOTOS</a></li>
            <li>
                <button className='nav-link' onClick={(e) => NavigateTo('faq')}>FAQ</button></li>
        </ul>
    </div>
  );
}

function NavigateTo(id: string) {
    var element = document.getElementById(id) as HTMLElement
    window.scrollTo(0, element.offsetTop - 100)
}

export default Navbar;
