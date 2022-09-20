import PocketBase from '/scripts/pocketbase.es.mjs'
var $ = function (id) { return document.getElementById(id) }
const client = new PocketBase('http://localhost:8090');

console.log('client.authStore.isValid', client.authStore.isValid);
if (client.authStore.isValid) { //if is logged in
    const userModel = client.authStore.model
    //alert(userModel.email)
    $('login').innerText = `${userModel.email}`
}