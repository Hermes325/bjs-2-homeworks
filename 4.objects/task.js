function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
Student.prototype.setSubject = function (subjectName) {
  this.setSubject = subjectName;
};
Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty("marks") === true) {
    this.marks = marks;
  } else {
    return 0;
  }
};
Student.prototype.getAverage = function () {
  if (this.hasOwnProperty("marks") === true || this.marks.length == 0) {
    let sum = this.marks.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum / this.marks.length;
  } else {
    return 0;
  }
};

Student.prototype.exclude = function (reason) {
  this.exclude = reason;
  delete this.marks;
  delete this.setSubject;
};
