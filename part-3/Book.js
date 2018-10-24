class Book extends Item  {
  constructor(options = {})
  super() {
    this.length = options.length;
    this.author = options.author;
    this.format = options.format;
    this.language = options.language;
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

  returnBook() {                    // return
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
