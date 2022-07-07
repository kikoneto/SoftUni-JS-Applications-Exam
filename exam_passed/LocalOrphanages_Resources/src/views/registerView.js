import { register } from "../services/authService.js";
import { html } from '../../node_modules/lit-html/lit-html.js';

const registerTemplate = (submitHandler) => html`
<section id="register-page" class="auth">
    <form id="register" @submit="${submitHandler}">
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>
        `
    ;

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        let email = form.get('email');
        let password = form.get('password');
        let confPassword = form.get('repeatPassword')

        if (email == '' || password == '' || confPassword == '') {
            alert('There are missing fields!');
            return;
        }

        register(email, password)
            .then(res => {
                console.log(res);
                ctx.page.redirect('/dashboard')
            })
    }

    ctx.render(registerTemplate(submitHandler))
}