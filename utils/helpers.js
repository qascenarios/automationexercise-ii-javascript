
function openUrl(page, endpoint) {
  return page.goto(`https://automationexercise.com${endpoint}`);
}

// Generate random email
function generateRandomEmail() {
    const timestamp = Date.now();
    return `testuser_${timestamp}@mail.com`;
}

module.exports = {
  openUrl,
  generateRandomEmail,
};
