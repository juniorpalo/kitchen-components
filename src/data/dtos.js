class ApplianceDto {
    constructor(haspower) {
        this.haspower = haspower
    }
    switchpower() {
        this.haspower = !this.haspower
        return this.haspower
    }
}

class KitchenDto {
    constructor(fridge, microwave) {
        this.fridge = fridge
        this.microwave = microwave
    }
}

class FridgeDto extends ApplianceDto {
    constructor(haspower, iscool) {
        super(haspower)
        this.iscool = iscool
    }

    keepcool() {
        this.iscool = !this.iscool
        return this.iscool
    }
}

class MicrowaveDto extends ApplianceDto {
    constructor(haspower, cook) {
        super(haspower)
        this.cook = cook
    }

    quickcook() {
        this.cook = !this.cook
        return this.cook
    }
}

export { KitchenDto, FridgeDto, MicrowaveDto }