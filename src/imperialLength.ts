
/**
 * Clase ImperialLength
 * Representa las magnitudes de longitud en sistema imperial
 */
export class ImperialLength {
  private factor: [number, string][];
  constructor(private data: [number, string]) {
    this.factor = [[36, 'pulgadas'], [3, 'pies'], [1, 'yardas'], [0.000568182, 'millas']];
  }
  /**
   * Getter que devulver las yardas de el dato introducido
   * @returns tupla number string con el dato y el sistema en el que se encuentra
   */
  getDataByYardas(): [number, string] {
    switch(this.data[1]) {
      case 'pulgadas': 
        return [this.data[0] / this.factor[0][0], 'yardas'];
        break;
      case 'pies':
        return [this.data[0] / this.factor[1][0], 'yardas'];
        break;
      case 'yardas':
        return this.data;
        break
      case 'millas':
        return [this.data[0] / this.factor[3][0], 'yardas'];
        break;
    }
  }
}