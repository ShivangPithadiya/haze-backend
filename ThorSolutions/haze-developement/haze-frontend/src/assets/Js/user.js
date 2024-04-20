const toggleUserDropdown =()=> {
    var userDropdownOptions = document.getElementById("userDropdownOptions");
    userDropdownOptions.style.display = (userDropdownOptions.style.display === "block") ? "none" : "block";
  }

  // Close the user dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.custom-user-dropdown-toggle')) {
      var userDropdownOptions = document.getElementById("userDropdownOptions");
      if (userDropdownOptions.style.display === "block") {
        userDropdownOptions.style.display = "none";
      }
    }
  }