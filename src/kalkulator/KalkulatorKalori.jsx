import React, { useSyncExternalStore } from 'react';
import { useState } from 'react';

function KalkulatorKalori() {
    //Membuat state dari aplikasi nya
    const { weight, setWeight } = useState(0);
    const { height, setHeight } = useState(0);
    const { usia, setUsia } = useState(0);
    const { kalori, setKalori } = useState('');
    const { pesan, setPesan } = useState('')

    //logic 

    let calcKalori = (event) => {
        event.preventDefault()
        if (weight === 0 || height === 0 ) {
            alert('Harap Masukan Angka Yang Benar')
        }
        else {
            let kalori = (weight/(height * height)*703)
            setKalori(kalori.toFixed(1))
        }
    }


//reload
let reload = () =>{
window.location.reload()
}




    return (
        <div>
            <div className="container">
                <h2>Penghitug Kalori</h2>
                <form onSubmit={calcKalori}>
                    <div>
                        <label>Weight(Kg)</label>
                        <input
                            type="text"
                            placeholder='Masukan Berat Bandan'
                            value={weight}
                            onChange={(event) => setWeight(event.target.value)}

                        />
                    </div>
                    <div>

                        <label>Height(Kg)</label>
                        <input
                            type="text"
                            placeholder='Masukan Berat Bandan'
                            value={height}
                            onChange={(event) => setHeight(event.target.value)}

                        />
                    </div>

                    <div>

                        <label>Usia(Tahun)</label>
                        <input
                            type="text"
                            placeholder='Masukan Usia Anda'
                            value={usia}
                            onChange={(event) => setUsia(event.target.value)}

                        />
                    </div>

                    <div>
                        <button className='btn' type='submit'>Submit</button>
                        <button className="btn btn-outline" onClick={reload} type='submit'>reload</button>
                    </div>

                    <div className="center">
                        <h3>Jumlah Kalori yang Kamu butuhkan:{kalori}</h3>
                        <p>{pesan}</p>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default KalkulatorKalori;