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
    // getEmptyEmail 
}

function getById(emailId) {
    const email = gEmail.find( email=>email.id === emailId);
     return Promise.resolve(email);
}

// function getEmptyEmail() {
//     return {
        
//     };
// }


function createEmails() {
    return  [
        {name: 'muki', address: 'muki@gmail.com', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930593},
        {name: 'muki', address: 'muki@gmail.com', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930592},
        {name: 'muki', address: 'muki@gmail.com', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
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