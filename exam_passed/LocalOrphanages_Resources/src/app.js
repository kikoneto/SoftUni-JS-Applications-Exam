import page from '../node_modules/page/page.mjs';

import { authMiddleware } from './middleware/authMiddleware.js';
import { renderContentMiddleware, renderNavigationMiddleware } from './middleware/renderMiddleware.js';
import { createView } from './views/createView.js';

import { dashboardView } from './views/dashboardView.js';
import { deleteView } from './views/deleteView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { myPostsView } from './views/mypostsView.js';
import { registerView } from './views/registerView.js';

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/',dashboardView);
page('/login',loginView);
page('/dashboard',dashboardView);
page('/logout',logoutView);
page('/register',registerView);
page('/create',createView);
page('/myposts',myPostsView);
page('/post/:postId/details',detailsView);
page('/post/:postId/details/edit',editView);
page('/post/:postId/details/delete',deleteView);

page.start();