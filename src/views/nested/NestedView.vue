<template>
    <ul class="nav nav-pills">
        <li class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{ name: 'NestedOne', replace: true }">Nested
                One</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/nested/two">Nested Two</router-link>
        </li>
    </ul>
    <hr class="my-4" />
    <router-view></router-view>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>