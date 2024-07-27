export const fetchRetreats = async (page = 1, limit = 5) => {
    const response = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=${limit}`);
    const data = await response.json();
    return data;
  };
  
  export const fetchRetreatById = async (id) => {
    const response = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/${id}`);
    const data = await response.json();
    return data;
  };
  
  export const filterRetreats = async (filter, value) => {
    const response = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?${filter}=${value}`);
    const data = await response.json();
    return data;
  };
  
  export const searchRetreats = async (query) => {
    const response = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=${query}`);
    const data = await response.json();
    return data;
  };
  

  export const fetchImages = async (page = 1, limit = 5) => {
    try {
      const response = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/images?page=${page}&limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching images:', error);
      return [];
    }
  };
  