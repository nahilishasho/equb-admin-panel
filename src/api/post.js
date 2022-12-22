import client from "./client.js";
export const getPosts = async () => {
   try {
      const { data } = await client(`/equbs`);
      return data;
   }catch(error){
      const { response } = error; 
      if (response?.data) {
        return response.data;
      }
      return { error : error.message || error};
   }
};