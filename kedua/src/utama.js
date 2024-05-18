import React from "react";
import {Routes, Route} from 'react-router-dom'


import Beranda from "./Components/beranda";
import Karya from "./Components/karya";
import Kontak from "./Components/kontak";
import Tentang from "./Components/tentansaya";
import Gallery from "./Components/gallery";
import Cart from "./Components/cart";
import Pegawai from "./Components/pegawai";

const Utama = () => (

    <Routes>
        <Route exact path="/" element={<Beranda/>}/>
        <Route path="/TentangSaya" element={<Tentang/>}/>
        <Route path="/Karya" element={<Karya/>}/>
        <Route path="/Kontak" element={<Kontak/>}/>
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Pegawai" element={<Pegawai/>} />
    </Routes>


)

export default Utama;