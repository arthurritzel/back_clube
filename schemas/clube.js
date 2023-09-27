export default{
    name: 'clube',
    type: 'document',
    title: 'Clube',
    fields: [
        {
            name: 'descricao',
            type: 'string',
            title: 'Descrição'
        },
        {
            name: 'imagem',
            type: 'image',
            title: 'Imagem'
        },
        {
            name: 'faixaIdade',
            type: 'object',
            title: 'Faixa de Idade',
            fields: [
              {
                name: 'min',
                type: 'number',
                title: 'Idade Mínima',
              },
              {
                name: 'max',
                type: 'number',
                title: 'Idade Máxima',
              },
            ],
          },
        {
            name:'horarios',
            type:'reference',
            title:'Horários',
            to:[{ type:'horarios' }]
        }
    ]
}