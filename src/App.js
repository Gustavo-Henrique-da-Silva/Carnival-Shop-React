import React from 'react';
import Header from './components/header';
import Main from './components/main';

//Lembrando que o elemento "class" das tags HTML aqui é chamado de ClassName
//Não existe exatamente nenhum problema em utilizar só class, mas o React irá "chiar" muito
const App = () => {
  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  );
};

export default App;
