<template>
     <main>
          <a>Primer Numero Entero</a>
          <input v-model="num1" placeholder="Numero Entero"/>
          <button @click="IntegerToBinary" class="button">Resultado</button>
          <a>Resultado: {{ binary1 }} </a>
     </main>
</template>
<script setup>
import { ref } from 'vue'
const num1 =  ref('')

const binary1 = ref('');


const IntegerToBinary = () => {
          

     if (num1.value !== '') {
          binary1.value = (parseInt(num1.value, 10) >>> 0).toString(2);
     } else {
          binary1.value = '';
     }
     
}
</script>