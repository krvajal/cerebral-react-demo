import controller from './controller'

it("calls the setName signal", () =>{
    const setNameSignal = controller.getSignal('setName')
    setNameSignal({
        name: "John"
    })
    expect(controller.getState('name')).toBe("John")

})