function sendMail(contactForm) {
    const templateParams = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    };

    emailjs.send('service_p2v458n', 'template_xrb9dyg', templateParams)
        .then(function (response) {
            console.log('Success', response)
        }, function(error) {
            console.log('Failed', error)
        })

        return false
}