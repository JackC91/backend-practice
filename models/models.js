import { data } from "../lib/lib.js";

export function getData(){
      return data;
}

export function getDataByName(name) {
    let user = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase().includes(name.toLowerCase())) {
        user.push(data[i])
        }
    }
    return user;
}

export function getDataById(id_num) {
    let user = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id_num) {
        user.push(data[i])
        }
    }
    return user;
}

export function getDataByOccupation(role) {
    let user = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].occupation.toLowerCase().includes(role.toLowerCase())) {
        user.push(data[i])
        }
    }
    return user;
}

export function createNewUser(body) {
    const newData = data;
    newData.push(body);
    return newData;
}

export function updateUser(id, body) {

}