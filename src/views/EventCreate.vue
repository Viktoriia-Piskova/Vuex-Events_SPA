<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <p>This event was created by {{ categories }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  //name: 'EventCreate',
  computed: {
    ...mapState(['categories', 'user'])
  }
}
</script>

<style>
</style>
