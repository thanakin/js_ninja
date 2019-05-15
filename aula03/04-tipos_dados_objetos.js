//Tipos de dados

//    Tipos primitivos
        - number
        - string
        - boolean
        - null
        - undefined

//    Tipos de objeto
        - demais valores, serão objetos
        { propriedade: 'valor'}

        var objeto = { propriedade: 'valor', propriedade2: 10, propriedade3: true }
        objeto.propriedade
        >'valor'

        var pessoa = { nome: 'Fernando', idade: 30, peso: 85, altura: 1,85 }
        pessoa.nome
        > 'Fernando'
        pessoa.idade
        >30
        pessoa.altura
        >1,85

        var carro = { cor: 'vermelho', motor: '2.0', portas: 4}
        carro.cor
        'vermelho'
        carro.motor
        '2.0'
        carro.portas
        4

        var myvar = function() { return 'variavel myvar'; }
        myvar
        >[Function]
        myvar()
        >'variavel myvar'