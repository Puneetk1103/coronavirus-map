import Api from "./index";

export default {
    async getData() {
     try{
        const res = await Api.get('https://corona.lmao.ninja/countries?sort=country');
        return res;
     } catch (e) {
        console.log(e);
     }
        return true;
    }
  };