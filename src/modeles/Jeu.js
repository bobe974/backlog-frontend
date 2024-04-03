
class Jeu {
    constructor(id, titre, dateSortie, description, image) {
        this.id = id;
        this.titre = titre;
        this.dateSortie = dateSortie;
        this.description = description;
        this.image = image;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getTitre() {
        return this.titre;
    }

    setTitre(titre) {
        this.titre = titre;
    }

    getDateSortie() {
        return this.dateSortie;
    }

    setDateSortie(dateSortie) {
        this.dateSortie = dateSortie;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getImage() {
        return this.image;
    }

    setImage(image) {
        this.image = image;
    }
}

export default Jeu;
