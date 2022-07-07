import { create } from '../services/postService.js';
import { html } from '../../node_modules/lit-html/lit-html.js';

const createTemplate = (submitHandler) => html`
<section id="create-page" class="auth">
    <form id="create" @submit="${submitHandler}">
        <h1 class="title">Create Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title">
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description">
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl">
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address">
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone">
        </article>

        <input type="submit" class="btn submit" value="Create Post">
    </form>
</section>`
    ;

export const createView = (ctx) => {

    const submitHandler = (e) => {
        e.preventDefault();
        
        let form = new FormData(e.currentTarget);

        let title = form.get('title');
        let description = form.get('description');
        let imageUrl = form.get('imageUrl');
        let address = form.get('address');
        let phone = form.get('phone');

        if (title == '' || description == '' || imageUrl == '' || address == '' || phone == '') {
            alert('All fields must be filled!');
            return;
        }

        const post = {
            title,
            description,
            imageUrl,
            address,
            phone
        }

        create(post)
            .then(() => ctx.page.redirect('/dashboard'));
    }
    ctx.render(createTemplate(submitHandler));
}