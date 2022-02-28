// Questão 1
const desafioAsRosasNaoFalamModificado = async () => {
  const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);
  
  // métodos de versos. Estes métodos deverão ser modificados.
  const queixoMeAsRosas = (): Promise<void> => {
    return new Promise(resolve => setTimeout(() => {
      console.log('Queixo-me às rosas');
      resolve();
    }, geraIntervaloAleatório()));
  };

  const masQueBobagem = (): Promise<void> => {
    return new Promise(resolve => setTimeout(() => {
      console.log('Mas que bobagem');
      resolve();
    }, geraIntervaloAleatório()));
  };

  const asRosasNaoFalam = (): Promise<void> => {
    return new Promise(resolve => setTimeout(() => {
      console.log('As rosas não falam');
      resolve();
    }, geraIntervaloAleatório()));
  };

  const simplesmenteAsRosasExalam = (): Promise<void> => {
    return new Promise(resolve => setTimeout(() => {
      console.log('Simplesmente as rosas exalam');
      resolve();
    }, geraIntervaloAleatório()));
  };

  const oPerfumeQueRoubamDeTi = (): Promise<void> => {
    return new Promise(resolve => setTimeout(() => {
      console.log('O perfume que roubam de ti, ai');
      resolve();
    }, geraIntervaloAleatório()));
  };

  // Com Promises
  queixoMeAsRosas()
  .then(() => masQueBobagem())
  .then(() => asRosasNaoFalam())
  .then(() => simplesmenteAsRosasExalam())
  .then(() => oPerfumeQueRoubamDeTi());

  // Com async/await
  await queixoMeAsRosas();
  await masQueBobagem();
  await asRosasNaoFalam();
  await simplesmenteAsRosasExalam();
  await oPerfumeQueRoubamDeTi();
}

// desafioAsRosasNaoFalamModificado();