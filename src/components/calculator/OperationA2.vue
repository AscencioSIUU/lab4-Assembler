<template>
     <main>
          <a class="">Numero Binario</a>
          <input v-model="num1" placeholder="Numero Binario 8 bits"/>
          <button @click="operation" class="button">Resultado</button>
          <a>Resultado: {{ binaryComplementA2 }}</a>
     </main>
</template>
<script setup>
import { ref } from 'vue'

const num1 = ref('')
const binaryComplementA2 = ref('')

const operation = () => {
     let result1 = 0

     num1.value.split('').forEach((number, x) => {
        const expo = 7 - x
        result1 += Number(number) * Math.pow(2, expo);
     })

     let complementA2 = (~result1 + 1 >>> 0).toString(2);

     if (complementA2.length < 8) {
          complementA2 = complementA2.padStart(8, '0');
     } else if (complementA2.length > 8) {
          complementA2 = complementA2.slice(-8); //para overflow
     }

     binaryComplementA2.value = complementA2;
}
</script>