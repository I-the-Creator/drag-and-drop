const item = document.querySelector('.item');   // get elemant by its class
// console.log(item);
const placeholders = document.querySelectorAll('.placeholder');  // get elemant by its class and create array of elements with class 'placeholder'
// console.log(placeholders);


item.addEventListener('dragstart', dragstart);   // start of drag event
item.addEventListener('dragend', dragend);    // end of drag event

for (const placeholder of placeholders) {   // for loop, for one iteration extract element form array and put it in  variable 'placehoder', which can be handled 
    // console.log(placeholder);

    //  to add vent listeners to created elements
    placeholder.addEventListener('dragover', dragover);    // when element above placeholder (placeholder - the place where we can put the dragged element)
    placeholder.addEventListener('dragenter', dragenter);      //  when element is in placeholder area
    placeholder.addEventListener('dragleave', dragleave);      // when leaving placeholder area
    placeholder.addEventListener('drop', dragdrop);           // when draggable element released
}  


function dragstart(event) {     // start of drag event (can have either name) handler
    console.log('drag start', event.target);  // better to use 'event.target' in order to get access to element
    console.log('drag start', this);    // the same as above but it's more likely to make a mistake in code using 'this'
    event.target.classList.add('hold');   // add 'hold' class during dragging
    setTimeout(() =>  event.target.classList.add('hide'), 0); // add 'hide' class during dragging by timeout
}

function dragend(event) {             // end of drag event (can have either name) handler
    console.log('drag end');
    event.target.className = 'item'; // delete all existing classes and add class 'item'

      //  other ways to delete class 
//     event.target.classList.remove('hold');  // remove'hold' class upon release
//     event.target.classList.remove('hide');  // remove'hide' class upon release
//     event.target.classList.remove('hold', 'hide');  // remove 'hide' and 'hold' in one string
}


function dragover (event) {    // switch off default behavior for 'dragover' event, by default we can't move element to another place (div, etc)
    event.preventDefault();    
// console.log('drag over');
}

function dragenter (event) {
    event.target.classList.add('hovered')   //  add class 'hovered' to placeholder when draggable element is in placeholder area
    // console.log('drag enter');
}

function dragleave (event) {
    event.target.classList.remove('hovered')   // remove class 'hovered' for placeholder when draggable element is leaving placeholder area
    // console.log('drag leave');
}

function dragdrop (event) {
    event.target.classList.remove('hovered');  // remove class 'hovered' for placeholder when draggable element is dropped in new place
    event.target.append(item);     //  add element item (from const) to active placeholder, which has draggable element in its area at the moment 
    // console.log('drag drop');
}
