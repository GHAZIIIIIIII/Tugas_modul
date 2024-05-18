import React from "react";
import { Link } from 'react-router-dom';
import '../CSS/header.css'

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <Link to={'/'} className="logo">GH<span>AZI</span></Link>
                <ul className='navbar-ul'>
                    <li className="navbar-list"><Link to={'/'} className="link">Beranda</Link></li>
                    <li className="navbar-list"><Link to={'/TentangSaya'} className="link">Tentang Saya</Link></li>
                    <li className="navbar-list"><Link to={'/Karya'} className="link">Karya</Link></li>
                    <li className="navbar-list"><Link to={'/Kontak'} className="link">Kontak</Link></li>    
                    <li className="navbar-list"> <Link to={'/Gallery'} className="nav-link">Gallery</Link></li>
                    <li className="navbar-list"> <Link to={'/Cart'} className="nav-link">Keranjang</Link></li>
                    <li className="navbar-list"> <Link to={'/Pegawai'} className="nav-link">pegawai</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Header;

