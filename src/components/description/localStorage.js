export const getUsers = () => {
    const users = localStorage.getItem('users'); 
    try {
      if (users) {
        
        return JSON.parse(users); 
      }
    } catch (error) {
      return [];
    }
    return [];
  };