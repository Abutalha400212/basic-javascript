// check Best Friend Between Two Object Values//
const friend1 = { name: 'tata', friend: 'babul' };
const friend2 = { name: 'babul', friend: 'tata' };
function isBestFriend(friend1, friend2) {
    const a = Object.values(friend1);
    const b = Object.values(friend2);
    if (typeof (a[0]) !== 'string' || typeof (a[1]) !== 'string' || typeof (b[0]) !== 'string' || typeof (b[1]) !== 'string') {
        // Don't provide InValid Keyword//
        return ('Eror: Please provide a String Type Javascript!')
    }
    else if (a[0] == b[1] && b[0] == a[1]) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isBestFriend(friend1, friend2))