function User(account, userName, mail, pass, date, salary, position, time) {
  this.account = account;
  this.userName = userName;
  this.mail = mail;
  this.pass = pass;
  this.date = date;
  this.salary = salary;
  this.position = position;
  this.time = time;
}
User.prototype.calSalary = function () {
  if (this.position == "Sếp") {
    return (this.salary * 3).toLocaleString();
  } else if (this.position == "Trưởng phòng") {
    return (this.salary * 2).toLocaleString();
  } else if (this.position == "Nhân viên") {
    return (this.salary * 1).toLocaleString();
  }
};

User.prototype.rate = function () {
  if (this.time < 160) {
    return "Nhân viên trung bình";
  } else if (this.time >= 160) {
    return "Nhân viên khá";
  } else if (this.time >= 176) {
    return "Nhân viên giỏi";
  } else if (this.time >= 192) {
    return "Nhân viên xuất sắc";
  }
};
