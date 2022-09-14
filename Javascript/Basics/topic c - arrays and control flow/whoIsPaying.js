const friends = ["Frank", "Coleam", "Janet", "Jimmy", "Peninah", "Faith", "Tasha", "Pete"];

function whoIsPaying() {
    let randNum = Math.floor(Math.random() * (friends.length));
    console.log(`${friends[randNum]} is paying for Lunch.`);
}

whoIsPaying();