function bottlesOfBeer() {
    for (let x = 100; x > 1; x--) {
        console.log(`${x} bottles of beer on the wall, ${x} bottles of beer.\nTake one down and pass it around, ${x-1} bottles of beer on the wall.`);
        if (x === 2) {
            console.log(`${x-1} bottle of beer on the wall, ${x-1} bottles of beer.\nTake one down and pass it around, no more bottles of beer on the wall.`);
            console.log(`no more bottles of beer on the wall, bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`);
            
        }
        
    }
}

bottlesOfBeer();
