<template>
    <div class="note">
        <a href="#" class="note__delete">
            <span class="note__delete-icon" @click.prevent="deleteNote(note.id)">&times;</span>
        </a>
        <div class="note__content">
            <a href="#" class="note__title" @click="openNote(note)">
                <span v-if="note.title">{{ note.title }}</span>
                <span v-else>Untitled Note</span>
            </a>
            <p class="note__body">
                <span v-if="note.body">{{ note.body }}</span>
                <span v-else><em>Empty</em></span>
            </p>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    props: [
        'note'
    ],
    methods: {
        ...mapActions([
            'openNote',
            'deleteNote'
        ])
    }
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