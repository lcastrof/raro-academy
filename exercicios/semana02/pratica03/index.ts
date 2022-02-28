// Questão 1

const desafio1asRosasNaoFalam = () => {
  type callbackFn = () => void;
  const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);
  
  // métodos de versos. Estes métodos deverão ser modificados.
  const queixoMeAsRosas = (callback: callbackFn) => {
    setTimeout(() => {
      console.log('Queixo-me às rosas');
      callback();
    }, geraIntervaloAleatório());
  };

  const masQueBobagem = (callback: callbackFn) => {
    setTimeout(() => {
      console.log('Mas que bobagem');
      callback();
    }, geraIntervaloAleatório());
  };

  const asRosasNaoFalam = (callback: callbackFn) => {
    setTimeout(() => {
      console.log('As rosas não falam');
      callback();
    }, geraIntervaloAleatório());
  };

  const simplesmenteAsRosasExalam = (callback: callbackFn) => {
    setTimeout(() => {
      console.log('Simplesmente as rosas exalam');
      callback();
    }, geraIntervaloAleatório());
  };

  const oPerfumeQueRoubamDeTi = () => {
    setTimeout(() => {
      console.log('O perfume que roubam de ti, ai');
    }, geraIntervaloAleatório());
  };

  // Tentativa de cantar a música. Este bloco precisa ser modificado.
  queixoMeAsRosas(() => 
    masQueBobagem(() => (
      asRosasNaoFalam(() => (
        simplesmenteAsRosasExalam(() => (
          oPerfumeQueRoubamDeTi()
        ))
      ))
    )));
}

// desafio1asRosasNaoFalam();

// ==========================================================================================

// Questão 2
const despertador = (intervaloEmSegundos: number) => {
  const intervaloEmMilisegundos = 1000 * intervaloEmSegundos;
  setTimeout(() => {
    console.log(`passaram-se os ${intervaloEmSegundos} segundos`);
  }, intervaloEmMilisegundos);
}

const relogio = () => {
  setInterval(() => {
    const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
  }, 1000);
};

// despertador(10);
// relogio();

