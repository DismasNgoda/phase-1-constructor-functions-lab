function Scooter(year, color, model){
    this.year = year;
    this.color = color;
    this.model = model;
}
let Day = new Scooter(2022, "yellow", "yawn");

function Driver(name, age, experience){
    this.name = name;
    this.age = age;
    this.experience = experience
}
let Tay = new Driver("Tay", 16, "1 year");

function PickupLocation(address, city){
    this.address = address;
    this.city = city;
}
let moringa = new PickupLocation("Ngong Road", "Nairobi");