export default class Reservation {
    constructor({ id, cantDate, scooterId, userId, suscriptionId }) {
        this.id = id;
        this.cantDate = cantDate;
        this.scooterId = scooterId;
        this.userId = userId;
        this.suscriptionId = suscriptionId;
    }
}