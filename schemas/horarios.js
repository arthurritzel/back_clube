import dia_desc from "./dia_desc";

export default{
    name: 'horarios',
    type: 'document',
    title: 'Horários',
    fields: [
        {
            name:'nomeHorario',
            type:'string',
            title: 'Nome do Horário'
        },
        {
            name: 'turnoManha',
            type: 'object',
            title: 'Turno da Manhã',
            fields: [
                {
                 name:'min',
                 type:'string',
                 title: 'Horário Inicial',
                },
                {
                 name:'max',
                 type:'string',
                 title: 'Horário Final',
                }
            ],
        },
        {
            name: 'turnoTarde',
            type: 'object',
            title: 'Turno da Tarde',
            fields: [
                {
                 name:'min',
                 type:'string',
                 title: 'Horário Inicial',
                },
                {
                 name:'max',
                 type:'string',
                 title: 'Horário Final',
                }
            ],
        },
        {
            title: 'Dias da semana',
            name: 'dia_semana',
            type: 'array',
            of: [{type: 'dia_desc'}]
          }
    ]
}