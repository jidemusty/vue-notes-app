<template>
    <div class="note">
        <a href="#" class="note__delete">
            <span class="note__delete-icon">&times;</span>
        </a>
        <div class="note__content">
            <a href="#" class="note__title">One note</a>
            <p class="note__body">
                Exercitation nostrud ad quis nostrud. Sunt esse velit id fugiat id deserunt proident voluptate magna. Eiusmod qui elit proident do consectetur velit exercitation eu nostrud. Aliquip in esse anim nulla officia veniam labore ullamco reprehenderit veniam ex excepteur. Ad mollit Lorem culpa fugiat consectetur labore qui duis duis incididunt. Ex in anim ullamco est adipisicing veniam aute et deserunt non. Voluptate est amet nulla sint non reprehenderit esse sit do occaecat.

Veniam fugiat veniam pariatur ut magna qui reprehenderit Lorem cillum id nostrud. Occaecat aliquip fugiat deserunt magna culpa. Officia incididunt duis exercitation eiusmod deserunt consequat aute. Irure reprehenderit sint magna ad. Non est qui pariatur elit enim veniam.

Consectetur dolore reprehenderit id laboris adipisicing ex eiusmod fugiat sint ullamco. Quis minim ea sunt duis nostrud consectetur in nisi sint adipisicing id fugiat. Magna occaecat irure culpa tempor deserunt do.

Amet eu labore sit ad est. Occaecat consequat aliquip cupidatat proident do aliqua ad ullamco. Irure enim ut ex fugiat. Adipisicing ex ipsum excepteur deserunt ipsum anim. Et esse est velit aute ex proident aute eu proident eiusmod. Eiusmod dolore veniam amet ea esse. Tempor et minim ea ad culpa aliqua esse amet cillum velit ipsum eiusmod.
            </p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .note {
        display: flex;
        color: inherit;
        text-decoration: none;
        border-bottom: 2px solid #EEE;
        opacity: .3;
        flex-direction: row;
        max-width: 100%;
        flex-direction: row;

        &:hover {
            opacity: 1;

            .note__delete {
                margin-left: 0;
            }
        }

        &__content {
            padding: 30px;
            flex: 2;
            overflow: hidden;
        }

        &__title {
            display: block;
            font-size: 1em;
            margin: 0;
            font-weight: 500;
            text-decoration: none;
            color: inherit;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

            &:hover {
                text-decoration: underline;
            }
        }

        &__body {
            font-size: .9em;
            margin-bottom: 0;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        &__delete {
            position: relative;
            margin-left: -50px;
            width:  50px;
            display: block;
            background: #CC44EE;
            min-height: 100%;
            color: #FFF;
            transition: margin-left 100ms ease-in-out;
        }

        &__delete-icon {
            position: absolute;
            font-size: 1.5em;
            font-weight: 600;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)

        }
    }
</style>