export default class User {
    constructor({ id, name, phone, dni, email, password, photo, address, roleId }) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.dni = dni;
        this.email = email;
        this.password = password;
        this.photo = photo;
        this.address = address;
        this.role_id = roleId;
    }
}
