<template>
    <v-app> <!-- theme="dark" -->
        <!-- <TheHeader /> -->
        <v-main>
            <v-container fluid class="page-wrapper">
                <div class="maxWidth">
                    <RouterView />
                </div>
            </v-container>
        </v-main>
        <!-- <TheFooter /> -->
    </v-app>
</template>

<script setup>
// import TheHeader from '@/components/Shell/TheHeader.vue';
// import TheFooter from '@/components/Shell/TheFooter.vue';

</script>