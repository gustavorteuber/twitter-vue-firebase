<template>
  <div class="all">
    <div class="container">
      <img src="@/assets/Twitter-logo.svg" alt="" />
      <div class="text">
        <h1>Log-In Twitter</h1>
      </div>
      <input type="text" placeholder="   Email or username" />
      <input type="password" placeholder="   Password" />
      <button onclick="location.href='/home'; ">Entrar</button>
      <div class="desen">
        <a href="/forgot"> <p>Esqueceu a Senha?</p> </a>
      </div>
      <span>Or</span>
      <div class="signup">
        <a href="/cadastro"> <p>Não tem uma conta? Clique aqui!</p></a>
      </div>
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
  background-color: #c1c1c1;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1 {
  color: #000000;
  margin-bottom: 10px;
}

span {
  font-weight: 600;
  color: #eef;
}

img {
  width: 35px;
  margin-bottom: 20px;
}

button {
  font-weight: 700;
  background-color: #000000;
  color: #eef;
  width: 200px;
  height: 50px;
  margin-top: 20px;
  border-radius: 30px;
  border: 1px solid #eef;
  cursor: pointer;
}

button:hover {
  transition: 0.5s;
  background-color: #eef;
  border: solid 1px #000000;
  color: #000000;
}

input {
  margin-top: 20px;
  width: 200px;
  height: 50px;
  border-radius: 8px;
  border: solid 1px #c1c1c1;
}

input:hover {
  transition: 0.5s;
  border: solid 1px #00acee;
}

.desen {
  margin-top: 2rem;
}

.desen span {
  color: #000000;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #eef;
  width: 300px;
  height: 500px;
  border-radius: 8px;
}

a {
  font-size: 8pt;
  color: #000000;
  text-decoration: none;
}
</style>
