export const filterTicketsByTitle = (ticketsData, value) => {
  if (value !== "") {
    const filteredData = ticketsData.filter((item) =>
      item.Titulo.toLowerCase().includes(value.toLowerCase())
    );
    return filteredData;
  } else {
    return ticketsData;
  }
};

export const filterTicketsByType = (ticketsData, value) => {
  if (value !== "Todos") {
    const filteredData = ticketsData.filter((item) =>
      item.Tipo.includes(value)
    );
    return filteredData;
  } else {
    return ticketsData;
  }
};

export const filterTicketsByPriority = (ticketsData, value) => {
  if (value !== "Todas") {
    const filteredData = ticketsData.filter((item) =>
      item.Prioridad.includes(value)
    );
    return filteredData;
  } else {
    return ticketsData;
  }
};

export const filterTicketsByState = (ticketsData, value) => {
  if (value !== "Todos") {
    const filteredData = ticketsData.filter((item) =>
      item.Estado.includes(value)
    );
    return filteredData;
  } else {
    return ticketsData;
  }
};

export const orderTicketsByDateAsc = (filterableData) => {
  return filterableData
    .slice()
    .sort((a, b) => new Date(a.Fecha) - new Date(b.Fecha));
};

export const orderTicketsByDateDesc = (filterableData) => {
  return filterableData
    .slice()
    .sort((a, b) => new Date(b.Fecha) - new Date(a.Fecha));
};
