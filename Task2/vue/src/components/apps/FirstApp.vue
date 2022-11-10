<template>
  <div class="first-app-holder-container">
    <div @click="back()" class="go-back-btn">
      <svg viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <path
          d="M441.751,475.584L222.166,256L441.75,36.416c6.101-6.101,7.936-15.275,4.629-23.253C443.094,5.184,435.286,0,426.667,0 H320.001c-5.675,0-11.093,2.24-15.083,6.251L70.251,240.917c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667 c3.989,4.011,9.408,6.251,15.083,6.251h106.667c8.619,0,16.427-5.184,19.712-13.163 C449.687,490.858,447.852,481.685,441.751,475.584z" />
      </svg>
    </div>
    <div class="input-name-application">
      <div class="input-add-holder">
        <input type="text" placeholder="Input your string" class="input-string" v-model="nameText">
        <button class="add-name" @click="addValidString" :disabled="!isInputValid">Add</button>
      </div>
      <div class="errors-holder">
        <div class="error-msg" v-for="(error, index) in currentErrors" :key="index">{{ error }}</div>
      </div>
      <div class="names-list">
        <div class="name-item" v-for="(name, index) in this.names" :key="index">
          {{ name }}
          <div class="remove-name" @click="removeTargetString(index)">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1792 1792" style="enable-background:new 0 0 1792 1792;" xml:space="preserve">
              <path d="M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4 c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1 c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'FirstApp',
  data() {
    return {
      nameText: '',
      matches: 0
    }
  },
  methods: {
    ...mapMutations(['setCurrentLeftApp']),
    back() {
      this.setCurrentLeftApp(this.components.playComponent)
    },

    addValidString() {
      if (!this.isInputValid) {
        return;
      }
      this.names.push(this.normalizeString(this.nameText));
    },

    removeTargetString(index) {
      this.names.splice(index, 1);
    },

    normalizeString(str) {
      let splittedString = str.split(' ');
      let convertStrings = [];
      splittedString.forEach(singleString => {
        let lowered = singleString.toLowerCase();
        let capitalised = this.capitalise(lowered);
        convertStrings.push(capitalised);
      })
      return convertStrings.join(" ")
    },

    capitalise(item) {
      return `${item.charAt(0).toUpperCase()}${item.slice(1)}`;
    },
  },

  computed: {
    ...mapState(['components', 'names', 'errors']),

    isEmptyString() {
      return this.nameText === '';
    },

    isSymbolString() {
      // регулярное выражение, выполяет поиск запрещенных символов в строке
      return /^[a-zA-Z\s]+$/.test(this.nameText);
    },

    isTwoWordString() {
      // регулярное выражение, которое ищет количество слов в строке
      let matchesCount = this.nameText.match(/\S+/g) || [];
      console.log(matchesCount);
      return matchesCount.length === 2;
    },

    isInputValid() {
      return this.isSymbolString && this.isTwoWordString && !this.isEmptyString;
    },

    currentErrors() {
      let errorsArray = [];
      if (this.isEmptyString) {
        errorsArray.push([this.errors.EmptyInput]);
      }
      if (!this.isSymbolString) {
        errorsArray.push([this.errors.ForbiddenCharacters])
      }
      if (!this.isTwoWordString) {
        errorsArray.push([this.errors.NotTwoWords]);
      }
      return errorsArray;
    }
  }
}

</script>
  
<style scoped>
.first-app-holder-container {
  position: relative;
  border-radius: 10px;
  border: 1px solid black;
  width: 400px;
  height: 400px;
}

.go-back-btn {
  z-index: 1;
  left: 15px;
  top: 15px;
  position: relative;
}

h1 {
  text-align: center;
}

.input-name-application {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10%;
}

.input-add-holder {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-add-holder input {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  width: 200px;
  height: 35px;
  font-size: 15px;
}

.input-add-holder input:focus {
  outline: 3px solid rgb(204, 255, 0);
  border: none;
}

.errors-holder {
  margin-top: 10px;
}

.add-name {
  width: 35px;
  height: 35px;
  margin-left: 15px;
}

.error-msg {
  color: rgb(255, 0, 0);
  font-weight: 600;
  font-size: 12px;
}

.name-item {
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.remove-name svg {
  margin-left: 5px;
  cursor: pointer;
  width: 15px;
  height: 15px;
}
</style>