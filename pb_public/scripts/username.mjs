import PocketBase from '/scripts/pocketbase.es.mjs'
var $ = function (id) { return document.getElementById(id) }
const client = new PocketBase('https://dic.kykvit.com');

console.log('client.authStore.isValid', client.authStore.isValid);
if (client.authStore.isValid) { //if is logged in
    const userModel = client.authStore.model
    //alert(userModel.email)
    $('login').innerText = `${userModel.email}`
}

//http://localhost:8090
//https://dic.kykvit.com