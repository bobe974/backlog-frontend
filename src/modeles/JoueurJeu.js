

class JoueurJeu {
    constructor(id = null, joueur = null, jeu = null, etat = null, tempsDeJeu = null, dateDebut = null, dateFin = null, avis = null) {
        this.id = id;
        this.joueur = joueur;
        this.jeu = jeu;
        this.etat = etat;
        this.tempsDeJeu = tempsDeJeu;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.avis = avis;
    }


  getId() {
    return this.id;
  }

  getJoueur() {
    return this.joueur;
  }

  getJeu() {
    return this.jeu;
  }

  setJeu(jeu) {
    this.jeu = jeu;
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

  getAvis() {
    return this.avis;
  }

  setAvis(avis) {
    this.avis = avis;
  }
}

export default JoueurJeu;
