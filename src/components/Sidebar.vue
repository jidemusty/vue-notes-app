<template>
    <div class="sidebar">
        <div class="sidebar__content">
            Boo, no notes. Get writing!
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .sidebar {
    background-color: #F9F9F9;
    flex: 1;
    height: 100%;
    min-width: 28%;

    &__content {
        padding: 30px;

        a {
            text-decoration: none;
            color: inherit;
        }
    }
  }
</style>
