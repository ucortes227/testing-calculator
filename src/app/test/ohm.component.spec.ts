import { ohm } from "./ohm.component";

describe('OHM Unit Tests', () => {
    
    it('should return 0 if r and i are empty', () => {
        // Arrange
        let result: any = 0;
        // Act
        result = ohm('','');
        // Assert
        expect(result).toBe(0);
    })

    it('should return 0 if r and i are 0', () => {
        // Arrange
        let result: any = 0;
        // Act
        result = ohm(0, 0);
        // Assert
        expect(result).toBe(0);
    })

    it('should return 0 if an error occurs', () => {
        // Arrange
        let result: any = 0;
        // Act
        result = ohm('69+',5);
        // Assert
        expect(result).toEqual(NaN);
    })

    it('should return 100 when r is 10 and i is 10', () => {
        // Arrange
        let result: any = 0;
        // Act
        result = ohm(10,10);
        // Assert
        expect(result).toBe(100);
    })

    it('should return 2 when r is 1 and i is 2', () => {
        // Arrange
        let result: any = 0;
        // Act
        result = ohm(1,2);
        // Assert
        expect(result).toBe(2);
    })

    it('should return 17.49 when r is 3.3 and i is 5.3', () => {
        // Arrange
        let result: any = 0;
        // Act
        result = ohm(3.3, 5.3);
        // Assert
        expect(result).toBe(17.49);
    })
})