let lunches = [];

function addLunchToEnd(menuArray, lunchString) {
  menuArray.push(lunchString);
  console.log(`${lunchString} added to the end of the lunch menu.`);
  return menuArray;
}

function addLunchToStart(menuArray, lunchString) {
  menuArray.unshift(lunchString);
  console.log(`${lunchString} added to the start of the lunch menu.`);
  return menuArray;
}

function removeLastLunch(menuArray) {
  if(menuArray.length===0) {
    console.log("No lunches to remove.");
    return menuArray;
  }
  const removedItem = menuArray[menuArray.length - 1];
  menuArray.pop();
  console.log(`${removedItem} removed from the end of the lunch menu.`);
  return menuArray;
}

function removeFirstLunch(menuArray) {
  if(menuArray.length===0) {
    console.log("No lunches to remove.");
    return menuArray;
  }
  const removedItem = menuArray[0];
  menuArray.shift();
  console.log(`${removedItem} removed from the start of the lunch menu.`);
  return menuArray;
}

function getRandomLunch(menuArray) {
  if (menuArray.length === 0) {
    console.log('No lunches available.');
  }
  const randomIndex = Math.floor(Math.random()*menuArray.length);
  const randomLunch = menuArray[randomIndex];
  console.log("Randomly selected lunch: " + randomLunch);
}

function showLunchMenu(menuArray) {
  if (menuArray.length === 0) {
    console.log('The menu is empty.');
  }
  else {
    console.log(`Menu items: ${menuArray.join(", ")}`);
  }
}
