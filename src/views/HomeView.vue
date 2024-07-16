<template>
  <section id="Banner">
    <div class="slogan">
      <h5>Mandy Smith</h5>
      <h2>發揮無限創意，為您做出好設計</h2>
    </div>
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="shape"></div>
    <div class="triangle"></div>
  </section>
  <section id="About">
    <div class="container">
      <div class="description">
        <h2>追求美感與效能的全端工程師</h2>
        <div class="profile">
          <p>
            我叫Mandy
            Smith，我是一位全端工程師，擁有超過七年的撰寫網頁應用程式的經驗。我的程式熱情起源於大學時期，自那以後，我一直使用不同的程式語言和框架來撰寫強大、可擴展和易用的應用程式。我相信程式是一門藝術，我始終努力創建易於維護和理解的乾淨、優雅的程式碼。
          </p>
        </div>
        <div id="tab2" class="education">
          <h3>學歷</h3>
          <ul class="education-list">
            <li>
              <h4>計算機科學學士學位</h4>
              <p class="education-meta">加州大學洛杉磯分校 | 2017 - 2021</p>
            </li>
            <li>
              <h4>軟件工程碩士學位</h4>
              <p class="education-meta">卡內基美隆大學 | 2021 - 至今</p>
            </li>
          </ul>
        </div>
        <div class="skills">
          <h3>技能</h3>
          <ul class="skills-list">
            <li>
              <span class="skill-name">HTML</span>
              <span class="skill-bar">
                <span class="skill-level skill-html">90%</span>
              </span>
            </li>
            <li>
              <span class="skill-name">CSS</span>
              <span class="skill-bar">
                <span class="skill-level skill-css">80%</span>
              </span>
            </li>
            <li>
              <span class="skill-name">JavaScript</span>
              <span class="skill-bar">
                <span class="skill-level skill-js">70%</span>
              </span>
            </li>
            <li>
              <span class="skill-name">PHP</span>
              <span class="skill-bar">
                <span class="skill-level skill-php">60%</span>
              </span>
            </li>
            <li>
              <span class="skill-name">MySQL</span>
              <span class="skill-bar">
                <span class="skill-level skill-mysql">65%</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const photos: string[] = reactive([
  "/images/homeCarousel-01.jpg",
  "/images/homeCarousel-02.jpg",
  "/images/homeCarousel-03.jpg",
  "/images/homeCarousel-04.jpg",
]);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@300&display=swap");

/* font-family: 'Mukta', sans-serif; */

/* 電腦與平板上應用的樣式 */

.container {
  padding: 50px 0;
  width: 80%;
  max-width: 1200px;
  margin: auto;
}

/* Banner Animation */

#Banner {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.slogan {
  position: absolute;
  z-index: 3;
}

.slogan h2 {
  font-size: 3rem;
  text-shadow: none;
}

.circle1 {
  position: absolute;
  width: 500px;
  height: 500px;
  top: -10%;
  left: 60%;
  border-radius: 50%;
  border: 15px solid #f89e59;
  z-index: -1;
  animation: move 10s ease-in infinite;
}

.circle2 {
  position: absolute;
  margin-left: 40%;
  margin-top: 20%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 10px solid #f08ef0;
  animation: move2 10s ease-in infinite;
}

.shape {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 300px;
  left: 30px;
  float: left;
  background-color: coral;
  animation: squareToCircle 5s 1s infinite alternate;
  /* animation: spin 10s ease-in infinite; */
}

.triangle {
  position: absolute;
  width: 0;
  height: 0;
  top: -25%;
  left: -20%;
  border-left: 257px solid transparent;
  border-right: 257px solid transparent;
  border-bottom: 405px solid rgb(71, 255, 215);
  position: relative;
  transform: rotate(30deg);
  animation: spin 10s ease infinite;
}

/* .triangle:after {
    content: '';
    position: absolute;
    top: 15px;
    left: -240px;
    width: 0;
    height: 0;
    border-left: 240px solid transparent;
    border-right: 240px solid transparent;
    border-bottom: 380px solid white;
} */

@keyframes move {
  0% {
    left: 70%;
    top: -10%;
  }
  50% {
    left: 60%;
    top: 0%;
  }
  70% {
    left: 60%;
    top: -5%;
  }
  100% {
    left: 70%;
    top: -10%;
  }
}

@keyframes move2 {
  0% {
    margin-top: 20%;
    margin-left: 40%;
  }
  50% {
    margin-top: 10%;
    margin-left: 40%;
  }
  70% {
    margin-top: 15%;
    margin-left: 40%;
  }
  100% {
    margin-top: 20%;
    margin-left: 40%;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(170deg);
  }
}

@keyframes squareToCircle {
  0% {
    border-radius: 0 0 0 0;
    background: coral;
    transform: rotate(0deg);
  }
  25% {
    border-radius: 50% 0 0 0;
    background: darksalmon;
    transform: rotate(45deg);
  }
  50% {
    border-radius: 50% 50% 0 0;
    background: indianred;
    transform: rotate(90deg);
  }
  75% {
    border-radius: 50% 50% 50% 0;
    background: lightcoral;
    transform: rotate(135deg);
  }
  100% {
    border-radius: 50% 50% 50% 50%;
    background: darksalmon;
    transform: rotate(180deg);
  }
}

/* About 區塊樣式*/

#About .container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  z-index: 2;
}

.description {
  width: 50%;
  padding: 30px;
}

h2 {
  padding: 20px 0;
  font-size: 2rem;
  text-shadow: 3px 3px 3px #ababab;
}

.description h3 {
  padding: 20px 0;
  font-size: 1.5rem;
}

.description p {
  line-height: 24px;
  font-size: 1rem;
}

.education {
  margin-top: 50px;
}

.education h4 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.education-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.education-list li {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f7f7f7;
  border-radius: 5px;
}

.education-meta {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}

.education p {
  font-size: 16px;
  color: #666;
  margin-bottom: 0;
}

.profile,
.education,
.skills {
  margin-top: 20px;
}

/* 先設定list、li與skill name樣式 */

.skills-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.skills-list li {
  height: 50px;
  display: flex;
  justify-content: center;
  align-content: baseline;
}

.skill-name {
  font-weight: bold;
  display: inline-block;
  width: 80px;
  margin-right: 30px;
  font-size: 20px;
}

/* 設定bar的外層樣式 */

.skill-bar {
  background-color: #ddd;
  height: 20px;
  border-radius: 20px;
  display: inline-block;
  width: 250px;
  position: relative;
  margin-bottom: 10px;
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.1);
}

/* 設定bar的內層樣式 */

.skill-level {
  background-color: #4caf50;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
}

/* 設定各項目的顏色與動畫 */

.skill-html {
  animation: progress-html 2s ease-in-out;
  background: linear-gradient(to right, #f89e59, #ff4500);
  width: 90%;
}

.skill-css {
  animation: progress-css 2s ease-in-out;
  background: linear-gradient(to right, #ff1ee5, #c075f5);
  width: 80%;
}

.skill-js {
  animation: progress-js 2s ease-in-out;
  background: linear-gradient(to right, #ffd700, #ffa500);
  width: 70%;
}

.skill-php {
  animation: progress-php 2s ease-in-out;
  background: linear-gradient(to right, #07ce5d, #dbea38);
  width: 60%;
}

.skill-mysql {
  animation: progress-mysql 2s ease-in-out;
  background: linear-gradient(to right, #3b228b, #00bfff);
  width: 60%;
}

/* skill Animation */

@keyframes progress-html {
  from {
    width: 0%;
  }
  to {
    width: 90%;
  }
}

@keyframes progress-css {
  from {
    width: 0%;
  }
  to {
    width: 80%;
  }
}

@keyframes progress-js {
  from {
    width: 0%;
  }
  to {
    width: 70%;
  }
}

@keyframes progress-php {
  from {
    width: 0%;
  }
  to {
    width: 60%;
  }
}

@keyframes progress-mysql {
  from {
    width: 0%;
  }
  to {
    width: 65%;
  }
}

/* 手機 */

@media screen and (max-width: 767px) {
  .circle1 {
    position: absolute;
    width: 500px;
    height: 500px;
    top: -10%;
    left: 60%;
    border-radius: 50%;
    border: 15px solid #f89e59;
    z-index: -1;
    animation: move 10s ease-in infinite;
  }

  .circle2 {
    position: absolute;
    margin-left: 40%;
    margin-top: 20%;
    width: 150px;
    height: 150px;
  }

  .shape {
    width: 100px;
    height: 100px;
  }
  .slogan {
    margin: auto 20px;
  }
  .slogan h2 {
    font-size: 2rem;
  }
  .triangle {
    display: none;
  }

  #About .container {
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .description {
    padding: 30px 0px;
  }

  .description {
    width: 95%;
    margin: auto;
  }

  .skill-name {
    width: 120px;
    margin-right: 5px;
  }
}
</style>
