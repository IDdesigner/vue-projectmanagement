<template>
    <div class="form-group condense">
        <h1 class="text-center">New Project Form</h1>

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

        <input
            type="text"
            class="form-control"
            placeholder="Enter the start date"
            v-model="startDate"
        >

        <input
            type="text"
            class="form-control"
            placeholder="Enter the end date"
            v-model="endDate"
        >

        <select v-model="designer" class="form-control">
            <option disabled value="">Please select one</option>
            <option>Kevin B.</option>
            <option>Susan Z.</option>
            <option>John D.</option>
            <option>Bradford W.</option>
        </select>
    </div>
</template>

<style>
.condense {
    margin: 0 auto;
    max-width: 500px;
}
</style>