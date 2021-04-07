/**
 * Clase MetricLenght
 * Representa las magnitudes de longitud del sistema metrico
 */
export class MetricLength {
  private factor: [number, string][];
  constructor(private data: [number, string] = [0, 'm']) {
    this.factor = [[100, 'cm'], [1, 'm'], [0.001, 'km']];
  }
  /**
   * Getter que transforma la entrada a cm
   * @returns tupla number string con el dato y el sistema en el que se encuentra
   */
  getByCm(): [number, string] {
    switch(this.data[1]) {
      case 'cm': 
        return this.data;
        break;
      case 'm':
        return [this.data[0] * this.factor[1][0], 'cm'];
        break;
      case 'km':
        return [(this.data[0] * this.factor[2][0]) / this.factor[0][0], 'cm'];
        break;
    }
  }
  /**
   * Getter que transforma la entrada a m
   * @returns tupla number string con el dato y el sistema en el que se encuentra
   */
  getByM(): [number, string] {
    switch(this.data[1]) {
      case 'cm': 
        return [(this.data[0] * this.factor[0][0]), 'm'];
        break;
      case 'm':
        return this.data;
        break;
      case 'km':
        return [(this.data[0] * this.factor[2][0]), 'm'];
        break;
    }
  }
  /**
   * Getter que transforma la entrada a km
   * @returns tupla number string con el dato y el sistema en el que se encuentra
   */
  getByKm(): [number, string] {
    switch(this.data[1]) {
      case 'cm': 
        return [(this.data[0] * this.factor[0][0]) / this.factor[2][0], 'km'];
        break;
      case 'm':
        return [(this.data[0] * this.factor[2][0]), 'km'];
        break;
      case 'km':
        return this.data;
        break;
    }
  }
}