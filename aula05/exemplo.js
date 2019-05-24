var conta = {
    ag: '0000',
    banco: {
      cod: 033,
      id: 9,
      nome: 'Santander'
    }
  }

conta; //{ ag: '0000', banco: { cod: 27, id: 9, nome: 'Santander' } }

conta.banco; //{ cod: 27, id: 9, nome: 'Santander' }

conta.banco.nome; //'Santander'