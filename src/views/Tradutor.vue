<template>
  <div>
    <img src="img/theme/jacquin.jpg" class="fixed-bottom jacquin" alt="" />
    <div class="container mt-5">
        <div class="row">
            <div class="col-12 text-center">
                <h1>Uma pequena homenagem para o <br>   GRAND CHEF Errrick Jacã</h1>                
            </div>
        </div>
      <div class="row mt-4 ">
        <div class="col-lg-6">
          <base-input alternative="" label="Escreva seu texto">
            <textarea
              v-model="textoParaTraduzir"
              maxlength="200"
              rows="4"
              class="form-control form-control-alternative"
            >
            </textarea>
          </base-input>
        </div>
        <div class="col-lg-6">
          <h3 v-if="textoTraduzido">Texto traduzido</h3>
          <h1 style="background-color: #ffffff99">{{ textoTraduzido }}</h1>
        </div>
      </div>
    </div>
        <footer class="text-center fixed-bottom mt-5  p-2">
            <small>Nenhum dad está send coletad, poda ficá tranquile :)</small>
        </footer>
        
  </div>
</template>
<script>
export default {
  name: "tradutor",
  data() {
    return {
      textoTraduzido: "",
      textoParaTraduzir: "Você é a vergonha da profissão",
    };
  },

  mounted() {
    this.traduzir();
  },
  methods: {
    traduzir() {
      this.textoTraduzido = "";
      let palavras = this.textoParaTraduzir.split(" ");

      palavras.forEach((p) => {
        if (p.indexOf("ão") > 1) {
          p = p.replace("ão", "ión");
          this.textoTraduzido += `${p} `;
          return;
        }

        if (p.length == 1 && p != "é") {
          p = `l${p}`;
          this.textoTraduzido += `${p} `;
          return;
        }

        p = p.replace("r", "rr");

        if (p.length > 2) {
          p = p.slice(0, -1);
        }

        this.textoTraduzido += `${p} `;
      });
    },
  },
  watch: {
    textoParaTraduzir: function () {
      this.traduzir();
    },
  },
};
</script>
<style>
body {
  background: white;
}

img.jacquin {
  width: 50%;
  left: -22%;
  bottom: -10%;
  z-index: 0;
}

@media screen and (max-width: 800px) {
  img.jacquin {
    left: -44%;
    bottom: 0%;
    z-index: 0;
    width: 100%;
  }
}
</style>
