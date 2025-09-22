// Importamos la clase Repositoy de el archivo models.js.
import { Repository } from "../src/components/models.js";
// DOM
// Instancia con la cual se va a trabajar.
const repository = new Repository();
// Función que crea la estructura HTML a la clase Activity
function createHTMLFromActivity(activity) {
  // Destructuring: Se descompone el objeto activity en sus propiedades individuales.
  const { title, description, imgUrl } = activity;

  const activityDiv = document.createElement("div");
  activityDiv.className = "styleDiv";

  const titleElement = document.createElement("h3");
  titleElement.innerHTML = title;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = description;

  const imgUrlElement = document.createElement("img");
  imgUrlElement.src = imgUrl;
  imgUrlElement.alt = title;
  imgUrlElement.width = 100;

  activityDiv.appendChild(titleElement);
  activityDiv.appendChild(descriptionElement);
  activityDiv.appendChild(imgUrlElement);
  //-----------------------------------------------------------------------------------------
  // Agregar un atributo de identificación al elemento div para poder identificarlo más tarde
  //-----------------------------------------------------------------------------------------
  activityDiv.dataset.activityId = activity.id;
  //----------------------------------------------------------------------------------------------------------------------------
  //Evento de "click" para cada elemento de actividad HTML generado, pasándole como cb una función la cual elimina la actividad.
  //----------------------------------------------------------------------------------------------------------------------------
  activityDiv.addEventListener("click", handleActivityClick);

  return activityDiv;
}
//------------------------------------------------------------------------------
// Función encargada de eliminar la actividad la cual escucha el evento "click".
//------------------------------------------------------------------------------
function handleActivityClick(event) {
  //---------------------------------------------------------------------
  // Obtener el ID de la actividad del atributo de datos del elemento div
  //---------------------------------------------------------------------
  const activity = event.currentTarget.dataset.activityId;
  //------------------------------------------------------------
  // Llamar al método para eliminar la actividad del repositorio
  //------------------------------------------------------------
  repository.deleteActivity(parseInt(activity)); // Parseamos a entero ya que el ID puede estar almacenado como string
  //-------------------------------------------------------------------------------
  // Volver a renderizar las actividades para reflejar los cambios en el contenedor
  //-------------------------------------------------------------------------------
  renderActivities();
}
// Función que convierte TODAS las actividades en elementos HTML
function renderActivities() {
  // Selección del contenedor
  const container = document.getElementById("container");
  // Vaciar contenedor
  container.innerHTML = "";
  // Obtener array de actividades
  const activities = repository.getAllActivities();
  // Mapeo (modificación) del listado de actividades para convetirlos en elementos HTML
  const htmlElements = activities.map((act) => createHTMLFromActivity(act));
  // Appendear todos los elementos HTML del nuevo array dentro del contenedor
  htmlElements.forEach((activityHtml) => container.appendChild(activityHtml));
}
// Se captura el boton
const button = document.querySelector("#add");
// Función handler
function handler() {
  // Capturo inputs
  const title = document.getElementById("titulo");
  const description = document.getElementById("descripcion");
  const imgUrl = document.getElementById("imagen");
  // Extraigo valores
  const valueTitle = title.value;
  const valueDescription = description.value;
  const valueImgUrl = imgUrl.value;
  // Validación
  // Nota: Al negar (!) los valores, verfico si es true (osea que si tiene un contendio) y lo vuelvo false para que no entre al if y viceversa
  // Nota2: El or (||) se utiliza para que TODOS los valores esten completos
  if (!valueTitle || !valueDescription || !valueImgUrl) {
    // Alerta por si algún valor esta sin llenar
    alert("¡Debes llenar todos los campos!");
    return;
  }
  // Llamar la instancia de Repository para crear una nueva actividad
  repository.createActivity(valueTitle, valueDescription, valueImgUrl);
  // Refresco el contenedor
  renderActivities();
}
// Manejador o constructor del evento
button.addEventListener("click", handler);

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});
