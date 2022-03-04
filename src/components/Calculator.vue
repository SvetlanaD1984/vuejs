<template>
  <div>
    <div class="hello">
      <input v-model.number="operand1" name="operand1" />
      <input v-model.number="operand2" name="operand2" />
      = {{ result }}
    </div>

    <div class="keyboard">
      <button
        v-for="op in operations"
        v-bind:key="op"
        v-bind:disabled="operand1 === '' || operand2 === ''"
        v-on:click="calculate(op)"
        v-bind:name="op"
      >
        {{ op }}
      </button>
    </div>

    <label
      ><input type="checkbox" v-model="showbtn" /> Отобразить экранную
      клавиатуру</label
    >
    <div v-if="showbtn">
      Виртуальная клавиатура
      <button v-for="btn in 10" :key="btn" v-on:click="inputNum(btn - 1)">
        {{ btn - 1 }}
      </button>
      <button v-on:click="eraseOne">←</button>
      <br /><br />

      <label
        ><input type="radio" value="1" v-model="operch" />Первое
        значение:</label
      >
      <label
        ><input type="radio" value="2" v-model="operch" />Второе
        значение:</label
      >
    </div>
  </div>
</template>

<script>
export default {
    name: 'Calculator',
    data: () => ({
      operations: ["+", "-", "/", "*", "x^n", "//"],
      operand1: 0,
      operand2: 0,
      result: 0,
      showbtn: false,
      operch: ''
    }),

      props: {},

      methods: {
        inputNum (i) {
          const { operch } = this
          const input = operch === '1' ? 'operand1' : 'operand2'
          this[input] = +(this[input] += String(i))
        },

        eraseOne () {
          const { operch } = this
          const input = operch === '1' ? 'operand1' : 'operand2'
          this[input] = +String(this[input]).slice(0, -1)
        },


        calculate(op) {
          const operand1 = this.operand1
          const operand2 = this.operand2

          const calcOperations = {
            '+': () => operand1 + operand2,
            '-': () => operand1 - operand2,
            '/': () => operand1 / operand2,
            '*': () => operand1 * operand2,
            'x^n': () => operand1 ** operand2,
            '//': () => Math.trunc(operand1 / operand2)
          }
       

          this.result = calcOperations[op]()

      }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
