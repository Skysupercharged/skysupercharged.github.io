let sites = {
	'bugs': {
		image: "https://fabledbugs.github.io/bugsite.png",
		link: "https://fabledbugs.github.io"
	},
	'wolf': {
		image: "static.gif",
		link: "https://wolfdragon245.github.io/"
	},
	'silver': {
		image: "https://silvershorthair.github.io/Assets/Silvbutton2.png",
		link: "https://silvershorthair.github.io"
	},
	'jemma': {
		image: "https://jemmathecube.github.io/website/images/webring/derredbutton.png",
		link: "https://jemmathecube.github.io/website"
	},
	'mia': {
		image: "random",
		num: "6",
		ran1: "https://miastonished.github.io/assets/buttons/button.gif",
		ran2: "https://miastonished.github.io/assets/buttons/button2.png",
		ran3: "https://miastonished.github.io/assets/buttons/button3.gif",
		ran4: "https://miastonished.github.io/assets/buttons/button4.png",
		ran5: "https://miastonished.github.io/assets/buttons/button5.png",
		ran6: "https://miastonished.github.io/assets/buttons/button6.png",
		link: "https://miastonished.github.io"
	},
	'xzan': {
		image: "https://xzan-corvus.github.io/Xzan_and_Proto.gif",
		link: "https://xzan-corvus.github.io"
	},
	'jiro': {
		image: "static.gif",
		link: "https://jir0we.github.io"
	},
	'command': {
		image: "static.gif",
		link: "https://commandtm.github.io"
	},
	'valaris': {
		image: "https://vaelaris.github.io/weringbutton.png",
		link: "https://vaelaris.github.io"
	},
	'batashock': {
		image: "static.gif",
		link: "https://batashock.github.io"
	},
	'musent': {
		image: "static.gif",
		link: "https://garden.lgbt"
	},
	'gumi': {
		image: "https://gumi.gay/logo.gif",
		link: "https://gumi.gay"
	},
	'flower': {
		image: "static.gif",
		link: "https://flower1221.neocities.org"
	},
	//'myeyeshurt': {
	//	image: "static.gif",
	//	link: "https://www.iceayy.com"
	//}
};

min = Math.ceil(0);
max = Math.floor(Object.entries(sites).length);
sitenum = (Math.floor(Math.random() * (max - min) + min));

function setbutton() {
	site = Object.entries(sites)[sitenum][1];
	if (site.image == "random") {
		document.getElementById("sitebuttonI").src = eval("site.ran" + `${Math.floor((Math.random() * site.num) + 1)}`);
	} else {
		document.getElementById("sitebuttonI").src = site.image;
	};
	document.getElementById("sitebuttonA").href = site.link
};
setbutton();

function associatedleft() {
	sitenum--;
	if (sitenum < 0) {
		sitenum = (Object.entries(sites).length - 1);
	};

	setbutton()
};

function associatedright() {
	sitenum++;
	if (sitenum > Object.entries(sites).length - 1) {
		sitenum = 0;
	};

	setbutton()
}