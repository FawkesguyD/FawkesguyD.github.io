const input = document.getElementById('input')
const create_btn = document.getElementById('create')
const list = document.getElementById('list')

const notes = [
    {
        title: 'do eng homework',
        completed: false
    }, 
    {
        title:'clean my room',
        completed: true
    }
]

//? Render of list
function render() {
    if (notes.length === 0) {
        list.innerHTML = `<p style="color: white;">you don't have any notes</p>`
    }
    else {
        list.innerHTML = ``
        notes.sort((a, b) => a.completed - b.completed);
    }
    for (let index = 0; index < notes.length; index++) {
        list.insertAdjacentHTML('beforeend', getNoteTemplate(notes[index], index))
    }
}
render()


//? Listener of create button
create_btn.onclick = function () {
    if (input.value === '') {
        alert('Please enter a value')
        return
    }
    const newNote = {
        title: input.value,
        completed: false
    }
    notes.push(newNote)
    render()
    input.value = ''

    console.log('click')
}


list.onclick = function(event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'check') {
            notes[index].completed = !notes[index].completed
        }
        if (type === 'remove') {
            console.log('remove');
            notes.splice(index, 1);
        }
    }
    render()
}



function getNoteTemplate(note, index) {
    const complete_flag = note.completed
    return `<li id="element">
                        <div class="${complete_flag ? 'background-gray' : ''} flex-end enter_form change_form disableBorder">
                            <span class="text ${complete_flag ? 'text-decoration-line-through' : ''}">${note.title}</span>
                            <div class="button-group">
                                <button type="button" class="${complete_flag ? 'btn-color-completed' : 'btn-success'} figma_Button btn" data-index="${index}" data-type="check">&#10003;</button>
                                <button type="button" class="figma_Button btn btn-danger" data-index="${index}" data-type="remove" >&#10008;</button>
                            </div>
                        </div>
                    </li>`
}

//! Object Theory

// const person = {
//     fistName: 'Daniel',
//     lastName: 'G',
//     year: 2004,
//     getFullName: function () {
//         return person.fistName + ' ' + person.lastName
//     }
// }

// console.log(person.getFullName())

//! -------------------