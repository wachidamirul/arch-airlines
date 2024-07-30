const togglePasswordVisibility = (from) => {
  const passwordInput = document.getElementById(from);
  const eyeClosed = document.getElementById("eye-icon-closed-" + from);
  const eyeOpen = document.getElementById("eye-icon-open-" + from);

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
