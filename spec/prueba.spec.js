// Con "import" traemos las clases.
import { Repository, Activity } from "../scripts/models.js";
// Test para las clases
describe("Activity Class", () => {
  it("should create an activity object with given properties", () => {
    const activity = new Activity(1, "Title", "Description", "image.jpg");
    expect(activity.id).toEqual(1);
    expect(activity.title).toEqual("Title");
    expect(activity.description).toEqual("Description");
    expect(activity.imgUrl).toEqual("image.jpg");
  });
});

describe("Repository Class", () => {
  let repository;

  beforeEach(() => {
    repository = new Repository();
  });

  it("should initialize with empty activities array and counter set to 1", () => {
    expect(repository.activities.length).toEqual(0);
    expect(repository.counter).toEqual(1);
  });

  it("should add a new activity to the activities array", () => {
    repository.createActivity("Title", "Description", "image.jpg");
    expect(repository.activities.length).toEqual(1);
  });

  it("should increment the counter when creating a new activity", () => {
    repository.createActivity("Title", "Description", "image.jpg");
    expect(repository.counter).toEqual(2);
  });

  it("should return all activities", () => {
    repository.createActivity("Title 1", "Description 1", "image1.jpg");
    repository.createActivity("Title 2", "Description 2", "image2.jpg");
    const activities = repository.getAllActivities();
    expect(activities.length).toEqual(2);
  });

  it("should delete an activity by id", () => {
    repository.createActivity("Title 1", "Description 1", "image1.jpg");
    repository.createActivity("Title 2", "Description 2", "image2.jpg");
    repository.deleteActivity(1);
    const activities = repository.getAllActivities();
    expect(activities.length).toEqual(1);
    expect(activities[0].id).toEqual(2);
  });
});
