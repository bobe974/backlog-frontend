
class Avis {
    constructor(id, note, justification, typeAvis) {
        this.id = id;
        this.note = note;
        this.justification = justification;
        this.typeAvis = typeAvis;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getNote() {
        return this.note;
    }

    setNote(note) {
        this.note = note;
    }

    getJustification() {
        return this.justification;
    }

    setJustification(justification) {
        this.justification = justification;
    }

    getTypeAvis() {
        return this.typeAvis;
    }

    setTypeAvis(typeAvis) {
        this.typeAvis = typeAvis;
    }
}

export default Avis;
