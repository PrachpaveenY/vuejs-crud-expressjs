<script setup>
</script>

<template>
    <div>
        <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
            <div class="container">
                <router-link :to="{ path: '/' }" class="navbar-brand float-left">Main CRUD</router-link>
            <ul class="nav navbar-nav flex-row float-right">
                <li class="nav-item">
                    <router-link to="/" class="nav-link pr-3">Create Student</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/view" class="nav-link pr-3">View Students</router-link>
                </li>
            </ul>
            </div>
        </nav>

        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>

</style>
