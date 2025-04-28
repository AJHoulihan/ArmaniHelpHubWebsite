// Custom charity names for later
const charityNames = [
    "United Way of America",
    "Nonprofit & Elderly Assistance Center",
    "Food for Youngsters Foundation"
  ];
  
// GET request
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // Verify server response
    if (!response.ok) {
      throw new Error('HTTP error');
    }
    return response.json();
  })

  .then(data => {
    const charityTitles = document.querySelectorAll('h2');
    const descriptionDivs = document.querySelectorAll('div[onmouseover]');

    charityTitles.forEach((title, i) => {
      if (descriptionDivs[i]) {
        // Set custom charity name
        title.textContent = charityNames[i];

        // Set description from fetched data
        descriptionDivs[i].textContent = `Join us in making a difference in ${data[i].address.city}!`;

        // Extra info for when mouseover the description
        descriptionDivs[i].onmouseover = () => {
          descriptionDivs[i].innerHTML = `${data[i].address.city}, ${data[i].address.street}`;
        };
        // Return original description on mouseout
        descriptionDivs[i].onmouseout = () => {
          descriptionDivs[i].innerHTML = `Join us in making a difference in ${data[i].address.city}!`;
        };
      }
    });
  })
  // Catch for server response error
  .catch(error => {
    console.error('There was a problem fetching charity data...', error);
  });

  
document.addEventListener("DOMContentLoaded", () => {
  // Buttons and Forms for each charity, had to seperate each because not all of them would work otherwise
  const volunteer1 = document.getElementById("volunteer1");
  const contactForm1 = document.getElementById("contactForm1");

  const volunteer2 = document.getElementById("volunteer2");
  const contactForm2 = document.getElementById("contactForm2");

  const volunteer3 = document.getElementById("volunteer3");
  const contactForm3 = document.getElementById("contactForm3");

  // Handle volunteer button clicks and show/hide contact forms
  const volunteerEventHandler = (volunteerButton, contactForm) => {
    volunteerButton.addEventListener("click", () => {
      contactForm.style.display = "block";
      volunteerButton.style.display = "none";
    });
  };

  // Attach event listeners
  volunteerEventHandler(volunteer1, contactForm1);
  volunteerEventHandler(volunteer2, contactForm2);
  volunteerEventHandler(volunteer3, contactForm3);
});

// For charities page
document.addEventListener('DOMContentLoaded', () => {
    // Select the list items by their IDs
    const charity1 = document.getElementById("charity1-link");
    const charity2 = document.getElementById("charity2-link");
    const charity3 = document.getElementById("charity3-link");

    // Assign the charity names
    charity1.textContent = charityNames[0];
    charity2.textContent = charityNames[1];
    charity3.textContent = charityNames[2];
});