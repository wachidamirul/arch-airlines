const togglePasswordVisibility = () => {
  const passwordInput = document.getElementById("password");
  const eyeClosed = document.getElementById("eye-icon-closed");
  const eyeOpen = document.getElementById("eye-icon-open");

  if (passwordInput.type === "password") {
    eyeClosed.classList.add("hidden");
    eyeOpen.classList.remove("hidden");
    passwordInput.type = "text";
  } else {
    eyeClosed.classList.remove("hidden");
    eyeOpen.classList.add("hidden");
    passwordInput.type = "password";
  }
};
