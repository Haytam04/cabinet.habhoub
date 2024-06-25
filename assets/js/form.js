function validateForm() {
    var fullName = document.getElementById('fullName').value.trim();
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var description = document.getElementById('description').value.trim();
    var errorMessage = '';

    // Validation du nom complet : doit contenir au moins deux mots
    if (fullName.split(' ').length < 2) {
        errorMessage += 'Le nom complet doit contenir au moins deux mots.\n';
    }

    // Validation du numéro de téléphone : doit contenir exactement 10 chiffres
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        errorMessage += 'Le numéro de téléphone doit contenir exactement 10 chiffres.\n';
    }

    // Validation de la description : ne doit pas être vide
    if (description === '') {
        errorMessage += 'La description ne peut pas être vide.\n';
    }

    // Affiche le message d'erreur si la validation échoue
    if (errorMessage) {
        document.getElementById('errorMessage').textContent = errorMessage;
        return false; // Empêche l'envoi du formulaire
    } else {
        document.getElementById('errorMessage').textContent = '';
        sendToWhatsApp(fullName, phoneNumber, description);
        return false; // Empêche l'envoi du formulaire après avoir envoyé les données à WhatsApp
    }
}

function sendToWhatsApp(fullName, phoneNumber, description) {
    var whatsappNumber = '+212679288485'; // Remplacez par votre numéro WhatsApp
    var message = `Nom Complet: ${fullName}%0A` +
                  `Numéro de Téléphone: ${phoneNumber}%0A` +
                  `Description: ${description}`;
    var whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
    window.open(whatsappURL, '_blank');
}