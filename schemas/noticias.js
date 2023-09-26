export default {
    name: 'noticias',
    type: 'document',
    title: 'Noticias',
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
        type: 'string',
        title: 'Data publicação'
      }
    ]
  }