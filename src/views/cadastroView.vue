<template>
  <div class="all">
    <div class="container">
      <img src="@/assets/Twitter-logo.svg" alt="" />
      <div class="text">
        <h1>
          Entre hoje mesmo <br />
          para o Twitter
        </h1>
      </div>
      <div class="buttons">
        <button>Entrar com google</button>
      </div>
      <div class="alternative">
        <span> ou </span>

        <button onclick="location.href='/home'; ">
          Entrar com numero de telefone ou email
        </button>
      </div>
      <div class="desen">
        <a href="/forgot">
          <p>
            Ao se inscrever, você concorda com os Termos de Serviço e a Política
            de Privacidade, incluindo o Uso de Cookies.
          </p>
        </a>
        <a href="/login"><p>Ja tem uma conta? Entrar</p></a>
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

.buttons button {
  font-weight: 700;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  width: 200px;
  height: 50px;
  margin-top: 20px;
  border-radius: 30px;
  border: 1px solid rgb(0, 0, 0);
  cursor: pointer;
}

h1 {
  font-size: 15pt;
  color: #000000;
  margin-bottom: 10px;
}

span {
  font-weight: 600;
  color: #eef;
}

.alternative span {
  color: #000000;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
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
  align-items: center;
  flex-direction: column;
  display: flex;

  color: #868585;
  text-decoration: none;
}
</style>
