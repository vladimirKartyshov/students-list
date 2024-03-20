export default class Student {
    constructor(name, surename, lastname, startLearn, birthDate, faculty, id) {
      this.name = name;
      this.surename = surename;
      this.lastname = lastname;
      this.startLearn = startLearn;
      this.birthDate = birthDate;
      this.faculty = faculty;
      this.id = id;
    }
  
    get fio() {
      return this.surename + " " + this.name + " " + this.lastname;
    }
  
    getLearnPeriod() {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();
      let currentDate = now.getDate();
      const learnYears = 4;
      const monthStartLearn = 9; // месяц сентябрь если он прошел то обучение закончено иначе выводится курс
  
      let course =
        currentYear -
        this.startLearn -
        (0 > (currentMonth - monthStartLearn || currentDate - 1)); //1 октября
      course = ++course > learnYears ? "закончил" : `${course} курс`;
      let period = `${this.startLearn} - ${
        +this.startLearn + learnYears
      } (${course})`;
  
      return period;
    }
  
    getBirthDateString() {
      const yyyy = this.birthDate.getFullYear();
      let mm = this.birthDate.getMonth() + 1;
      let dd = this.birthDate.getDate();
      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;
      return dd + "." + mm + "." + yyyy;
    }
  
    getAge() {
      const today = new Date();
      let age = today.getFullYear() - this.birthDate.getFullYear();
      let currMonth = today.getMonth() + 1;
      // let currMonth = today.getMonth() < 12 ? today.getMonth() + 1 : 1
      let m = currMonth - this.birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
        age--;
      }
      return age;
    }
  }
  