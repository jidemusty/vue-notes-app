<template>
    <div class="sidebar">
        <note></note>
        <note></note>
        <note></note>
        <!-- <div class="sidebar__content">
            Boo, no notes. Get writing!
        </div> -->
    </div>
</template>

<script>
import Note from '@/components/Note'

export default {
    components: {
        Note
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
