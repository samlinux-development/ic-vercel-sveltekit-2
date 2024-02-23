import { backend, backendCanisterId } from "$lib/server/canisters";

export const actions = {
  bmi: async ({request}) => {
    const formData = await request.formData();
    try {
      let result = {};
   
      let name = formData.get('name');
      let height = parseFloat(formData.get('height'));
      let weight = parseFloat(formData.get('weight'));
      
      /**
      console.log('name: ',name);
      console.log('height: ',height);
      console.log('weight: ',weight);
      console.log('backendCanisterId: ',backendCanisterId);
      */
    
      // Call the IC
      let bmi = await backend.bmi(height, weight);

      // modify results
      if (bmi > 0){
        bmi = bmi.toFixed(2);
      } else {
        bmi = 'Invalid!';
      }

      if(name === ''){
        name = 'Joan Doe';
      }

      // prepare output
      result.bmi = bmi;
      result.name = name;
      result.backendCanisterId = backendCanisterId;

      return {
        success: true,
        icData: result
      }
    } 
    catch (err) {
        console.error('>> ',err);
        return {
          success: false,
          icData: {}
        };
    }
  }
};