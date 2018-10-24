class VideoGame extends Item  {
    constructor(options = {}) 
    super() {
        this.platform = options.platform;
        this.developer = options.developer;
        this.genre = options.genre;
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

    returnGame() {                    // return
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
