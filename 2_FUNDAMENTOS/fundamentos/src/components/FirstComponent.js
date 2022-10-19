// arquivo de estilo

import MyComponent from "./MyComponet";

const FirstComponent =() => {

  //essa funçao faz isso

  /*
  multi line
  */
 
return(

  <div>
    {/* algum comentario */}
    <h1>Meu primeiro componente</h1>
    <p classname="teste">meu texto</p>
    <MyComponent/>
  </div>
);

};

export default FirstComponent;