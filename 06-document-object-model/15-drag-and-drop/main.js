/* draggable element */
const item = document.querySelector('.item');

item.addEventListener('dragstart', dragStart);

/**
 * Initiates the drag operation by setting the data type and the value of the dragged element.
 * This function is called when the dragstart event is triggered. It sets the data transfer object
 * with the ID of the dragged element, allowing it to be accessed in other drag and drop events.
 * Additionally, it temporarily hides the dragged element to provide a visual cue that the drag
 * operation has started.
 *
 * @param {DragEvent} e - The drag event object.
 */
function dragStart(e) {
  // Set the data transfer object with the type 'text/plain' and the value of the dragged element's ID
  e.dataTransfer.setData('text/plain', e.target.id);
  // Temporarily hide the dragged element to indicate that it is being dragged
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
}

/* drop targets */
const boxes = document.querySelectorAll('.box');

/**
 * Adds event listeners for drag and drop functionality to a given box element.
 * This function sets up the box to respond to various drag and drop events,
 * enabling it to act as a drop target in the drag and drop operation.
 *
 * @param {Element} box - The DOM element to which drag and drop event listeners will be added.
 */
box => {
  // Listen for the dragenter event to add visual cues or perform actions when a draggable item enters the box
  box.addEventListener('dragenter', dragEnter)
  // Listen for the dragover event to allow the draggable item to be dropped into the box
  box.addEventListener('dragover', dragOver);
  // Listen for the dragleave event to remove visual cues or reverse actions when a draggable item leaves the box without being dropped
  box.addEventListener('dragleave', dragLeave);
  // Listen for the drop event to handle the dropping of the draggable item into the box, including moving or copying the item
  box.addEventListener('drop', drop);
}

/**
 * Fired when an element is being dragged over the target.
 * @param {DragEvent} e The drag event.
 */
function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

/**
 * Handles the dragover event on a drop target.
 * This function prevents the default behavior to allow for a drop and
 * adds a visual cue to indicate that the element is a valid drop target.
 *
 * @param {DragEvent} e - The drag event object.
 */
function dragOver(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}



/**
 * Handles the dragleave event on a drop target.
 * This function removes the visual cue that indicates the element is a valid drop target.
 *
 * @param {DragEvent} e - The drag event object.
 */
function dragLeave(e) {
  e.target.classList.remove('drag-over');
}

/**
 * Handles the drop event on a drop target.
 * This function removes the 'drag-over' class from the target to remove the visual cue,
 * retrieves the draggable element using its ID obtained from the dataTransfer object,
 * appends the draggable element to the drop target, and finally makes the draggable element visible.
 *
 * @param {DragEvent} e - The drag event object.
 */
function drop(e) {
  // Remove the 'drag-over' class to indicate that the element is no longer being dragged over
  e.target.classList.remove('drag-over');

  // Retrieve the ID of the draggable element from the dataTransfer object
  const id = e.dataTransfer.getData('text/plain');
  // Get the draggable element by its ID
  const draggable = document.getElementById(id);

  // Append the draggable element to the drop target
  e.target.appendChild(draggable);

  // Make the draggable element visible by removing the 'hide' class
  draggable.classList.remove('hide');
}
