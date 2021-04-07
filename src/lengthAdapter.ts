import { MetricLength } from './metricLength'
import { ImperialLength } from './imperialLength'

/**
 * Clase LenghtAdapter
 * Representa una adaptador entre el cliente y los sitemas imperiales,
 * tranformandolos al sistema metrico
 */
export class LengthAdapter extends MetricLength {
  private conversor: [number, string][];
  constructor(private imperial: ImperialLength) {
    super();
    this.conversor = [[91.44, 'cm'], [0.9144, 'm'], [0.0009144, 'km']];
  }
  
  /**
   * Getter que devulver el dato en cm
   * @returns tupla number string con el dato y el sistema en el que se encuentra
   */
  getByCm(): [number, string] {
    return [this.imperial.getDataByYardas()[0] * this.conversor[0][0], 'cm'];
  }

  /**
   * Getter que devulver el dato en m
   * @returns tupla number string con el dato y el sistema en el que se encuentra
   */
  getByM(): [number, string] {
    return [this.imperial.getDataByYardas()[0] * this.conversor[1][0], 'm'];
  }

  /**
   * Getter que devulver el dato en km
   * @returns tupla number string con el dato y el sistema en el que se encuentra
   */
  getByKm(): [number, string] {
    return [this.imperial.getDataByYardas()[0] * this.conversor[2][0], 'km'];
  }
}