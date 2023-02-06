import React from 'react';
import Header from './components/header';
import Script from './components/script';

//Lembrando que o elemento "class" das tags HTML aqui é chamado de ClassName
//Não existe exatamente nenhum problema em utilizar só class, mas o React irá "chiar" muito
const App = () => {
  return (
    <>
      <Header></Header>
      <Script></Script>
    </>
  );
};

export default App;
