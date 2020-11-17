export const Menus = {
    getMenus
};

const MENU = {
	AGENT : [
		{
			url: '/agent-dashboard',
			title: 'Dashboard',
			icon: './assets/images/icons/menu/operations/dashboard.svg'
		},
		{
			url: '/agent-applications',
			title: 'Applications',
			icon: './assets/images/icons/menu/operations/dashboard.svg'
		}
	],
	OPERATIONS : [
		{
			url: '/operations-dashboard',
			title: 'Dashboard',
			icon: './assets/images/icons/menu/operations/dashboard.svg'
		},
		{
			url: '/operations-merchant-search',
			title: 'Merchant Search',
			icon: './assets/images/icons/menu/operations/dashboard.svg'
		},
		{
			url: '/operations-applications',
			title: 'Applications',
			icon: './assets/images/icons/menu/operations/dashboard.svg'
		}
	],
	MERCHANT : [
		{
			url: '/merchant-dashboard',
			title: 'Dashboard',
			icon: './assets/images/icons/menu/operations/dashboard.svg'
		},
		{
			url: '/merchant-transactions',
			title: 'Transactions',
			icon: './assets/images/icons/menu/operations/dashboard.svg'
		},
		// {
		// 	url: '/merchant-reports',
		// 	title: 'Reports',
		// 	icon: './assets/images/icons/menu/operations/dashboard.svg'
		// },
		{
			url: '/merchant-upload-documents',
			title: 'Upload Documents',
			icon: './assets/images/icons/menu/operations/dashboard.svg'
		},
		{
			url: '/merchant-devices',
			title: 'Devices',
			icon: './assets/images/icons/menu/operations/dashboard.svg'
		},
		// {
		// 	url: '/merchant-cart',
		// 	title: 'Cart',
		// 	icon: './assets/images/icons/menu/operations/dashboard.svg'
		// },
		// {
		// 	url: '/merchant-contact',
		// 	title: 'Contact',
		// 	icon: './assets/images/icons/menu/operations/dashboard.svg'
		// }
	],
	SUPPORT : [
		{
			url: '/support-dashboard',
			title: 'Dashboard',
			icon: './assets/images/icons/menu/operations/dashboard.svg'
		}
	],
	COMPLIANCE : [
		{
			url: '/compliance-merchant-search',
			title: 'Search Merchants',
			icon: './assets/images/icons/menu/operations/dashboard.svg'
		}
	]
};

function getMenus(role)
{
	for(var key of Object.keys(MENU))
	{
		if(key.indexOf(role) > -1)
		{
			return MENU[key];
		}
	}
}







