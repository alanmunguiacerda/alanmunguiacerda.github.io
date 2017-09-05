const itemsContainer = $('#items_container');
const options = $('#options');
const addChildren = $('#add_children');
const removeChildren = $('#remove_children');
const itemsContainerWidth = $('#container_width');
const itemsContainerHeight = $('#container_height');
let childrenCount = 0;

const flexboxOptions = {
    'flex-direction': ['row', 'column'],
    'justify-content': [
        'flex-start', 
        'flex-end', 
        'center', 
        'space-between' , 
        'space-around', 
        'space-evenly',
    ],
    'align-items': [
        'flex-start',
        'flex-end',
        'center',
        'stretch',
        'baseline',
    ],
    'align-content': [
        'flex-start', 
        'flex-end', 
        'center', 
        'space-between' , 
        'space-around', 
        'stretch'
    ],
    'flex-wrap': [
        'nowrap',
        'wrap',
        'wrap-reverse',
    ],
};

$.each(flexboxOptions, (key, style) => {
    const container = $('<div class="option"></div>');
    const label = $(`<label>${key}</label>`);
    const dropdown = $(`<select id="${key}"></select>`);
    $.each(style, (index, value) => {
        dropdown.append(`<option value="${value}">${value}</option>`);
    })
    container.append(label);
    container.append(dropdown);
    options.append(container);
});

$('select').change((e) => {
    itemsContainer.css(e.target.id, e.target.value);
});

addChildren.click(() => {
    childInput = $(`<input placeholder="order" id="order-item-${childrenCount}"></input>`);
    newChild = $(`<section id="${childrenCount}" class="item">Item: ${childrenCount}</section>`);
    newChild.append(childInput);
    newChild.css('min-width', getRandomInt(300, 100));
    newChild.css('min-height', getRandomInt(300, 100));
    newChild.css('background-color', getRandomColor());
    itemsContainer.append(newChild);
    childrenCount += 1;
    setInputEvents();
});

removeChildren.click(() => {
    if (!childrenCount) {
        return;
    }
    childrenCount -= 1;
    $(`#${childrenCount}`).remove();
});

itemsContainerWidth.change((e) => {
    itemsContainer.css('min-width', `${e.target.value}px`);
});

itemsContainerHeight.change((e) => {
    itemsContainer.css('min-height', `${e.target.value}px`);
});

function setInputEvents(){
    $('[id^="order-item-"]').change((e) => {
        parentElement = $(`#${e.target.parentElement.id}`);
        parentElement.css('order', e.target.value);
    });
}

function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

itemsContainer.css('min-height', '500px');