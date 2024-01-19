<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
	import { Button } from "$lib/components/ui/button";
	import Github from "~icons/mdi/github";

	export let data;
	$: ({ user } = data);
</script>

<main class="flex-1 my-4 flex flex-col gap-6 items-center">
	<h1 class="text-center font-semibold text-4xl">Contribute to sona</h1>

	{#if !user}
		<Button href="/login/github" variant="outline" class="flex justify-center gap-4">
			<Github />
			Login to GitHub
		</Button>
	{:else}
		<form action="?/logout" method="post">
			<Button type="submit" variant="outline" class="flex justify-center gap-2 py-6">
				<Avatar class="size-7">
					<AvatarImage
						src="https://github.com/{user.github.username}.png"
						alt="{user.github.username}'s profile picture"
					/>
					<AvatarFallback />
				</Avatar>
				Logout from {user.github.username}
			</Button>
		</form>
	{/if}
</main>
