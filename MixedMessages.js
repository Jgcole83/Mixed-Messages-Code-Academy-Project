const messages = {
    opening: ["Today is going to be a great day!", "Life is what you make of it.", "The future is bright, keep going!", "Seize the day with enthusiasm!"],
    middle: ["You have the power to make things happen.", "Believe in yourself and the world will believe in you.", "Push through and achieve your dreams!", "Nothing is impossible if you try."],
    closing: ["Stay positive!", "Good things are on their way!", "Keep smiling!", "Your potential is limitless."]
  };
  
  const generateRandomMessage = () => {
    const opening = messages.opening[Math.floor(Math.random() * messages.opening.length)];
    const middle = messages.middle[Math.floor(Math.random() * messages.middle.length)];
    const closing = messages.closing[Math.floor(Math.random() * messages.closing.length)];
  
    return `${opening} ${middle} ${closing}`;
  };
  
  document.getElementById('generateMessageBtn').addEventListener('click', function() {
    const randomMessage = generateRandomMessage();
    document.getElementById('message').textContent = randomMessage;
  });
  