// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var fav_mode_transport = ["Audi car", "Aeroplane", "Landcruiser", "Vitz"];
for (var i = 0; i < fav_mode_transport.length; i++) {
    console.log("\"I would like to own a ".concat(fav_mode_transport[i], "\" "));
}
