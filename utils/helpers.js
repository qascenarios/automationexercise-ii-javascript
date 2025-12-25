
function openUrl(page, endpoint) {
  const base_url = 'https://automationexercise.com';
  const url = base_url + endpoint;
  return page.goto(url);
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
