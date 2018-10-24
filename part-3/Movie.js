class Movie extends Item  {
    constructor(options = {})
    super() {
        this.runtime = options.runtime;
        this.format = options.format;
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

    returnMovie() {                   
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
