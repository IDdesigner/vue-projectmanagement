<template>
    <div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>ID</th>
                <th>Client</th>
                <th>Project</th>
                <th>Designer</th>
                <th>Start Date</th>
                <th>Due Date</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(job, index) in projects"> 
                <td>{{ index + 1 }}</td>
                <td>{{ job.client }}</td>
                <td>{{ job.project }}</td>
                <td>{{ job.designer }}</td>
                <td>{{ job.startDate }}</td>
                <td>{{ job.dueDate }}</td>
                <hr>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        computed: {
            projects() {
                return this.$store.getters.projects
            }
        }
    }
</script>