function appuyerTouche(valeur) {
    document.getElementById('ecran').value += valeur;
}

function calculer() {
    try {
        document.getElementById('ecran').value = eval(document.getElementById('ecran').value);
    } catch (e) {
        document.getElementById('ecran').value = 'Erreur';
    }
}

function effacer() {
    document.getElementById('ecran').value = '';
}
