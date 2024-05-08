// Select the target element by id
const targetItem = document.getElementById("target");

/**
 * Handles the drag start event.
 * Sets the data transfer object with the id of the dragged element and allows it to be moved.
 * @param {DragEvent} event - The drag event.
 */
function dragStartHandler(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.dataTransfer.effectAllowed = "move";
}

/**
 * Handles the drag over event.
 * Prevents the default action to allow a drop and sets the drop effect to "move".
 * @param {DragEvent} event - The drag over event.
 * @returns {boolean} Always returns false to indicate the event is handled.
 */
function dragOverHandler(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  return false;
}

/**
 * Handles the drag enter event.
 * Adds a 'hovered' class to the target element when a dragged element enters its area.
 * @param {DragEvent} event - The drag enter event.
 */
function dragEnterHandler(event) {
  targetItem.classList.add('hovered');
}

/**
 * Handles the drag leave event.
 * Removes the 'hovered' class from the target element when a dragged element leaves its area.
 * @param {DragEvent} event - The drag leave event.
 */
function dragLeaveHandler(event) {
  targetItem.classList.remove('hovered');
}

/**
 * Handles the drop event on the target element.
 * Stops the propagation of the event, retrieves the dragged element's id from the data transfer object,
 * and appends the dragged element to the target element.
 * @param {DragEvent} event - The drop event.
 * @returns {boolean} Always returns false to indicate the event is handled.
 */
function dropHandler(event) {
  event.stopPropagation();
  const data = event.dataTransfer.getData("text/plain");
  event.target.appendChild(document.getElementById(data));
  return false;
}

/**
 * Handles the drag end event.
 * Removes the 'hovered' class from the target element when the drag operation is complete.
 * @param {DragEvent} event - The drag end event.
 */
function dragEndHandler(event) {
  targetItem.classList.remove('hovered');
}
