<template>
    <div class="notification-bar" :class="notificationTypeClass">
        <p>{{ notification.message }}</p>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      timeOut: null
    }
  },
  mounted() {
    this.timeOut = setTimeout(() => this.remove(this.notification), 3000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`
    }
  },
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  methods: mapActions('notification', ['remove'])
}
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
