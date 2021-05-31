<template>
  <main>
    <div v-if="raidData" class="raid">
      <h1>
        Lvl {{ raidData.level }} raid @{{ raidData.time }}. Hosted by
        {{ raidData.host }}
      </h1>
      <h2>{{ raidData.status }}</h2>
      <h3>RSVP</h3>
      <ul v-for="rsvp in raidData.pariticipants.rsvp" :key="rsvp">
        <li>{{ rsvp }}</li>
      </ul>
      <h3>Joined</h3>
      <ul v-for="joined in raidData.pariticipants.joined" :key="joined">
        <li>{{ joined }}</li>
      </ul>

      <button @click="startRaid()">Start raid</button>
      <button @click="endRaid()">End raid</button>
    </div>
    <div class="create-raid">
      <input type="text" placeholder="Host" />
      <input type="text" placeholder="Level" />
      <input type="text" placeholder="Time" />
      <button @click="createRaid()">Create raid</button>
    </div>
  </main>
</template>

<script>
import { computed, useRoute, useStore } from '@nuxtjs/composition-api'

export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const id = route.value.params.id
    store.dispatch('raids/loadRaid', id)

    const raidData = computed(() => store.state['raid/raid'])

    const startRaid = () => {
      raidData.status = 'Started'
    }

    const endRaid = () => {
      raidData.status = 'Ended'
    }

    return { raidData, startRaid, endRaid }
  },
}
</script>
