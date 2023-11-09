export default {
    name: 'noticias',
    type: 'document',
    title: 'Notícias',
    fields: [
      {
        name: 'titulo',
        type: 'string',
        title: 'Titulo'
      },
      {
        name: 'subtitulo',
        type: 'string',
        title: 'Subtitulo'
      },
      {
        name: 'conteudo',
        type: 'string',
        title: 'Conteudo'
      },
      {
        name: 'imagem',
        type: 'image',
        title: 'Imagem'
      },
      {
        name: 'data',
        type: 'date',
        title: 'Data publicação'
      }
    ]
  }