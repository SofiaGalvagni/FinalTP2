import Temperature from "../models/Temperature.js";

class TemperatureService {
  
    temperatureModel = new Temperature();

  getAllTemperaturesService = async () => {
    try {
      return await this.temperatureModel.getAll();
    } catch (error) {
      throw error;
    }
  };

  getTemperatureByIdService = async (id) => {
    try {
      if(!id){
        throw error
      }
      return await this.temperatureModel.getById(id);
    } catch (error) {
      throw error;
    }
  };

  createTemperatureService = async (newTemperatura) => {
    try {
      if(!newTemperatura){
        throw error
      }
      return await this.temperatureModel.create(newTemperatura);
    } catch (error) {
      throw error;
    }
  };
}

export default TemperatureService;
