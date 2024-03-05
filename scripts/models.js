// ECMAScript 2
// Clase Activity la cual representa las actividades que se crearán.
// Con "export" exportamos la clase Activity.
export class Activity {
  constructor(id, title, description, imgUrl) {
    (this.id = id),
      (this.title = title),
      (this.description = description),
      (this.imgUrl = imgUrl);
  }
}
// Clase Repository la cual crea, almacena y manipula las actividades.
// Con "export" exportamos la clase Repository.
export class Repository {
  constructor() {
    this.activities = [];
    this.counter = 1;
  }
  getAllActivities() {
    return this.activities;
  }
  createActivity(title, description, imgUrl) {
    const id = this.counter++;
    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
  }
  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}
