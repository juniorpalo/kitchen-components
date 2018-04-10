import { KitchenDto, FridgeDto, MicrowaveDto } from '../dtos'

it('should contain a Fridge and a Microwave', () => {
    const expectedFridge = new FridgeDto(false)
    const expectedMicrowave = new MicrowaveDto(false)
    const kitchenInstance = new KitchenDto(expectedFridge, expectedMicrowave)
    expect(kitchenInstance).toBeDefined()
    expect(kitchenInstance.fridge).toEqual(expectedFridge)
    expect(kitchenInstance.microwave).toEqual(expectedMicrowave)
    expect(kitchenInstance.fridge.switchpower()).toBeTruthy()
    expect(kitchenInstance.microwave.switchpower()).toBeTruthy()
})

// it('should quickcook', () => {
//     const targetMicrowave = new MicrowaveDto(true)
//     expect(targetMicrowave.quickcook()).toBeTruthy()
// })

// it('should keepcool', () => {
//     const targetFridge = new FridgeDto(false)
//     expect(targetFridge.keepcool()).toBeTruthy()
// })

// it('should switchpower', () => {
//     const targetFridge = new FridgeDto(false)
//     const targetMicrowave = new MicrowaveDto(true)
//     expect(targetFridge.switchpower()).toBeTruthy
//     expect(targetMicrowave.switchpower()).toBeTruthy
// })