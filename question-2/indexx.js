// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var invited_person = ["Zimmal", "Raina", "Kiara", "Sara"];
invited_person.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited at \"CG\", sharp 8:00 p.m for Dinner"));
    console.log("\n");
    console.log("Please come and join with us,Thankyou");
});
