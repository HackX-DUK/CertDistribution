function downloadRes() {
    // Get the selected nmae
    var nameDropdown = document.getElementById("nameDropdown");
    var selectedName = nameDropdown.options[nameDropdown.selectedIndex].value;

    // Get the selected competition
    var selectedComp = document.querySelector('input[name="events"]:checked');

    var baseURL = "https://ravi-prakash1907.github.io/CertDistribution/";
    var certURL = baseURL + "cert/" + selectedComp.value + "/" + selectedName + ".png";
    
    console.log(certURL);
    window.open(certURL, '_blank');
}
