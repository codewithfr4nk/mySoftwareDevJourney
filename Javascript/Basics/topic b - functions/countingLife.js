function lifeInCounting(age) {
    const yearsLeft = 90 - age;
    const daysLeft = yearsLeft * 365;
    const monthsLeft = yearsLeft * 12;
    const weeksLeft = yearsLeft * 52;
    console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, " + monthsLeft + " months left to live.");
}

lifeInCounting(20)