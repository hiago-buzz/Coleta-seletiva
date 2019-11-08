import React, {useState, useEffect} from 'react'
import './Banner.scss'
import a from "../img/carrosel1.jpg";
import b from "../img/carrosel2.jpg";
import c from "../img/carrosel3.jpg";
import d from "../img/carrosel4.jpg";
import Back from "../img/back.png";
import Next from "../img/next.png";



const Banner = () => {

    const [count, setCount] = useState(1)
    const [imagem, setImagem] = useState(a)

    const mais =()=> {
        if (count < 4){
            setCount(count + 1)
        }
        else{
            return
        }
    }

    const menos =()=> {
        if (count == 1){
            return
        }
        else{
            setCount(count - 1)
        }
    }

    const trocarFoto =()=>{
        switch(count){
            case 1: setImagem(a);
            break;

            case 2: setImagem(b)
            break;

            case 3: setImagem(c)
            break;

            case 4: setImagem(d)
            break;
        }
    } 
    useEffect(() => {
        trocarFoto();
    }, [count])

    
    return (
        <div className="Banner">
            <div>
            <img onClick={menos} src={Back} alt="voltar"/> 
            <img onClick={mais}  src={Next} alt="proximo"/> 
            </div>
           <img src={imagem} alt="Banner"/>
        </div>

   
    )
}

export default Banner
