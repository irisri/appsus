'use strict';

import utilService from '../../../services/util.service.js'
// import emailListCmp from '../cmps/email-list.cmp.js';

var gEmails = createEmails();
let gAddress = 'iris-asia@gmail.com';
let gName = 'Asia Iris';
export const emailService = {
    getEmails,
    getById,
    saveEmail,
    getDate
}

function getById(emailId) {
    const email = gEmails.find( email=>email.id === emailId);
    if (!email) {
        return Promise.reject('could not find id ' + emailId)
    }
     return Promise.resolve(email);
}

function getDate(sentAt) {
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let date = new Date(sentAt);
        date = `${date.getDate()} ${months[date.getMonth()]}`;
        console.log(date);
        return date;
}


function createEmails() {
    let emails = utilService.loadFromStorage('emails');
    if (emails) return emails;
    emails = [
        {name: 'Roy', address: 'roy321312@gmail.com', subject: 'Wassap?', body: 'Pick up1! loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', isRead: false, sentAt : 1551133930592},
        {name: 'Moshe', address: 'moshe321@gmail.com', subject: 'Wassap?', body: 'Pick up2! loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', isRead: false, sentAt : 1551133930594},
        {name: 'Shiri', address: '123shiri@coding-academy.com', subject: 'Wassap?', body: 'Pick up3! loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', isRead: true, sentAt : 1551133930593},
    ];``
    emails = emails.map((currEmail) => {
        currEmail.id= utilService.makeId();
        currEmail.dateSent = getDate(currEmail.sentAt);
        currEmail.isSent = false;
        currEmail.isInbox = true;
        currEmail.isStarred = false;
        return currEmail;
      });
      utilService.saveToStorage('emails', emails);
      return emails;
}

function getEmails(status) {
     if (!status) return Promise.resolve(gEmails);
    if (status === 'inboxEmails' || !status) {
        let emails = gEmails.filter( email=> email.isInbox);
        return Promise.resolve(emails);
    }
    else if (status === 'sentEmails') { 
        let emails = gEmails.filter( email=> email.isSent);
        return Promise.resolve(emails);
    }
    else if (status === 'starredEmails') { 
        let emails = gEmails.filter( email=> email.isStarred);
        return Promise.resolve(emails);
    }
}

function saveEmail(email) {
    if (email.id) {
        const idx = gEmails.findIndex(currEmail => currEmail.id === email.id)
        gEmails.splice(idx, 1, email)
    } else {
        email.id = utilService.makeId();
        email.sentAt = Date.now();
        email.isSent = true;
        email.isInbox = (email.address.toLowerCase() === gAddress);
        email.dateSent = getDate(email.sentAt);
        // let date = new Date(email.sentAt);
        // let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        // email.dateSent = `${date.getDate()} ${months[date.getMonth()]}`;
        gEmails.unshift(email);
        console.log(email);
    }
    console.log(gEmails);
    utilService.saveToStorage('emails', gEmails);
    return Promise.resolve(email);
  }