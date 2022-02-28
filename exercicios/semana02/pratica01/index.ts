// Questão 1

const ingredientes = [
  '2 hambúrgueres',
  'alface',
  'queijo',
  'molho especial',
  'cebola',
  'picles',
  'pão com gergelim'
];

const fazUmBigMac = (ingredientes: string[]): string => {
  // escrever seu código aqui
  const bigmac = ingredientes.reduce((acc, ingrediente) => acc + `, ${ingrediente}`);
  return bigmac;
};

// const big = fazUmBigMac(ingredientes);
// console.log({ big })

// ==========================================================================================

// Questão 2

const meses = [
  'jan', 'mar', 'mar', 'abr', 'jun', 'jul', 'set', 'out', 'dez',
];

// como adicionar os meses de "fev", "mai", "ago", "nov" nas posições corretas?
meses.splice(1,1,'fev');
meses.splice(4,0,'mai');
meses.splice(7,0,'ago');
meses.splice(10,0,'nov');
// console.log(meses);

// ==========================================================================================

// Questão 3

const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
];

const pick = <T extends Record<string, unknown>>(record: T[], ...args: (keyof T)[]): Record<string, unknown>[] => {
  const filteredRecord = record.map((item) => {
    let filteredItem = {};
    args.forEach(key => filteredItem = {...filteredItem, [key]: item[key]});
    return filteredItem;
  });
  // console.log({ filteredRecord });
  return filteredRecord;
};

pick(alunos, 'nome', 'nota');
// resultado esperado:
// [
//   { nome: 'João', nota: 7.3 },
//   { nome: 'Maria', nota: 9.2 },
//   { nome: 'Pedro', nota: 9.8 },
//   { nome: 'Ana', nota: 8.7 }
// ]

// forma alternativa de implementação
// pick(alunos, 'nome', 'nome')

// se preferir uma assinatura de typescript, segue:
// export const pick = <T extends Record>(record: T, ...args: (keyof T)[]): Record => {
//   return null;
// };

// ==========================================================================================

// Questão 4

const orderBy = <T extends Record<string, unknown>>(record: T[], ...args: (keyof T)[]): Record<string, unknown>[] => {
  const orderedArray = [...record];
  orderedArray.sort((item1, item2) => {
      for (const key of args) {
        const attribute1 = typeof item1[key] === 'string' ? String(item1[key]).toLowerCase() : item1[key];
        const attribute2 = typeof item2[key] === 'string' ? String(item2[key]).toLowerCase() : item2[key];
        if (attribute1 < attribute2) return -1;
        if (attribute1 > attribute2) return 1;
      }
      return 0;
  });
  // console.log({ orderedArray });
  return orderedArray;
};
orderBy(alunos, 'nota', 'nome');

// resultado esperado:
// [
//   { nome: 'João', nota: 7.3 },
//   { nome: 'Ana', nota: 8.7 }
//   { nome: 'Maria', nota: 9.2 },
//   { nome: 'Pedro', nota: 9.8 },
// ]

// forma alternativa de implementação
// orderBy(alunos, 'nota', 'nome')

// se preferir uma assinatura de typescript, segue:
// export const orderBy = <T extends Record>(record: T, ...args: (keyof T)[]): Record => {
//   return null;
// };

// ==========================================================================================

// Questão 5

function fila() {
  const fila: unknown[] = [];

  const adicionar = (elemento: unknown) => {
    // aqui, você deve utilizar o método correto para adicionar um novo elemento à variável de fila.
    fila.push(elemento);
  };

  const remover = () => {
    // aqui, você deve utilizar o método correto para remover um novo elemento à variável de fila.
    return fila.shift();
  };

  return { adicionar, remover };
}

function pilha() {
  const pilha: unknown[] = [];

  const adicionar = (elemento: unknown) => {
    // aqui, você deve utilizar o método correto para adicionar um novo elemento à variável de pilha.
    pilha.push(elemento);
  };

  const remover = () => {
    // aqui, você deve utilizar o método correto para remover um novo elemento à variável de pilha.
    return pilha.pop();
  };

  return { adicionar, remover };
}

const fila1 = fila();
fila1.adicionar(1);
fila1.adicionar(2);
fila1.adicionar(3);

console.log('valor esperado: 1; valor recebido: ', fila1.remover());
console.log('valor esperado: 2; valor recebido: ', fila1.remover());
console.log('valor esperado: 3; valor recebido: ', fila1.remover());


const pilha1 = pilha();
pilha1.adicionar(1);
pilha1.adicionar(2);
pilha1.adicionar(3);

console.log('valor esperado: 3; valor recebido: ', pilha1.remover());
console.log('valor esperado: 2; valor recebido: ', pilha1.remover());
console.log('valor esperado: 1; valor recebido: ', pilha1.remover());

// ==========================================================================================

// Questão 6
const usuarios = [
  { nome: 'Diego', idade: 23, ativo: true },
  { nome: 'Gabriel', idade: 15, ativo: false },
  { nome: 'Lucas', idade: 30, ativo: false },
];

const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);
const usuariosInativos = usuarios.filter(usuario => !usuario.ativo);

// console.log({ usuariosAtivos, usuariosInativos });
