<template>
    <div class="logo">
        <RouterLink to="/">
            <v-img
            :width="100"
            aspect-ratio="16/9"
            cover
            src="../../assets/images/logos/logo-light.png"
            ></v-img>            
        </RouterLink>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const primary = ref('rgb(var(--v-theme-primary))');
const secondary = ref('rgb(var(--v-theme-secondary))');
</script>
