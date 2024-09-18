'use strict';
const privateBtn = document.getElementById('privateBtn');
const tenderBtn = document.getElementById('tenderBtn');

privateBtn.addEventListener('click', function () {
  displayOptions('privateOptions');
  privateBtn.classList.add('main-btn-active');
  tenderBtn.classList.remove('main-btn-active');
});

tenderBtn.addEventListener('click', function () {
  displayOptions('tenderOptions');
  tenderBtn.classList.add('main-btn-active');
  privateBtn.classList.remove('main-btn-active');
});

function displayOptions(optionId) {
  // Hide both options initially
  document.getElementById('privateOptions').classList.add('hidden');
  document.getElementById('tenderOptions').classList.add('hidden');

  // Show the selected options
  const options = document.getElementById(optionId);
  options.classList.remove('hidden');

  // Add animation to each sub button
  const buttons = options.querySelectorAll('.sub-btn');
  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.classList.add('animate');
    }, index * 100); // Staggered animation
  });
}

function goToPage(page) {
  window.location.href = page;
}

// Mobile menu
document.getElementById('mobile-menu-btn').addEventListener('click', function () {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('opCmob');
});

document.getElementById('close-menu-btn').addEventListener('click', function () {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('opCmob');
});

// Date now
document.getElementById('date').textContent = new Date().getFullYear();
