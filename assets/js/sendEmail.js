function sendMail(contactForm) {
    emailjs.send("service_z2yd1b7", "resume", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "enquiry_request": contactForm.enquirysummary.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                window.location.replace("thanks.html");
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}