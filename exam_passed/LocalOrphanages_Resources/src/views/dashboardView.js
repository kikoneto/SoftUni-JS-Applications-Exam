import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../services/postService.js';

const cardTemplate = (card) => html`
<div class="post">
            <h2 class="post-title">${card.title}</h2>
            <img class="post-image" src="${card.imageUrl}" alt="Kids clothes">
            <div class="btn-wrapper">
                <a href="/post/${card._id}/details" class="details-btn btn">Details</a>
            </div>
        </div>`;

const dashboardTemplate = (posts) => html`<!-- Dashboard -->
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>

    <!-- Display a div with information about every post (if any)-->
    <div class="all-posts">
        ${posts.length != 0
        ? posts.map(x => cardTemplate(x))
        : html`<h1 class="title no-posts-title">No posts yet!</h1>`}
    </div>
</section>`

export const dashboardView = (ctx) => {
    getAll()
    .then(x => {
        console.log(x)
        ctx.render(dashboardTemplate(x));
    })
}