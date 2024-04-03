class Info {
    constructor(etat, tempsDeJeu, dateDebut, dateFin) {
        this.etat = etat;
        this.tempsDeJeu = tempsDeJeu;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
    }

    getEtat() {
        return this.etat;
    }

    setEtat(etat) {
        this.etat = etat;
    }

    getTempsDeJeu() {
        return this.tempsDeJeu;
    }

    setTempsDeJeu(tempsDeJeu) {
        this.tempsDeJeu = tempsDeJeu;
    }

    getDateDebut() {
        return this.dateDebut;
    }

    setDateDebut(dateDebut) {
        this.dateDebut = dateDebut;
    }

    getDateFin() {
        return this.dateFin;
    }

    setDateFin(dateFin) {
        this.dateFin = dateFin;
    }
}

export default Info;
