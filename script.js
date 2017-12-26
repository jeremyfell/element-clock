var wiki = "http://en.wikipedia.org/wiki/";

var esymbol = [
  " ","H","He","Li","Be","B","C","N","O","F","Ne",
  "Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca",
  "Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn",
  "Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr",
  "Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn",
  "Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr", "Nd",
	"Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb",
	"Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg",
	"Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th",
	"Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm",
	"Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds",
	"Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"
];

var ename = [
  " ","Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon",
  "Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium",
  "Aluminium","Silicon","Phosphorus","Sulfur","Chlorine","Argon",
  "Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium",
  "Manganese","Iron","Cobalt","Nickel","Copper","Zinc",
  "Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton",
  "Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum",
  "Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium",
  "Indium","Tin","Antimony","Tellurium","Iodine","Xenon",
  "Caesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium",
	"Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium",
	"Holmium","Erbium","Thullium","Ytterbium","Lutetium",
	"Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium",
	"Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium",
	"Astatine","Radon","Francium","Radium","Actinium","Thorium",
	"Protactinium","Uranium","Neptunium","Plutonium","Americium","Curium",
	"Berkelium","Californium","Einsteinium","Fermium","Mendelevium","Nobelium",
	"Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium",
	"Meitnerium","Darmstadtium","Roentgenium","Copernicium","Nihonium","Flerovium",
	"Moscovium","Livermorium","Tennessine","Oganesson"
];

//Double check all mass values. Quite a few are probably wrong
var emass = [
    " ","1.0079","4.0026","6.941","9.0122","10.811","12.011","14.007","15.999","18.998","20.180",
	"22.990","24.305","26.982","28.086","30.974","32.066","35.453","39.948","39.098","40.078",
    "44.956","47.867","50.942","51.996","54.938","55.845","58.933","58.693","63.546","65.38",
    "69.732","72.631","74.922","78.971","79.904","83.798","85.468","87.62","88.906","91.224",
    "92.906","95.95","98.907","101.07","102.906","106.42","107.868","112.414","114.818","118.711",
    "121.760","127.6","126.904","131.29","132.905","137.327","138.906","140.115","140.908","144.24",
	"144.913","150.36","161.966","157.25","158.925","162.50","164.930","167.26","168.934","173.04",
	"174.967","178.49","180.948","183.85","168.207","190.23","192.22","195.08","196.967","200.59",
	"204.383","207.2","208.980","[208.982]","209.987","222.018","223.020","226.025","227.028","232.038",
	"231.036","238.029","237.048","244.064","243.061","247.070","247.070","251.080","[254]","257.095",
	"258.1","259.101","[262]","[261]","[262]","[266]","[264]","[269]","[268]","[269]",
	"[272]","[277]","?","[289]","?","[298]","?","?"
];

var egroup = [
	9,
    6,8,
    0,1,5,6,6,6,7,8,
    0,1,4,5,6,6,7,8,
    0,1,3,3,3,3,3,3,3,3,3,3,4,5,5,6,7,8,
    0,1,3,3,3,3,3,3,3,3,3,3,4,4,5,5,7,8,
    0,1,2,2,2
];

var boxcolor = [
	["#62a73b", "#72bf44"],
	["#009353", "#00a65d"],
	["#512480", "#5c2d91"],
	["#ccbe00", "#e3d200"],
	["#1c3687", "#21409a"],
	["#d99116", "#faa61a"],
	["#00599d", "#0066b3"],
	["#ce181e", "#ed1c24"],
	["#8f187c", "#a3238e"],
	["#7f8c8d", "#bdc3c7"]
];

var state = ["off", "on"];

//Element
var eh = document.getElementById("eh");
var em = document.getElementById("em");
var es = document.getElementById("es");
var ep = document.getElementById("ep");
//Element symbol
var sh = document.getElementById("sh");
var sm = document.getElementById("sm");
var ss = document.getElementById("ss");
var sp = document.getElementById("sp");
//Element atomic number
var ah = document.getElementById("ah");
var am = document.getElementById("am");
var as = document.getElementById("as");
var ap = document.getElementById("ap");
//Element name
var nh = document.getElementById("nh");
var nm = document.getElementById("nm");
var ns = document.getElementById("ns");
var np = document.getElementById("np");
//Element atomic mass
var mh = document.getElementById("mh");
var mm = document.getElementById("mm");
var ms = document.getElementById("ms");
var mp = document.getElementById("mp");
//Setting values
var sfull = false;
var sname = false;
var smass = false;
var sgroup = true;
//Setting buttons
var bfull = document.getElementById("bfull");
var bname = document.getElementById("bname");
var bmass = document.getElementById("bmass");
var bgroup = document.getElementById("bgroup");
//Info buttons
var about = document.getElementById("about");
var legend = document.getElementById("legend");
var aboutbox = document.getElementById("aboutbox");
var showabout = false;
//Element groups
var alkali = document.getElementById("alkali");
var alkaline = document.getElementById("alkaline");
var rare = document.getElementById("rare");
var transition = document.getElementById("transition");
var other = document.getElementById("other");
var metalloid = document.getElementById("metalloid");
var nonmetal = document.getElementById("nonmetal");
var halogen = document.getElementById("halogen");
var noble = document.getElementById("noble");
//Legend times
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var period = document.getElementById("period");
//Time
var h;
var m;
var s;
var post;
//Displays
var clock = document.getElementById("clock");
var table = document.getElementById("table");

var elements = [null];//Table elements
var display = true;//Current display
var basic = 3;//Default clock color

function update(repeat) {
	var csymbol;
	var catomic;
    var d = new Date()
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
	if (display) {
		if (!sfull) {
			ep.style.visibility = "visible";
			if (h > 12) {
				h -= 12;
				post = true;
			} else {
				post = false;
				if (h === 0) {
					h = 12;
				}
			}
			ap.innerHTML = 95 - 34 * Number(post);
			sp.innerHTML = esymbol[95 - 34 * Number(post)];
			np.innerHTML = ename[95 - 34 * Number(post)];
			mp.innerHTML = emass[95 - 34 * Number(post)];

		} else {
			ep.style.visibility = "hidden";
		}
		sh.innerHTML = esymbol[h];
		sm.innerHTML = esymbol[m];
		ss.innerHTML = esymbol[s];
		ah.innerHTML = h;
		am.innerHTML = m;
		as.innerHTML = s;

		if (sname) {
			nh.innerHTML = ename[h];
			nm.innerHTML = ename[m];
			ns.innerHTML = ename[s];
			showElements([nh, nm, ns]);
			sfull ? np.style.visibility = "hidden" : np.style.visibility = "visible";
		} else {
			hideElements([nh, nm, ns, np]);
		}

		if (smass) {
			mh.innerHTML = emass[h];
			mm.innerHTML = emass[m];
			ms.innerHTML = emass[s];
			showElements([mh, mm, ms])
			sfull ? mp.style.visibility = "hidden" : mp.style.visibility = "visible";
		} else {
			hideElements([mh, mm, ms, mp]);
		}

		if (sgroup) {
			groupUpdate(egroup[h], eh);
			groupUpdate(egroup[m], em);
			groupUpdate(egroup[s], es);
			groupUpdate(2, ep);
		} else {
			groupDefault(eh);
			groupDefault(em);
			groupDefault(es);
			groupDefault(ep);
		}
	} else {
		for (var e = 1; e <= 95; e++) {
			var ce = elements[e].childNodes;
			elements[e].style.borderColor = "#304457";
			elements[e].style.backgroundColor = "#34495e";
			ce[0].style.color = "#2c3e50";
			ce[1].style.color = "#2c3e50";
			if (e === 59) {
				e = 60
			} else if (e === 61) {
				e = 94
			}

		}

		if (!sfull) {
			if (h > 12) {
				h -= 12;
				post = true;
				elements[61].style.borderColor = "#ce181e";
				elements[61].style.backgroundColor = "#ed1c24";
			} else {
				post = false;
				if (h === 0) {
					h = 12;
				}
				elements[95].style.borderColor = "#ce181e";
				elements[95].style.backgroundColor = "#ed1c24";
			}
		}

		if (h > 0) {
			elements[h].style.borderColor = "#00599d";
			elements[h].style.backgroundColor = "#0066b3";
		}

		if (m > 0) {
			if (m !== h) {
				elements[m].style.borderColor = "#009353";
				elements[m].style.backgroundColor = "#00a65d";
			} else {
				csymbol = elements[m].childNodes[1];
				csymbol.style.color = "#009353";
			}
		}

		if (s > 0) {
			if (s !== h && s !== m) {
				elements[s].style.borderColor = "#ccbe00";
				elements[s].style.backgroundColor = "#e3d200";
			} else if (s === h && s === m) {
				catomic = elements[s].childNodes[0];
				catomic.style.color = "#ccbe00";
			} else {
				csymbol = elements[s].childNodes[1];
				csymbol.style.color = "#ccbe00";
			}
		}
	}
	if (repeat) setTimeout(update, 1000, true);
}

function groupUpdate(g, box) {
	box.style.backgroundColor = boxcolor[g][1];
	box.style.borderColor = boxcolor[g][0];
}

function groupDefault(box) {
	box.style.backgroundColor = boxcolor[basic][1];
	box.style.borderColor = boxcolor[basic][0];
}

function showElements(change) {
	var edit;
	for (var c = 0; c < change.length; c++) {
		edit = change[c];
		edit.style.visibility = "visible";
	}
}

function hideElements(change) {
	var edit;
	for (var c = 0; c < change.length; c++) {
		edit = change[c];
		edit.style.visibility = "hidden";
	}
}

function changeDisplay(cdisplay) {
	display = !display;
	if (display) {
		cdisplay.innerHTML = "Table";
		showElements([clock, bname, bmass, bgroup, about]);
		hideElements([table, legend]);
	} else {
		cdisplay.innerHTML = "Clock";
		showElements([table, legend]);
		hideElements([clock, ep, nh, nm, ns, np, mh, mm, ms, mp, bname, bmass, bgroup, about, aboutbox]);
		showabout = false;
	}
	update(false);
}

for (var n = 1; n <= 118; n++) {
	var celement = document.getElementById("e" + n);
	celement.childNodes[0].innerHTML = n;
	celement.childNodes[1].innerHTML = esymbol[n];
	celement.onclick = function() {window.open(wiki + ename[Number(this.childNodes[0].innerHTML)])};
	celement.title = ename[n];
	elements.push(document.getElementById("e" + n));
}

update(true);
