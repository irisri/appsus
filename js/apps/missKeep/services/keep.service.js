import utilService from "../../../services/util.service.js";

export const keepService = {
  getNotes,
};

var KEY = 'notes' 

var notes = [
  {
    id: utilService.makeId(),
    type: "NoteText",
    isPinned: true,
    info: {
      txt: "Fullstack Me Baby!",
    },
  },
  {
    id: utilService.makeId(),
    type: "NoteImg",
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
    type: "NoteTodos",
    info: {
      label: "How was it:",
      todos: [
        {
          txt: "Do that",
          doneAt: null,
        },
        {
          txt: "Do this",
          doneAt: 187111111,
        },
      ],
    },
  },
  {
    id: utilService.makeId(),
    type: "NoteAudio",
    info: {
      url: "audio/bensound-clearday.mp3",
      title: "It\'s a clear day!",
    },
  },
  {
    id: utilService.makeId(),
    type: "NoteVideo",
    info: {
      url: "video/production.mp4",
      title: "It\'s a clear day!",
    },
  },
];

function getNotes() {
  if (!utilService.loadFromStorage(KEY)) {
    utilService.saveToStorage(KEY, notes);
  }
  return Promise.resolve(utilService.loadFromStorage(KEY))
}

function getNote(id) {
  return notes.find(note => note.id === id);
}

function addNotes(type, info) {
  var note = {
    id: utilService.makeId(),
  }
  console.log('adding... continu writing')
}

function updateNotes(info) {
  console.log('update notes... continu writing');
}

function removeNotes(id) {
  console.log('update notes... continu writing');
}