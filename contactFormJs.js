var fields = {};

// gets content from the DOM using the name tag
function setVariableFields() {
    //key value pair
    fields.firstName = document.getElementsByName("firstName")[0].value;
    fields.lastName = document.getElementsByName("lastName")[0].value;
    fields.email = document.getElementsByName("email")[0].value;
    fields.subject = document.getElementsByName("subject")[0].value;
    fields.bodyText = document.getElementsByName("message")[0].value;
    // var fields now contains all values on the field
}

function isNotEmpty(value) {
    let valid; 
    // returns false if no value is supplied or true if value length is greater than 0
    if(value == null || typeof value == 'undefined') {
       valid = false;
    } else {
        valid = true;
    }
    return valid;
}

function isEmailChecker(email) {
    // retruns true / false based if regex matches value supplied
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function fieldValidation(fieldToCheck, validationFunction) {

    if(fieldToCheck == null) return false;

    return validationFunction(fieldToCheck);
}

function isValid() {
    // 0 = false and 1 = true
    var valid = true;  
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.email, isNotEmpty); 
    valid &= fieldValidation(fields.subject, isNotEmpty);
    valid &= fieldValidation(fields.bodyText, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmailChecker);
    return valid;
 }

 class contactMeRequest {
    constructor(firstName, lastName, email, subject, message) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
 }

 function sendEmail() {
    setVariableFields();

    if(isValid()) {
        let emailRequest = new contactMeRequest(fields.firstName, fields.lastName, fields.email, fields.subject, fields.bodyText);

        Email.send({
            Host : "smtp.gmail.com",
            Username : "matthew.estanley1996@gmail.com",
            Password : "eksarlrzqiuswlhx",
            To : 'matthew.estanley1996@gmail.com',
            From : emailRequest.firstName,
            Subject : emailRequest.subject,
            Body : emailRequest.message
        }).then(message => alert(message))

    } else {
        alert("Error, log 02");
    }
 }