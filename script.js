// Small progressive enhancement: preselect the vehicle from a stock-card link.
document.addEventListener("DOMContentLoaded", function () {
  const vehicleSelect = document.getElementById("car");
  if (vehicleSelect) {
    const requestedVehicle = new URLSearchParams(window.location.search).get("vehicle");
    if (requestedVehicle) {
      const matchingOption = Array.from(vehicleSelect.options).find(
        (option) => option.text.trim() === requestedVehicle.trim()
      );
      if (matchingOption) vehicleSelect.value = matchingOption.value || matchingOption.text;
    }
  }

  const form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      // This static assignment site has no server endpoint; avoid implying that data was sent.
      event.preventDefault();
      const status = document.getElementById("form-status");
      if (!form.reportValidity()) return;
      status.textContent = "Thanks — your details passed the form checks. This demonstration site does not send enquiries; please call 01707 111 222 to contact the team.";
      status.focus();
    });
  }
});
