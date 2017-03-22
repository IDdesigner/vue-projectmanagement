<template>
    <div>
        <input
            type="text"
            class="form-control"
            placeholder="Enter client"
            v-model="client"
        >
        <input
            type="text"
            class="form-control"
            placeholder="Enter project title"
            v-model="project"
        >
        <select v-model="designer" class="form-control">
            <option disabled value="">Please select one</option>
            <option>Kevin B.</option>
            <option>Susan S.</option>
            <option>Ryan C.</option>
        </select>
    </div>
</template>