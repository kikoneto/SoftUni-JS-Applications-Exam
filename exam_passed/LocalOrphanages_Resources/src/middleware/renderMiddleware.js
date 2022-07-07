import {html,render} from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigatorView.js';

const header = document.querySelector('#box header')
const content = document.querySelector('#main-content');

const renderContents = (templateResult) => {
    render(templateResult,content);
}

export const renderNavigationMiddleware = (ctx, next) => {
    render(navigationView(ctx),header)

    next();
}

export const renderContentMiddleware = (ctx,next) => {
    ctx.render = renderContents;

    next();
}