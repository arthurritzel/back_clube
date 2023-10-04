export default{
    name: 'desc_clubes',
    type: 'document',
    title: 'Descrição clubes',
    fields: [
        {
          name: 'clube',
          type: 'string',
          title: 'Nome do clube'
        },
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