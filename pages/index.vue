<template>
  <main>
    <div class="raid">
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
import { reactive, useStore } from '@nuxtjs/composition-api'

export default {
  setup() {
    const store = useStore()
    const raidData = reactive({
      uid: '123456xyz',
      host: 'EsteeLew',
      pariticipants: {
        rsvp: ['Player 1', 'Player 2'],
        joined: ['Player 1'],
      },
      level: 70,
      time: '1800',
      status: 'Pending',
    })

    const startRaid = () => {
      raidData.status = 'Started'
    }

    const endRaid = () => {
      raidData.status = 'Ended'
    }

    const createRaid = () => {
      const newRaid = {
        host: 'EsteeLew',
        pariticipants: {
          rsvp: ['Player 1', 'Player 2'],
          joined: ['Player 1'],
        },
        level: 70,
        time: '1800',
        status: 'Pending',
      }
      store.dispatch('raids/createRaid', newRaid)
    }

    return { raidData, startRaid, endRaid, createRaid }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
