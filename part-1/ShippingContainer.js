class ShippingContainer {
	constructor(args={}) {
		this.destination = args.destination;
		this.boxes = args.boxes;
		this.maxWeight = args.maxWeight;
		this.maxBoxs = args.maxBoxs; 
	}

	currentWeight() {

		if(this.boxes.length === 0) {
			return 0;
		} 

		let boxesWeight = 0;
		if(this.boxes.length > 0) {
			boxesWeight = this.boxes.reduce(function(sum, box) {
				return sum + box.weight;
			}, 0);
		}
		return boxesWeight;
	}

	boxesCount() {
		return this.boxes.length;
	}

	addBox(newBox) {
		if(this.boxes.length < this.maxBoxs && this.currentWeight() < this.maxWeight ) {
			this.boxes.push(newBox);
			return true;
		} else {
			return false
		}

		let weight = this.currentWeight() + newBox.weight;
		if(weight > this.maxWeight) {
			return false;
		}
	}
}