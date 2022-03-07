<template>
  <button class="s-button" @click="_click" :class="[round?'s-button-round':null,disabled?'s-button-disabled':null]" :disabled="disabled">
      <slot></slot>
  </button>
</template>

<script>
export default {
    props:{
        round:Boolean,
        disabled:Boolean
    },
    methods:{
        _click(){
            this.$emit("click");
        }
    }
};
</script>

<style>
.s-button{
    background: none;
    border: 1px solid #ffc000;
    color: #ffffff;
    background-color: #ffc000;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: .1s;
    padding: 9px 20px;
    font-size: 15px;
    cursor: pointer;
    border-radius: 5px;
}
.s-button:hover{
    background-color: #ffc34f;
}
.s-button:active{
    box-shadow: 0 0 0 5px #ffc00033;
}
.s-button:focus{
    background-color: #ffc34f;
    box-shadow: 0 0 0 5px #ffbf0066;
}
.s-button:active{
    box-shadow: 0 0 0 5px #ffc000aa;
}
.s-button-round{
    border-radius: 20px;
}
.s-button-disabled{
    filter: grayscale(50%) !important;
    background-color: #ffc34f !important;
    cursor: no-drop;
}
</style>