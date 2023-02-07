type NavItem = NavItemWithLink | NavItemWithChildren;

interface NavItemWithChildren {
	text?: string;
	items: NavItemWithLink[];
	activeMatch?: string;
}

type NavItemWithLink = {
	text: string;
	link: string;
	activeMatch?: string;
};

export const addNavPrefix = (prefix: string = "/", nav: Array<NavItem>) => {
	if (prefix === "/") return nav;

	return nav.map((item) => {
		if (item["items"]) {
			return {
				text: item.text,
				items: item["items"].map((i) => {
					if (/^v/.test(item["items"].test)) return i;
					return {
						text: i.text,
						link: `${prefix}${i.link.replace("/", "")}`,
					};
				}),
			};
		} else {
			return {
				text: item.text,
				activeMatch: item.activeMatch,
				// @ts-ignore
				link: `${prefix}${item.link.replace("/", "")}`,
			};
		}
	});
};

export const addSidebarPrefix = (prefix: string = "/", sidebar: object) => {
	if (prefix === "/") return sidebar;

	for (const key in sidebar) {
		sidebar[key] = sidebar[key].map((item) => {
			return {
				text: item.text,
				items: item.items.map((i) => {
					return {
						text: i.text,
						link: `${prefix}${i.link.replace("/", "")}`,
					};
				}),
			};
		});
	}

	return sidebar;
};
