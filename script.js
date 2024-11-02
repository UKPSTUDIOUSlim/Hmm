       const loadingTime = 3000; // Set to 3000 milliseconds (3 seconds)
    // Start the timer
    setTimeout(() => {
      // Hide the loading screen and show the portfolio
      const loader = document.querySelector('.loader');
      const loadingText = document.querySelector('.loading-text');
      const portfolio = document.getElementById('portfolio');
        loader.style.display = 'none';
      loadingText.style.display = 'none';
      portfolio.style.display = 'block';
      // Show the PFP after loading
      const pfpContainer = document.querySelector('.pfp-container');
      pfpContainer.style.display = 'block'; 
    }, loadingTime);
      const pfp = document.querySelector('.pfp');
    pfp.addEventListener('click', () => {
      alert('Please log in to view your profile.');
    });
setTimeout(() => {
  // Hide the loading screen and show the portfolio
  const loader = document.querySelector('.loader');
  const loadingText = document.querySelector('.loading-text');
  const portfolio = document.getElementById('portfolio');
    loader.style.display = 'none';
  loadingText.style.display = 'none';
  portfolio.style.display = 'block';
  // Show the PFP after loading
  const pfpContainer = document.querySelector('.pfp-container');
  pfpContainer.style.display = 'block'; 

    document.body.style.display = 'block'; 
}, loadingTime);
