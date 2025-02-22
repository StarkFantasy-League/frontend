export const formatDate = (date: Date) => {
    const day = date.toLocaleString('en-US', { weekday: 'short' });
    const dayNumber = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
  
    return { day, dayNumber, month, year };
  };