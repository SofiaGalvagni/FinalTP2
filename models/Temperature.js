class Temperature {
    
  sondas = [
    {
      id:1,
      listasTemperaturas:[]
    },
    {
      id:2,
      listasTemperaturas:[]
    },
    {
      id:3,
      listasTemperaturas:[]
    },
    {
      id:4,
      listasTemperaturas:[]
    },
    {
      id:5,
      listasTemperaturas:[]
    },
  ]
  
    getAll = async () => {
      const alltemperatures = []
      this.sondas.forEach(element => {

        alltemperatures.push(element.listasTemperaturas);
      });

    return alltemperatures
    }
  
    getById = async (id) => {
      return this.sondas.find(sonda=>sonda.id == id).listasTemperaturas;
    };
  
    create = async (id, newTemperatura) =>{
      if (
        id < 1 ||
        id > 5 ||
        temperatura < -20 ||
        temperatura > 100
      ) {
        throw "datos no válidos";
      }
      const entry = {
        ...newTemperatura,
        timestamp: new Date(),
      };
      return  this.sondas.find(sonda=>sonda.id == id).registrosTemperaturas.push({
        Temperatura: newTemperatura+"°", 
        date: new Date(8.64e15).toString()
      })
       
    }
}
  
  export default Temperature;
  