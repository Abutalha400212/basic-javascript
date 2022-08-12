//check Best Friend //
const friends = [{ name: 'true', friend: 'babul' },
{ name: 'babul', friend: 'true' }];
function isBestFriend(friends) {
    const friend1 = Object.values(friends[0])
    const errorFriend10 = typeof (friend1[0])
    const errorFriend11 = typeof (friend1[1])
    const friend2 = Object.values(friends[1])
    const errorFriend20 = typeof (friend2[0])
    const errorFriend21 = typeof (friend2[1])

    if (errorFriend10 !== 'string' || errorFriend11 !== 'string' || errorFriend20 !== 'string' || errorFriend21 !== 'string') {
        return ('Eror: Please provide a String Type Javascript!')
    }
    else if ((friend1[0]) == (friend2[1]) && (friend1[1]) == (friend2[0])) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isBestFriend(friends));