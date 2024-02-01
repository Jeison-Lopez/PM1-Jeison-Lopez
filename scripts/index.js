class Activity {
  constructor(id, title, description, imgurl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgurl = imgurl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
  }

  getAllActivities() {
    return this.activities;
  }

  createActivity(id, title, description, imgurl) {
    const newActivity = new Activity(id, title, description, imgurl);
    this.activities.push(newActivity);
    return newActivity;
  }

  deleteActivity(id) {
    const activityToDelete = this.activities.find(
      (activity) => activity.id === id
    );
    if (activityToDelete) {
    }
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}
