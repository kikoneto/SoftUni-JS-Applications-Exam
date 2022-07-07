import { del, getOne } from "../services/postService.js";

export const deleteView = async (ctx) => {
    try {
        const album = await getOne(ctx.params.postId);

        let confirmed = confirm('Are you sure that you want to delete this post?');

        if (confirmed) {
            await del(ctx.params.postId);

            ctx.page.redirect('/dashboard');
        }

    } catch (error) {
        alert(error)
    }
}