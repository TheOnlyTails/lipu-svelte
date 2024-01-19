import { superValidate } from "sveltekit-superforms/server";
import type { Actions, PageServerLoad } from "./$types";
import { FontFormSchema } from "./schema";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(FontFormSchema),
	};
};

export const actions: Actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();
		const form = await superValidate(formData, FontFormSchema);

		if (!form.valid) return fail(400, { form });

		const file = formData.get("file");
		if (!(file instanceof File)) return fail(400, { form });

		

		return { form };
	},
};
