<template>
  <div class="all">
    <img src="@/assets/twitter-512.png" alt="" />
    <div class="container">
      <div class="text">
        <h1>
          Bem-vindo ao <br />
          Twitter
        </h1>
        <span
          >Saiba o que está acontecendo <br />
          agora no mundo</span
        >
      </div>
      <button>Inscreva-se</button>
      <button onclick="location.href='/login'; ">Entrar</button>
    </div>
    <div class="desen">
      <span
        >Desenvolvido por:
        <a href="https://instagram.com/gustavorteuber" target="_blank"
          >gustavorteuber</a
        >
      </span>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: "Montserrat";
}

.all {
  background-color: #00acee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1 {
  color: #eef;
  margin-bottom: 10px;
}

span {
  font-weight: 600;
  color: #eef;
}

img {
  width: 35px;
  margin-bottom: 5px;
}

button {
  font-weight: 700;
  background-color: #eef;
  color: #00acee;
  width: 200px;
  height: 50px;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid #eef;
  cursor: pointer;
}

button:hover {
  transition: 0.5s;
  background-color: #00acee;
  color: #eef;
}

.desen {
  margin-top: 1rem;
}

.desen span {
  font-size: 8pt;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

a {
  font-size: 8pt;
  color: #c9f0ff;
  text-decoration: none;
}
</style>
