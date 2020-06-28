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
        {name: 'Moshe Coehn', address: 'moshecohen5551@walla.co.il', subject: 'I need your help with my site!', isRead: false, sentAt : 1551133930592, body: "I can't find my site address, do you have it?"},
        {name: 'Aviram Levi', address: 'aviramlevi@walla.co.il', subject: 'Did you call me?', isRead: false, sentAt : 1551133930592, body: 'My phone number is *100'},
        {name: 'Facebook', address: 'help@facebook.com', subject: 'You have new notification!', isRead: false, sentAt : 1551133930592, body: 'You have a new friend request, check your profile for more information'},
        {name: 'Roy', address: 'roy321312@gmail.com', subject: 'hii!', body:'The opportunity of a lifetime passed before him as he tried to decide between a cone or a cup. He quietly entered the museum.', isRead: false, sentAt : 1551133930592},
        {name: 'Avocode', address: 'luboAvocode321@gmail.com', subject: 'Get back to your projects', body: 'Hello asia, Your free trial expired a week ago, and we already miss you. 💔Your projects, designs, and share links have been automatically locked. The good news is you can still get them back.Purchase a subscription within 7 days to unlock your projects.', isRead: false, sentAt : 1551133930594},
        {name: 'Dropbox‏', address: '123Dropbox‏@gmail.com', subject: 'shared folders', body: 'Good things happen when your stuff lives here Files in shared folders are automatically updated whenever anyone makes a change.', isRead: true, sentAt : 1551133930593},
    ];
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