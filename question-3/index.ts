// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

let guest_list:string[]=["zarnish","yumna","Adeena","Faria"]//guest list

console.log("Old Guest list :",guest_list)//old list

console.log("\n")

let unable_to_attend:string="Adeena"//guest not come

let new_guest:string="Waniya"//new guest come

//Replace a new guest in a list with a person who is not able to come to school.
guest_list[guest_list.indexOf(unable_to_attend)] = new_guest;

console.log("Updated Guest list : ",guest_list);// for checking replacement of a person.

console.log("\n")

guest_list.forEach(newlist => {

    console.log(`Dear ${newlist}, You are invited for dinner at my house at 8:00 p.m. sharp.`)
    
});

