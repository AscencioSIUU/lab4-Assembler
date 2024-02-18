<template>
     <main>
          <a class="">Primer Numero Binario</a>
          <input v-model="num1" placeholder="Numero Binario 8 bits"/>
          <a>Segundo Numero Binario</a>
          <input v-model="num2" class="mb-8" placeholder="Numero Binario de 8 bits"/>
          <button @click="operation" class="button">Resultado</button>
          <a>Resultado: {{ finalisima }}</a>
     </main>
</template>
<script setup>
import { ref } from 'vue'
const num1 =  ref('')
const num2 =  ref('')

const final = ref(0)
const finalisima = ref(0)

const operation  = () => {
     let result1 = 0;
     let result2 = 0;

     num1.value.split('').forEach((number, x) => {
     const expo = 8 - (x + 1)
     result1 += +number * Math.pow(2, expo)
     })

     num2.value.split('').forEach((number, x) => {
     const expo = 8 - (x + 1)
     result2 += +number * Math.pow(2, expo)
     })

     final.value = result1 + result2

     finalisima.value = (parseInt(final.value, 10) >>> 0).toString(2);
}
</script>
