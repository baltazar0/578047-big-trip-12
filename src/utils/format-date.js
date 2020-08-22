const getTimeFormat = (value) => {
  return value < 10 ? `0${value}` : `${value}`;
};

export const getDurationFormat = (duration) => {
  const days = getTimeFormat(Math.floor((duration / (1000 * 60 * 60 * 24))));
  duration -= days * (1000 * 60 * 60 * 24);
  const hours = getTimeFormat(Math.floor(duration / (1000 * 60 * 60)));
  duration -= hours * (1000 * 60 * 60);
  const minutes = getTimeFormat(Math.floor(duration / (1000 * 60)));
  if (days > 0) {
    return `${days}D ${hours}H ${minutes}M`;
  } else if (hours > 0) {
    return `${hours}H ${minutes}M`;
  } else {
    return `${minutes}M`;
  }
};

export const getEventInputTime = (date) => {
  const year = date.getFullYear().toString().substring(2);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  day = (day < 10) ? `0` + day : day;
  month = (month < 10) ? `0` + month : month;
  const hoursMinutes = date.toLocaleTimeString().slice(0, -3);
  return `${day}/${month}/${year} ${hoursMinutes}`;
};

export const getEventTime = (date) => {
  const hours = getTimeFormat(date.getHours() % 24);
  const minutes = getTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};

export const getInfoDateFormat = (date) => {
  return date.toLocaleString(`en-US`, {
    day: `numeric`,
    month: `short`
  });
};
