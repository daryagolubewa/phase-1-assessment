describe("ShippingContainer", () => {
    let boxes = [];
    let shippingContainer;
    beforeEach(() => {
        boxes = [new Box({weight: 300}), new Box({weight: 100})];
        shippingContainer = new ShippingContainer({destination: 'Hawaii', boxes: boxes, maxWeight: 500, maxBoxs: 10});
    });

    describe("attributes", () => {
        it("has a destination", () => {
            expect(shippingContainer.destination).toEqual('Hawaii');
        });

        it("has a maxWeight", () => {
            expect(shippingContainer.maxWeight).toEqual(500);
        });

        it("has a maxBoxs", () => {
            expect(shippingContainer.maxBoxs).toEqual(10);
        });

        it("has boxes", () => {
            expect(shippingContainer.boxes).toEqual(boxes);
        });

        describe("can be changed", () => {
            beforeEach(() => {
                shippingContainer.maxWeight = 800;
            });
            it("change maxWeight", () => {
                expect(shippingContainer.maxWeight).toEqual(800);
            });
        });
    });

// =========
// PENDING
// =========

    xdescribe("working with boxes", () => {
        describe("function currentWeight", () => {
            describe("when empty", () => {
                let emptyShippingContainer;
                beforeEach(() => {
                    emptyShippingContainer = new ShippingContainer({destination: 'Borneo', boxes: [], max_boxes: 10, max_weight: 500});
                });

                it("returns 0", () => {
                    expect(emptyShippingContainer.currentWeight()).toEqual(0);
                });
            });

            describe("when one or more boxes has been loaded", () => {
                it("returns the total weight of the boxes", () => {
                    expect(shippingContainer.currentWeight()).toEqual(400);
                });
            });
        });

        describe("function boxesCount", () => {
            it("returns the number of boxes currently loaded", () => {
                expect(shippingContainer.boxesCount()).toEqual(2);
            });
        });

        describe("function addBox", () => {
            let newBox;
            beforeEach(() => {
                newBox = new Box({weight: 50});
            });

            describe("when within max weight and max boxes", () => {
                it("returns true", () => {
                    expect(shippingContainer.addBox(newBox)).toEqual(true);
                });

                it("adds box to shipping container", () => {
                    shippingContainer.addBox(newBox);
                    expect(shippingContainer.boxes).toContain(newBox);
                });
            });

            describe("when exceeding max weight", () => {
                let smallerShippingContainer;
                beforeEach(() => {
                    smallerShippingContainer = new ShippingContainer({destination: 'Guangzhou', boxes: boxes, max_weight: 425, max_boxes: 10});
                });
                it("returns false", () => {
                    expect(smallerShippingContainer.addBox(newBox)).toEqual(false);
                });
            });

            describe("when exceeding max boxes", () => {
                let fullShippingContainer;
                beforeEach(() => {
                    fullShippingContainer = new ShippingContainer({destination: 'Corpus Christi', boxes: boxes, max_weight: 500, max_boxes: 2});
                });
                it("returns false", () => {
                    expect(fullShippingContainer.addBox(newBox)).toEqual(false);
                });

                it("does not add box to the shipping container", () => {
                    fullShippingContainer.addBox(newBox);
                    expect(fullShippingContainer.boxes).not.toContain(newBox);
                });
            });

        });

    });

});
