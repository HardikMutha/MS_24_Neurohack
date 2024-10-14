document.getElementById("copyButton").addEventListener("click", function (e) {
  // Create a temporary input element
  const tempInput = document.createElement("input");
  tempInput.value = window.location.href;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  e.target.innerHTML = "Link Copied!";
  setTimeout(() => {
    e.target.innerHTML = "Share";
  }, 2000);
});
