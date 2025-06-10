export default class Scooter {
    constructor({ id, name, brandId, modelId, description, districtId, image }) {
        this.id = id;
        this.name = name;
        this.brandId = brandId;
        this.modelId = modelId;
        this.description = description;
        this.districtId = districtId;
        this.image = image;
    }
}