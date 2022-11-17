<template>
    <div class="container mx-auto h-14 flex items-center justify-between">
        <nav>
            <div class="logo">conduit</div>
            <ul class="navbar">
                <NuxtLink to="/">
                    Home
                </NuxtLink>
                <NuxtLink to="/register">
                    sing up
                </NuxtLink>
                <NuxtLink to="/login">
                    sing in
                </NuxtLink>
            </ul>
        </nav>
    </div>
</template>

<script setup>

</script>

<style>
nav {
    @apply flex items-center justify-between w-full;
}

.navbar {
    @apply flex items-center justify-between gap-4;
}

.logo {
    font-family: "Titillium Web", sans-serif;
    font-size: 1.5rem !important;
    padding-top: 0rem !important;
    margin-right: 2rem !important;
    color: #5CB85C !important;
}
</style>