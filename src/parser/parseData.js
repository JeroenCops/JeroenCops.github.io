/**
 * Parses raw data and returns usable data for the page
 * @param Object rawData raw Data 
 * @ return Object
 */
export const parseData = rawData => {
  const data = rawData.githubData.data;
  const repositories = data.user.repositories;
  return repositories;
};