class CD extends Item {
    constructor(options = {})
    super() {
        this.runtime = options.runtime;
        this.artist = options.artist;
        this.label = options.label;
    }

    isAvailable() {
        return !this.isCheckedOut();
    }

    checkout() {
        this.checkedOut = true;
    }

    isCheckedOut() {
        return this.checkedOut;
    }

    returnCD() {                   
        this.checkedOut = false;
    }

    isDamaged() {
        return this.damaged;
    }

    recordDamage() {
        this.damaged = true;
    }

    repair() {
        this.damaged = false;
    }
}
