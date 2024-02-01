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

const repository = new Repository();

function createHTMLFromActivity(activity) {
  const { title, description, imgurl } = activity;

  const activityDiv = document.createElement("div");

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = description;

  const imageElement = document.createElement("img");
  imageElement.src = imgurl;
  imageElement.alt = title;
  imageElement.width = 100;

  activityDiv.appendChild(titleElement);
  activityDiv.appendChild(descriptionElement);
  activityDiv.appendChild(imageElement);

  return activityDiv;
}

function renderActivities(repository, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  const activities = repository.getAllActivities();
  const activityElements = activities.map(createHTMLFromActivity);
  activityElements.forEach((activityElement) => {
    container.appendChild(activityElement);
  });
}

function handleAddActivityClick(event) {
  event.preventDefault();
  const titleInput = document.getElementById("titleInput");
  const descriptionInput = document.getElementById("descriptionInput");
  const imgurlInput = document.getElementById("imgurlInput");

  const title = titleInput.value;
  const description = descriptionInput.value;
  const imgrul = imgurlInput.value;

  if (!title || !description || !imgurl) {
    alert("Por favor, completa todos lso campos.");
    return;
  }

  const newActivity = new Activity(Date.now(), title, description, imgrul);

  repository.addActivity(newActivity);

  renderActivities(repository, "activityContainer");

  titleInput.value = "";
  descriptionInput.value = "";
  imgurlInput.value = "";

  const addButton = document.getElementById("addActivityButton");
  if (addButton) {
    addButton.addEventListener("click", handleAddActivityClick);
  } else {
    console.error('El botón con ID "addActivityButton" no fue encontrado');
  }
}
