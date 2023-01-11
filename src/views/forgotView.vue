<template>
  <div class="all">
    <div class="container">
      <img src="@/assets/Twitter-logo.svg" alt="" />

      <h1>Nos ajude a achar <br />sua conta</h1>
      <div class="text">
        <span
          >Informe o e-mail, número de celular ou nome de usuário associado à
          sua conta para alterar sua senha.</span
        >
      </div>
      <input
        type="text"
        placeholder="   E-mail, número de celular ou nome de usuário"
      />
      <button onclick="location.href='/home'; ">Avançar</button>
      <div class="desen"></div>
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
.text {
  margin-left: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
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
  font-size: 20pt;
  color: #000000;
  margin-bottom: 10px;
}

span {
  font-size: 8pt;
  font-weight: 600;
  color: #c1c1c1;
}

img {
  width: 35px;
  margin-bottom: 20px;
}

button {
  font-weight: 700;
  background-color: #000000;
  color: #eef;
  width: 250px;
  height: 50px;
  margin-top: 150px;
  border-radius: 30px;
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
  width: 250px;
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
  color: #00acee;
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
  color: #00acee;
  text-decoration: none;
}
</style>
