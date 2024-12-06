function writeCards(names, event) {
    const messages = []; // Create a new empty array to hold the messages
    for (let i = 0; i < names.length; i++) {
      // Build the custom thank-you message for each name
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message); // Add the message to the array
    }
    return messages; // Return the array with all the messages
  }
  
  // Example usage:
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number); // Log the current number
      number--; // Decrement the number
    }
  }
  
  // Example usage:
  countDown(10);

  
  