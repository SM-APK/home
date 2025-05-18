function login() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  fetch("SM-auth/auth-2562732986143.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
  })
  .then(res => res.json())
  .then(data => {
    const popup = document.getElementById("popup-8726");
    const msg = document.getElementById("popup-msg-8726");

    if (data.success) {
      msg.textContent = `✅ Welcome ${username}, Login successful.`;
      popup.classList.replace("popup-8726-hidden", "popup-8726-visible");
      setTimeout(() => {
        window.location.href = data.redirect;
      }, 3000);
    } else {
      msg.textContent = `❌ Invalid username or password.`;
      popup.classList.replace("popup-8726-hidden", "popup-8726-visible");
      setTimeout(() => {
        popup.classList.replace("popup-8726-visible", "popup-8726-hidden");
      }, 3000);
    }
  });
}
