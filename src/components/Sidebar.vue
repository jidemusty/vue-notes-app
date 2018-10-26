<template>
    <div class="sidebar">
        <div v-if="notes.length">
            <note v-for="note in notes" :key="note.title" :note="note"></note>
        </div>
        <div class="sidebar__content" v-else>
            No Notes, get writing!
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Note from '@/components/Note'

export default {
    components: {
        Note
    },
    computed: {
        ...mapGetters([
            'notes'
        ])
    }
}
</script>

<style lang="scss" scoped>
  .sidebar {
    background-color: #F9F9F9;
    flex: 1;
    height: 100%;
    min-width: 28%;
    border-right: 2px solid #EEE;
    overflow-y: scroll;

    &__content {
        padding: 30px;

        a {
            text-decoration: none;
            color: inherit;
        }
    }
  }
</style>
