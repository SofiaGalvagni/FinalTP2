import TemperatureService from "../services/temperatureService.js";

class TemperatureController {
  
    temperatureService = new TemperatureService();

  getAllTemperatures = async (req, res) => {
    try {
      const data = await this.temperatureService.getAllTemperaturesService();
      res.status(200).send({Msg: data});
    } catch (error) {
      res.status(400).send({ errorMsg: error });
    }
  };

  getTemperatureById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.temperatureService.getTemperatureByIdService(id);
      res.status(200).send({Msg: data});
    } catch (error) {
      res.status(400).send({ errorMsg: error });
    }
  };

  createTemperature = async (req, res) => {
    try {
      const {temperatura} = req.body;
      const data = await this.temperatureService.createTemperatureService(temperatura);
      res.status(200).send({Msg: data});
    } catch (error) {
      res.status(400).send({ errorMsg: error });
    }
  };
}

export default TemperatureController;
