// Get the form element
const myForm = document.querySelector('.myForm');
const cardsContainer = document.querySelector('.right');

// clear input fields
const clear = document.querySelector('.clear');
clear.addEventListener("click", function () {
    myForm.reset();
});


// Add an event listener to the form submission
myForm.addEventListener('submit', (event) => {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the form values
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const website = document.querySelector('#website').value;
    const image = document.querySelector('#image').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map((checkbox) => checkbox.value)
        .join(', ');

    // Create new card
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerHTML = `
<div class="card-body">
<div class="image">
<img src="${image}" alt="userimg">
</div>
<div class="details">
<div class="detail-row">
  <div class="detail-value">${name}</div>
</div>
<div class="detail-row">
  <div class="detail-value">${email}</div>
</div>
<div class="detail-row">
  <div class="detail-value">${website}</div>
</div>
<div class="detail-row">
  <div class="detail-value">${gender}</div>
</div>
<div class="detail-row">
  <div class="detail-value">${skills}</div>
</div>
</div>

</div>
`;

    // Add new card to cards container
    cardsContainer.appendChild(newCard);

    // Clear form inputs
    myForm.reset();
});

