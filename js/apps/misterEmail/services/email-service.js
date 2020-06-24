'use strict';

import utilService from '../../../services/util.service.js'

var gEmails = (() => {
    var emails = utilService.loadFromStorage('emails');
    if (!emails) {
        emails = createEmails();
        utilService.saveToStorage('emails', emails);
    }
    return emails;
  })();

export const emailService = {
    getInboxEmails,
    getById,
    saveEmail,
}

function getById(emailId) {
    const email = gEmail.find( email=>email.id === emailId);
     return Promise.resolve(email);
}



function createEmails() {
    return  [
        {name: 'muki', address: 'muki@gmail.com', subject: 'Wassap?', body: 'Pick up! loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', isRead: false, sentAt : 1551133930592},
        {name: 'muki', address: 'muki@gmail.com', subject: 'Wassap?', body: 'Pick up! loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', isRead: false, sentAt : 1551133930594},
        {name: 'muki', address: 'muki@gmail.com', subject: 'Wassap?', body: 'Pick up! loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', isRead: false, sentAt : 1551133930593},
    ]
}

function getInboxEmails() {
    return Promise.resolve(gEmails);
}

function saveEmail(email) {
    if (email.id) {
        const idx = gEmails.findIndex(currEmail => currEmail.id === email.id)
        gEmails.splice(idx, 1, email)
    } else {
        email.id = Utils.getRandomId();
        email.createdAt = Date.now();
        gEmails.unshift(email);
    }
    return Promise.resolve(email);
  }