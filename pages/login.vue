<template>
    <div class="signup">

        <form>

            <label for="chk" aria-hidden="true">Sign in</label>
            <div class="errors" v-if="errors">
                <div v-for="(value, key) in errors">
                    {{ key + ' ' }}{{ value[0] }}
                </div>
            </div>
            <input type="email" name="email" placeholder="Email" v-model="email" required="">
            <input type="password" name="pswd" placeholder="Password" v-model="password" required="">
            <button @click.prevent="signUp">Sign up</button>
        </form>

        {{ email }}{{ password }}
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { login } from '@/API.js'
const runtimeConfig = useRuntimeConfig()
definePageMeta({
    layout: "custom",
});
let username = ref(null);
let email = ref(null);
let password = ref(null);
let errors = ref(null)
async function signUp() {
    errors.value = null
    const fetchOptions = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "user": {
                    "email": "jake@jake.jake",
                    "password": "jakejake"
                }
            }
        )
    };
    fetch(`${runtimeConfig.public.apiBase}` + `${login()}`, fetchOptions)
        .then(res => res.json())
        .then(res => {
            if (res.errors) {
                console.log(res.errors);
                errors.value = res.errors
            } else {
                //add token to store
                console.log(res);
            }
        });

}
</script>

<style lang="scss" scoped>
.signup {
    position: relative;
    width: 100%;
    height: 100%;
}

label {
    color: rgb(61, 61, 61);
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
}

input {
    width: 60%;
    height: 48px;
    background: #e0dede;
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
}

button {
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #fff;
    background: #5CB85C;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
    cursor: pointer;
}

button:hover {
    background: #489948;
}

.errors {
    @apply w-3/5 p-2 px-4 mx-auto bg-red-200 text-red-600 font-bold;
}
</style>