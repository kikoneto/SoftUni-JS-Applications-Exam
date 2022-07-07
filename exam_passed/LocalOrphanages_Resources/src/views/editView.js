import { html } from '../../node_modules/lit-html/lit-html.js';
import { getOne, edit } from '../services/postService.js';
const postIsValid = (post) => {
    const requiredField = [
        'title',
        'description',
        'imageUrl',
        'address',
        'phone'
    ]

    return requiredField.some(x => !post[x]);
}

const editTemplate = (data,submitHandler) => html`
<section id="edit-page" class="auth">
<form id="edit" @submit = "${submitHandler}">
    <h1 class="title">Edit Post</h1>

    <article class="input-group">
        <label for="title">Post Title</label>
        <input type="title" name="title" id="title" value="${data.title}">
    </article>

    <article class="input-group">
        <label for="description">Description of the needs </label>
        <input type="text" name="description" id="description" value="${data.description}">
    </article>

    <article class="input-group">
        <label for="imageUrl"> Needed materials image </label>
        <input type="text" name="imageUrl" id="imageUrl" value="${data.imageUrl}">
    </article>

    <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" name="address" id="address" value="${data.address}">
    </article>

    <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone" value="${data.phone}">
    </article>

    <input type="submit" class="btn submit" value="Edit Post">
</form>
</section>
`;

export const editView = (ctx) => {
    getOne(ctx.params.postId)
        .then(data => {
            ctx.render(editTemplate(data, submitHandler));
        })

    const submitHandler = (e) => {
        e.preventDefault();

        const postData = Object.fromEntries(new FormData(e.currentTarget));

        if (postIsValid(postData)) {
            alert('All fields should be filled!');
            return;
        }

        edit(ctx.params.postId, postData)
            .then(res => {
                ctx.page.redirect('/dashboard');
            })
            .catch(error => {
                alert(error.message);
            })
    }
}