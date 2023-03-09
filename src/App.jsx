import { useState } from "react";
import { render } from "react-dom";
import Card from "./Card.jsx";

function App(props) {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [name, setName] = useState("");
  const [song, setSong] = useState("")
  const [datos, setDatos] = useState({})
  const [isMensajeDeError, setMensajeDeError] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
    console.log("El nombre del artista es", name);
  };
  
  const songHandler =(e) =>{
    setSong(e.target.value)
    console.log("La cancion favorita es",song);
  }
  const submitHandler =(e)=>{
    const data = {
      name,
      song
    }
    e.preventDefault()
    if (name.trim.legth >3 && song.length >5) {
      setDatos(data)
      console.log(datos);
      render( <Card nombre={datos.name} cancion={datos.song}></Card>)
      setMensajeDeError(false)
    }
    else{

      setMensajeDeError(true) 
    }

    

  }
  return (
    <div className="App">
      <h1>¿Quién es tu artista favorito?</h1>
      <form>
          <input
            type="text"
            id="name"
            placeholder="Ingresar nombre del artista"
            name="name"
            value={name}
            onChange={nameHandler}
          ></input>
          <br />
          <input
            type="text"
            id="song"
            placeholder="Ingrese cancion favorita"
            name="song"
            value={song}
            onChange={songHandler}
          ></input>
          <br />
          <input type="submit" value="Enviar" onSubmit={submitHandler}></input>
          {setMensajeDeError&& <span>“Por favor chequea que la información sea correcta”. </span>}
      </form>
      
     
      
      


    </div>
  );
}

export default App;
