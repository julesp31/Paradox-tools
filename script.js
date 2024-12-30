  // Target the buttons and the container
  const textContainer = document.querySelector('.text-container');
  const btnOne = document.querySelector('.btn-one');
  const btnTwo = document.querySelector('.btn-two');
  
  // Add click event listeners
  btnOne.addEventListener('click', () => {
    textContainer.style.marginLeft = '250px'; // Move the text container
    textContainer.style.marginRight = '10px';
  });
  
  btnTwo.addEventListener('click', () => {
    textContainer.style.marginLeft = '10px'; // Reset the text container
  });
  