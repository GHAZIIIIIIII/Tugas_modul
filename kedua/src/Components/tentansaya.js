import React from "react";
import '../CSS/tentang.css'

class Tentang extends React.Component {
    render() {
        return (
            <div class="tentangs">
                <div class="gambar">
                        <img src="../image/foto.jpg" alt=""></img>
                    </div>
                <div class="perkenalan">
                    <div class="judulper">
                        <span>Laman Tentang <br /> Saya</span>
                    </div>
                    <div class="isiper">
                        <p>Nama lengkap saya adalah Mochammad Ghazi Alfathin, saya lahir di Surabaya, 28 Februari 2007,
                            saya suka bermain game, bola, dan olahraga. Saya tidak terlalu mahir dalam coding.</p>
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default Tentang;