<script lang="ts">
	import * as Form from "$lib/components/ui/form";
	import { FontFormSchema } from "./schema";

	export let data;
	$: ({ form } = data);
</script>

<Form.Root action="?/submit" method="POST" {form} schema={FontFormSchema} debug let:config>
	<Form.Field {config} name="file">
		<Form.Item>
			<Form.Label>Font File</Form.Label>
			<Form.Input type="file" accept=".ttf,.otf,.woff2,font/ttf,font/otf,font/woff2" />
			<Form.Description>
				Please upload a font file. The following formats are supported: TrueType (.ttf), OpenType
				(.otf), and Web Font (.woff2)
			</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</Form.Root>
