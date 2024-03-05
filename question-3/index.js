// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var guest_list = ["zarnish", "yumna", "Adeena", "Faria"]; //guest list
console.log("Old Guest list :", guest_list); //old list
console.log("\n");
var unable_to_attend = "Adeena"; //guest not come
var new_guest = "Waniya"; //new guest come
//Replace a new guest in a list with a person who is not able to come to school.
guest_list[guest_list.indexOf(unable_to_attend)] = new_guest;
console.log("Updated Guest list : ", guest_list); // for checking replacement of a person.
console.log("\n");
guest_list.forEach(function (newlist) {
    console.log("Dear ".concat(newlist, ", You are invited for dinner at my house at 8:00 p.m. sharp."));
});
