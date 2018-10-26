<template>
    <div class="pad">
        <input type="text" class="pad__title" placeholder="Untitled note">
        <textarea class="pad__text" placeholder="Start writing..."></textarea>

        <footer class="pad__footer">
            <ul class="pad__footer-items">
                <li class="pad__footer-item">Words: x</li>
                <li class="pad__footer-item pad__footer-item--right">Last saved: xx/xx</li>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/placeholders';

    .pad {
        flex: 4;
        display: flex;
        flex-direction: column;

        &__title {
            width: 100%;
            border: 0;
            font: inherit;
            font-size: 1.6em;
            outline: none;
            padding: 20px;
            padding-left: 30px;
            padding-top: 25px;
        }

        &__text {
            flex: 1;
            margin: 0;
            width: 100%;
            border: 0;
            font: inherit;
            resize: 0;
            padding: 20px 30px;
            outline: none;
            line-height: 2;

            mask-image: linear-gradient(
                to bottom,
                transparent 0%,
                #FFF 5%,
                #FFF 95%,
                transparent 100%
            );

            -webkit-mask-image: linear-gradient(
                to bottom,
                transparent 0%,
                #FFF 5%,
                #FFF 95%,
                transparent 100%
            ) 
        }

        &__footer {
            padding: 20px 30px;
        }
    }

    .pad__footer-items {
        @extend %inline-list;
    }

    .pad__footer-item {
        flex: 1;
        font-size: .9em;

        &--right {
            margin-left: auto;
            text-align: right;
        }
    }
</style>