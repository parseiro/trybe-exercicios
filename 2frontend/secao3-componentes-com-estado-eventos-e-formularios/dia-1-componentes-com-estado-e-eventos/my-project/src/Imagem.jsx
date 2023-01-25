import {memo} from "react";

function Imagem({mensagem}) {
    console.log('renderizando imagem');

    return (
      <>
        <p>{mensagem}</p>
      </>
    );
}

export default memo(Imagem);
