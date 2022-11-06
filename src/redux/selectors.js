export const getFilteredJobs = (store) => {
  const { nameFilter, priorityFilter } = store.filters;
  let filteredJobs = store.jobList;
  if (priorityFilter.length) {
    filteredJobs = filteredJobs.filter((item) => {
      return priorityFilter.includes(item.priority);
    });
  }
  if (nameFilter) {
    filteredJobs = filteredJobs.filter((item) => {
      return item.name.toLowerCase().includes(nameFilter.toLowerCase());
    });
  }
  return filteredJobs;
};
export const getAllJobs = (store) => {
  return store.jobList;
};

export const getApiModalData = (store) => {
  return store.modal;
};
