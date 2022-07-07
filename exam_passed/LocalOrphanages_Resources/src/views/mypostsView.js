import { html } from '../../node_modules/lit-html/lit-html.js';
import { getByName } from '../services/postService.js';

const currentPost = (post) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src="${post.imageUrl}" alt="Material Image">
    <div class="btn-wrapper">
        <a href="/post/${post._id}/details" class="details-btn btn">Details</a>
    </div>
`;

const myPosts = (posts) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>

    <!-- Display a div with information about every post (if any)-->
    <div class="my-posts">
        ${posts.length != 0
        ? posts.map(x => currentPost(x))
        : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}
        </div>
    </div>
</section>
`;

export const myPostsView = (ctx) => {
    getByName(ctx.user._id)
    .then(x => {
        ctx.render(myPosts(x));
    })
}