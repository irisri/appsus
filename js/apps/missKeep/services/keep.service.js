import utilService from "../../../services/util.service.js";

export const keepService = {
  getNotes,
  updateNotes,
  removeNotes,
  removeOneTodo,
  addNote,
  pinNote
};

const KEY = "notes";

var gNotes = createNotes();

function createNotes() {
  let notes = utilService.loadFromStorage(KEY);
  if (notes) return notes;
  notes = [
    {
      id: utilService.makeId(),
      type: "noteText",
      isPinned: true,
      info: {
        txt: "Fullstack Me Baby!",
      },
    },
    {
      id: utilService.makeId(),
      type: "noteImg",
      info: {
        url: "img/gears.png",
        title: "Me playing Mi",
      },
      style: {
        backgroundColor: "#00d",
      },
    },
    {
      id: utilService.makeId(),
      type: "noteTodos",
      isPinned: true,
      info: {
        label: "How was it:",
        todos: [
          {
            id: utilService.makeId(),
            txt: "Do that",
            doneAt: null,
          },
          {
            id: utilService.makeId(),
            txt: "Do this",
            doneAt: 187111111,
          },
        ],
      },
    },
    // {
    //   id: utilService.makeId(),
    //   type: 'noteAudio',
    //   info: {
    //     url: 'audio/bensound-clearday.mp3',
    //     title: 'It\'s a clear day!',
    //   },
    // },
    {
      id: utilService.makeId(),
      type: "noteVideo",
      info: {
        url: "video/production.mp4",
        title: "It's a clear day!",
      },
    },
  ];

  utilService.saveToStorage(KEY, notes);
  console.log('notes2', notes)
  return notes;
}

function getNotes() {
  return Promise.resolve(utilService.loadFromStorage(KEY));
}

function getNoteById(id) {
  return Promise.resolve(gNotes.find((note) => note.id === id));
}

function addNote(info) {
  console.log("adding... continu writing", info);
  let note = {id: utilService.makeId()};
  if (info.type === 'noteVideo') {
    note.type = info.type;
    note.info = {
        url: info.txt
    };
  } else if (info.type === 'noteTodos') {
    note.type = info.type;
    note.info = {
        label: info.txt,
        todos: [{
          id: utilService.makeId(),
            txt: null,
            doneAt: null,
        }],
    } 
  } else if (info.type === 'noteText') {
    note.type = info.type;
    note.info = {
      txt: info.txt,
    }
  } else {
    note.type = info.type;
    note.info = {
        url: info.txt,
      }
  }

  gNotes.push(note);
  utilService.saveToStorage(KEY, gNotes);
  return Promise.resolve(gNotes);
}

function _createTodo() {
  return {
    id: utilService.makeId(),
    txt: null,
    doneAt: null
  }
}

function pinNote(noteId) {
  return getNoteById(noteId).then((note) => {
    if (!note.isPinned) note.isPinned = false;
    note.isPinned = !note.isPinned;
    return gNotes;
  })
}

function updateNotes(noteId, info) {
  // console.log(noteId, gNotes);
  return getNoteById(noteId).then((note) => {
    // console.log(note.type);
    
    if (note.type === "noteText") note.info.txt = info;
    else if (note.type === "noteTodos") {
      const index = note.info.todos.findIndex(todo => todo.id === info.id);
      if (index >= 0) note.info.todos[index] = info;
      else {
        console.log('new todo')
        note.info.todos.push(_createTodo());
      }
    }
    utilService.saveToStorage(KEY, gNotes);
    console.log('saving');
    return gNotes;
  }); 
}

function getIndexNote(id) {
  return Promise.resolve(gNotes.findIndex((note) => note.id === id))
}

function removeNotes(noteId) {
  console.log(noteId);
  return getIndexNote(noteId).then(index => {
    gNotes.splice(index, 1);
    utilService.saveToStorage(KEY, gNotes);
    return gNotes;
  })
}

function removeOneTodo(noteId, todoId) {
  console.log(noteId, todoId);
  return getNoteById(noteId).then(note => {
    const index = note.info.todos.findIndex(todo => todo.id === todoId);
    note.info.todos.splice(index, 1);
    utilService.saveToStorage(KEY, gNotes);
    return gNotes;
  })
}
