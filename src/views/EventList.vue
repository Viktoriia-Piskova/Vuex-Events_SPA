<template>
  <div>
    <h1>Events for {{user.user.name}} </h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
  <template v-if="page != 1"> 
    <router-link :to="{name: 'event-list', query: {page: page - 1}}" rel="prev">Prev page</router-link> | 
  </template>
  <template v-if="hasNextButton"> 
    <router-link :to="{name: 'event-list', query: {page: page + 1}}" rel="next">Next page</router-link>
  </template>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  created() {
    this.perPage = 3
    this.$store.dispatch('event/fetchEvents', {
      perPage: 3,
      page: this.page
    })
  },
  computed: {
    page() {
      // What page we're currently on
      return parseInt(this.$route.query.page)
    },
    hasNextButton() {
      return this.event.eventsTotal > this.page * this.perPage
    },
    ...mapState(['event', 'eventsTotal', 'user'])
  }
}
</script>
<style scoped>
.pagination-btn {
  margin-right: 20px;
}
</style>>
