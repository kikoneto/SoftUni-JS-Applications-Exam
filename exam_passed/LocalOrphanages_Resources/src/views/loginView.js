import { login } from "../services/authService.js";
import { html } from '../../node_modules/lit-html/lit-html.js';

const loginTemplate = (submitHandler) => html`
<section id="login-page" class="auth">
    <form id="login" @submit = "${submitHandler}">
        <h1 class="title">Login</h1>

        <article class="input-group">
            <label for="login-email">Email: </label>
            <input type="email" id="login-email" name="email">
        </article>

        <article class="input-group">
            <label for="password">Password: </label>
            <input type="password" id="password" name="password">
        </article>

        <input type="submit" class="btn submit-btn" value="Log In">
    </form>
</section>
        `;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const {email,password} = Object.fromEntries(new FormData(e.currentTarget));

        if(email == '' || password == ''){
            alert('There are missing fields!');
            return;
        }

        login(email,password)
        .then(res => {
            console.log(res);
            ctx.page.redirect('/dashboard')
        })
    }

    ctx.render(loginTemplate(submitHandler))
}