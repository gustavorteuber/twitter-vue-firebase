
<template>
<div className="App">
      <header cassName="App-header">
        <img src="../assets/Twitter-logo.svg" alt="" />
        <div class="title">
          <h2>Log in to Twitter</h2>
        </div>
        <div class="text">
          <input type="text" placeholder="Phone, email, or username" />
        </div>
        <div class="password">
          <input type="password" placeholder="Password" />
        </div>
        <button>Log In</button>
        <div class="all">
          <div class="forget">
            <a href="#">Forgot password?</a>
          </div>
          <span>•</span>
          <div class="signup">
            <a href="#"> Sign up for Twitter</a>
          </div>
        </div>
      </header>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Syne&display=swap");

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: "Poppins";
}

header {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

img {
  width: 35px;
  margin-bottom: 5px;
}

button {
  color: #eeeeee;
  background-color: #1da1f2;
  width: 400px;
  height: 40px;
  border-radius: 50px;
}

button:hover {
  color: #1da1f2;
  background-color: #eeeeee;
  border: 2px solid #1da1f2;
  cursor: pointer;
}

input {
  width: 400px;
  background-color: #f0f8ff;
  margin-bottom: 20px;
}

.title h2 {
  margin-bottom: 20px;
}

.all {
  display: flex;
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: #1da1f2;
}

span {
  color: #1da1f2;
  margin-left: 5px;
  margin-right: 5px;
}
</style>