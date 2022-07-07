import { html } from '../../node_modules/lit-html/lit-html.js';

const userNav = () => html`
<div id="user">
    <a href="/myposts">My Posts</a>
    <a href="/create">Create Post</a>
    <a href="/logout">Logout</a>
</div>`
    ;

const guestNav = () => html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
    `;

const navigationTempalte = (user) => html`
<h1><a href="/dashboard">Orphelp</a></h1>

<nav>
    <a href="/dashboard">Dashboard</a>

    ${user
    ? userNav()
: guestNav()}
</nav>
`;

export const navigationView = (ctx) => {
    return navigationTempalte(ctx.user);
}