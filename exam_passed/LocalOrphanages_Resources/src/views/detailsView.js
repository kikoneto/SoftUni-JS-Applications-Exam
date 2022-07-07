import { html,nothing } from '../../node_modules/lit-html/lit-html.js';
import { getOne } from '../services/postService.js';

const bonusDonationTemplate = (post) => html`
<a href="/post/${post._id}/details/donate" class="donate-btn btn">Donate</a>
`;

const creatorButtonsTemplate = (post) => html`
<div class="btns">
    <a href="/post/${post._id}/details/edit" class="edit-btn btn">Edit</a>
    <a href="/post/${post._id}/details/delete" class="delete-btn btn">Delete</a>`
    ;

const detailsTemplate = (post, user) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${post.imageUrl}" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: 0</p>

                <!--Edit and Delete are only for creator-->
                
                <!--Bonus - Only for logged-in users ( not authors )-->
                ${user._id == post._ownerId
                    ? creatorButtonsTemplate(post)
                    : bonusDonationTemplate(post)
                }
                </div>

            </div>
        </div>
    </div>
</section>
        `;

export const detailsView = (ctx) => {
    getOne(ctx.params.postId)
    .then(x => {
        console.log(x);
        ctx.render(detailsTemplate(x,ctx.user));
    })
}