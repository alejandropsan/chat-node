'use strict'

async function login(url, datos){
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        if(response.status === 200 && response.ok){
        }
        return await response.json();

        



    } catch (error) {
        return console.error('Error:', error);
    }


}

var dataname = document.getElementById('name');
var dataUsername = document.getElementById('username');

function loginUser(){
    login('/login', {
        name: dataname.value,
        username: dataUsername.value
    });
}