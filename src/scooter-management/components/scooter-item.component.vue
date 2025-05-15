<script>
import {Scooter} from "../model/scooter.entity.js";

export default {
  name: "scooter-item",
  props: {
    scooter: {
      type: Scooter,
      required: true
    }
  }
}
</script>

<template>
  <pv-card class="m-2">
    <template #header>
      <img :src="scooter.image" />
    </template>

    <template #title>
      <p>Name: {{scooter.name}}</p>
    </template>

    <template #subtitle>
      <p>Id: {{scooter.id}}</p>
      <p>Brand: {{scooter.brand}}</p>
      <p>Model: {{scooter.model}}</p>
    </template>

    <template  #content>
      <p>Price: {{scooter.price}}</p>
      <p>Direction: {{scooter.direction}}</p>
      <p>Contact: {{scooter.contact}}</p>

    </template>

    <template #footer>
      <p>Detail: {{scooter.detail}}</p>
    </template>
  </pv-card>
</template>

<style scoped>

</style>
