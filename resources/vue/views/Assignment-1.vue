<template>
    <div class="table-scroll">
        <table>
            <tr>
                <td class="first-column">
                    <input v-model="integerInput" type="text" id="number" placeholder="Your Numbers Here">
                </td>
                <td class="second-column">
                    <select v-model="method" id="functions">
                        <option value="isPrime">isPrime</option>
                        <option value="isFibonacci">isFibonacci</option>
                    </select>
                </td>
                <td class="third-column">
                    <span id="result">{{ result }}</span>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        name: 'Assignment-1',

        data: function() {
            return {
                integerInput: null,
                method: 'isPrime',
                result: 'False'
            }
        },

        methods: {
            isPrime(number) {
                var divider = 2;
                var response = 'True';
                while (number - 1 >= divider) {
                    if (number % divider !== 0) {
                        divider += 1;
                    } else {
                        response = 'False';
                        break;
                    }
                }
                
                return response;
            },

            isFibonacci(number) {
                var fibonacciArray = [0, 1];
                var fibonacciIndex = 0;
                var fibonacciValue = 0;
                var response = 'False';

                while (number >= fibonacciValue) {
                    fibonacciIndex = fibonacciArray.length;
                    fibonacciValue = fibonacciArray[fibonacciIndex - 1] + fibonacciArray[fibonacciIndex - 2];
                    fibonacciArray.push(fibonacciValue);

                    if (number === fibonacciValue) {
                        response = 'True';
                    }
                }

                return response;
            },

            processValue(data) {
                var input = data.input;
                var method = data.method;
                var response = '';
                if (input % 10 !== 0) {
                    input = Math.round(input);
                }
                
                if (input < 0) {
                    input = 1;
                }

                if (isNaN(input)) {
                    response = 'False';
                } else {
                    if (method === 'isPrime') {
                        response = this.isPrime(input);
                    } else if (method === 'isFibonacci') {
                        response = this.isFibonacci(input);
                    }
                }

                this.result = response;
            }
        },

        watch: {
            integerInput: function (value) {
                this.processValue({
                    input: value,
                    method: this.method
                });
            },

            method: function (value) {
                this.processValue({
                    input: this.integerInput,
                    method: value
                });
            }
        }
    }
</script>
<style>
    body {
        margin: 0px;
    }

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        min-width: 600px;
    }

    td {
        border: 1px solid #dddddd;
        padding: 0px;
        text-align: left;
    }

    .first-column {
        width: 199px;
        min-width: 199px;
        max-width: 199px;
    }

    .second-column {
        min-width: 99px;
    }

    .third-column {
        width: 299px;
        min-width: 299px;
        max-width: 299px;
    }

    .table-scroll {
        overflow-x: auto;
    }

    @media only screen and (max-width: 600px) {
        .table-scroll {
            overflow-x: scroll;
        }
    }
</style>