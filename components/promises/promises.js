function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Fetched data";
        resolve(data);
      }, 1000);
    });
  }
  
  async function processData() {
    const data = await fetchData();
    return data.toUpperCase();
  }
  
  processData().then(result => {
    console.log(result); // Output: FETCHED DATA
  });  

  export { fetchData, processData };