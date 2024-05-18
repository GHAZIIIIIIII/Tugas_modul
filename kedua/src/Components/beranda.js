import React from "react";
import "../CSS/beranda.css"

class Beranda extends React.Component {
render(){
    return(

    <div>
        <div className="Beranda">
             <div className="a">
            <p>Selamat Datang</p>
            </div>

              <div className="b">
            <p>Ini adalah website yang saya buat untuk menyelesaikan tugas</p>
                 </div>
        </div>
        <div className="c">
            <a href="TentangSaya" className="c1"> <button className="button">click</button></a>
        </div>
    </div>
        


        )       
    }
}

export default Beranda;