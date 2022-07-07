import { logout } from "../services/authService.js";

export const logoutView = (ctx) => {
    logout()
    .then(() => {
        ctx.page.redirect('/dashboard');
    })
}