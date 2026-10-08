const user = {
    name: "John",
    address: {
        city: "Bangalore",
        location: {
            latitude: 12.97,
            longitude: 77.59
        }
    }
};
console.log(user.name);
console.log(user.address.city);
console.log(user.address.location.latitude);
console.log(user.address.location.longitude);
console.log(user.address?.company?.name)