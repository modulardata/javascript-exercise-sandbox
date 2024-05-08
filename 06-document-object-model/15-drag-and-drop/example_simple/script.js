// Select the target element by id
const targetItem = document.getElementById("target");

function dragStartHandler(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.dataTransfer.effectAllowed = "move";
}

function dragOverHandler(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  return false;
}


// Add a 'hovered' class when the dragged element hits the target area
function dragEnterHandler(event) {
  targetItem.classList.add('hovered');
}

// Remove the 'hovered' class when the dragged element leaves the target area
function dragLeaveHandler(event) {
  targetItem.classList.remove('hovered');
}


/**
 * Event handler for the drop event on the target element.
 * @param {DragEvent} event - The drop event.
 */
function dropHandler(event) {
  event.stopPropagation();
  const data = event.dataTransfer.getData("text/plain");
  event.target.appendChild(document.getElementById(data));
  return false;
}

function dragEndHandler(event) {
  targetItem.classList.remove('hovered');
}
