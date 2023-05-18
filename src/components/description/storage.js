export const getdes = () => {
    const des = localStorage.getItem('des'); 
    try {
      if (des) {
        
        return JSON.parse(des); 
      }
    } catch (error) {
      return [];
    }
    return [];
  };