function rant(message) {
  const msg = message.toUpperCase();
  for (let i = 0; i < 3; i++) {
    console.log(msg);
  }
}

rant("I hate beets");
