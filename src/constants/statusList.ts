export const statusTitles = {
  inProgress: 'Em andamento',
  done: 'Concluído',
};

export const statusList = Object.keys(
  statusTitles
) as (keyof typeof statusTitles)[];
