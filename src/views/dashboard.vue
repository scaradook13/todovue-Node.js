<template>
    <div>
        <h1 class="p-6 text-3xl font-bold text-center">Todo App 📋</h1>
        <TaskForm/>
        <TaskList/>
    </div>
</template>

<script setup>
import TaskList from '../components/TaskList.vue'
import TaskForm from '../components/TaskForm.vue'
</script>

<style lang="scss" scoped></style>