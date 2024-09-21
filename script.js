// Get all rating buttons
const ratingButtons = document.querySelectorAll('.rating-numbers .rating-button');
const submitButton = document.querySelector('.submit-button button');
let selectedRating = 0;

// Function to highlight buttons up to the selected rating
function highlightButtons(rating) {
  ratingButtons.forEach((button, index) => {
    if (index < rating) {
      button.style.backgroundColor = 'white';
      button.style.color = '#121417';
    } else {
      button.style.backgroundColor = '';
      button.style.color = '';
    }
  });
}

// Add click event listeners to rating buttons
ratingButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    selectedRating = index + 1;
    highlightButtons(selectedRating);
  });
});

// Add click event listener to submit button
submitButton.addEventListener('click', () => {
  if (selectedRating > 0) {
    // Save the rating to localStorage
    localStorage.setItem('userRating', selectedRating);
    switchCard2();
    updateRatingDisplay();
  }
});

// Function to update rating display
function updateRatingDisplay() {
  const ratingCountElement = document.getElementById('rating-count');
  const savedRating = localStorage.getItem('userRating');
  if (savedRating) {
    ratingCountElement.textContent = savedRating;
  }
}

// Call updateRatingDisplay on page load
updateRatingDisplay();

function switchCard2() {
  document.getElementById('showcard1').style.display = 'none';
  document.getElementById('showcard2').style.display = 'block';
}

function showcard1() {
  document.getElementById('showcard1').style.display = 'block';
  document.getElementById('showcard2').style.display = 'none';
}