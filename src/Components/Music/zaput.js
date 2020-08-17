console.log('початок запиту');

axios
    .get('https//nvlknv.com/users')
    .then(data => console.log(data));

console.log('кінець запиту');
