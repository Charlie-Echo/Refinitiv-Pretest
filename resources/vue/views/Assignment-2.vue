<template>
    <div>
        <input v-model="filter" type="text"><br>
        <table>
            <tr>
                <td>ID</td>
                <td>Categories</td>
            </tr>
            <tr v-for="(category, index) in filteredResponse" :key="category">
                <td>{{ index }}</td>
                <td>{{ category }}</td>
            </tr>
          </table>
    </div>
</template>
<script>
    import _ from 'lodash';

    export default {
        name: 'Assignment-2',

        data: function() {
            return {
                filter: '',
                data: [],
                filteredResponse: []
            }
        },

        mounted () {
            this.getData();
        },

        methods: {
            getData() {
                var vm = this;
                this.$http.get('https://api.publicapis.org/categories')
                    .then(function (response) {
                        vm.data = _.get(response, 'data');
                        vm.filteredResponse = vm.data;
                    });
            },

            searchCategory(filter) {
                let valueLowerCase = '';
                this.filteredResponse = [];
                _.each(this.data, (value) => {
                    valueLowerCase = value.toLowerCase();
                    if (valueLowerCase.includes(filter.toLowerCase())) {
                        this.filteredResponse.push(value);
                    }
                });
            }
        },

        watch: {
            filter: function (value) {
                this.searchCategory(value);
            }
        }
    }
</script>
<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    td {
        border: 1px solid #dddddd;
        text-align: left;
    }
</style>