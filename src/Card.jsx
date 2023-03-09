//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
  return (
    <div>
      <h2>Tu artista favorito es: {props.name}. Y tu canción favorita es: {props.song} Definitivamente tenés buen gusto!</h2>

    </div>
  );
}

export default Card;
