var wiki = "http://en.wikipedia.org/wiki/";

var elements = [
  {symbol: "", 	  name: "",               mass: "",           group: "unknown"},
  {symbol: "H", 	name: "Hydrogen",       mass: "1.0079",     group: "nonmetals"},
  {symbol: "He", 	name: "Helium",         mass: "4.0026",     group: "noble gases"},
  {symbol: "Li", 	name: "Lithium",        mass: "6.941",      group: "alkali metals"},
  {symbol: "Be", 	name: "Beryllium",      mass: "9.0122",     group: "alkaline earth metals"},
  {symbol: "B", 	name: "Boron",          mass: "10.811",     group: "metalloids"},
  {symbol: "C", 	name: "Carbon",         mass: "12.011",     group: "nonmetals"},
  {symbol: "N", 	name: "Nitrogen",       mass: "14.007",     group: "nonmetals"},
  {symbol: "O", 	name: "Oxygen",         mass: "15.999",     group: "nonmetals"},
  {symbol: "F", 	name: "Fluorine",       mass: "18.998",     group: "halogens"},
  {symbol: "Ne", 	name: "Neon",           mass: "20.180",     group: "noble gases"},
  {symbol: "Na", 	name: "Sodium",         mass: "22.990",     group: "alkali metals"},
  {symbol: "Mg", 	name: "Magnesium",      mass: "24.305",     group: "alkaline earth metals"},
  {symbol: "Al", 	name: "Aluminium",      mass: "26.982",     group: "other metals"},
  {symbol: "Si", 	name: "Silicon",        mass: "28.086",     group: "metalloids"},
  {symbol: "P", 	name: "Phosphorus",     mass: "30.974",     group: "nonmetals"},
  {symbol: "S", 	name: "Sulfur",         mass: "32.066",     group: "nonmetals"},
  {symbol: "Cl", 	name: "Chlorine",       mass: "35.453",     group: "halogens"},
  {symbol: "Ar", 	name: "Argon",          mass: "39.948",     group: "noble gases"},
  {symbol: "K", 	name: "Potassium",      mass: "39.098",     group: "alkali metals"},
  {symbol: "Ca", 	name: "Calcium",        mass: "40.078",     group: "alkaline earth metals"},
  {symbol: "Sc", 	name: "Scandium",       mass: "44.956",     group: "transition metals"},
  {symbol: "Ti", 	name: "Titanium",       mass: "47.867",     group: "transition metals"},
  {symbol: "V", 	name: "Vanadium",       mass: "50.942",     group: "transition metals"},
  {symbol: "Cr", 	name: "Chromium",       mass: "51.996",     group: "transition metals"},
  {symbol: "Mn", 	name: "Manganese",      mass: "54.938",     group: "transition metals"},
  {symbol: "Fe", 	name: "Iron",           mass: "55.845",     group: "transition metals"},
  {symbol: "Co", 	name: "Cobalt",         mass: "58.933",     group: "transition metals"},
  {symbol: "Ni", 	name: "Nickel",         mass: "58.693",     group: "transition metals"},
  {symbol: "Cu", 	name: "Copper",         mass: "63.546",     group: "transition metals"},
  {symbol: "Zn", 	name: "Zinc",           mass: "65.38",      group: "transition metals"},
  {symbol: "Ga", 	name: "Gallium",        mass: "69.732",     group: "other metals"},
  {symbol: "Ge", 	name: "Germanium",      mass: "72.631",     group: "metalloids"},
  {symbol: "As", 	name: "Arsenic",        mass: "74.922",     group: "metalloids"},
  {symbol: "Se", 	name: "Selenium",       mass: "78.971",     group: "nonmetals"},
  {symbol: "Br", 	name: "Bromine",        mass: "79.904",     group: "halogens"},
  {symbol: "Kr", 	name: "Krypton",        mass: "83.798",     group: "noble gases"},
  {symbol: "Rb", 	name: "Rubidium",       mass: "85.468",     group: "alkali metals"},
  {symbol: "Sr", 	name: "Strontium",      mass: "87.62",      group: "alkaline earth metals"},
  {symbol: "Y", 	name: "Yttrium",        mass: "88.906",     group: "transition metals"},
  {symbol: "Zr", 	name: "Zirconium",      mass: "91.224",     group: "transition metals"},
  {symbol: "Nb", 	name: "Niobium",        mass: "92.906",     group: "transition metals"},
  {symbol: "Mo", 	name: "Molybdenum",     mass: "95.95",      group: "transition metals"},
  {symbol: "Tc", 	name: "Technetium",     mass: "98.907",     group: "transition metals"},
  {symbol: "Ru", 	name: "Ruthenium",      mass: "101.07",     group: "transition metals"},
  {symbol: "Rh", 	name: "Rhodium",        mass: "102.906",    group: "transition metals"},
  {symbol: "Pd", 	name: "Palladium",      mass: "106.42",     group: "transition metals"},
  {symbol: "Ag", 	name: "Silver",         mass: "107.868",    group: "transition metals"},
  {symbol: "Cd", 	name: "Cadmium",        mass: "112.414",    group: "transition metals"},
  {symbol: "In", 	name: "Indium",         mass: "114.818",    group: "other metals"},
  {symbol: "Sn", 	name: "Tin",            mass: "118.711",    group: "other metals"},
  {symbol: "Sb", 	name: "Antimony",       mass: "121.760",    group: "metalloids"},
  {symbol: "Te", 	name: "Tellurium",      mass: "127.6",      group: "metalloids"},
  {symbol: "I", 	name: "Iodine",         mass: "126.904",    group: "halogens"},
  {symbol: "Xe", 	name: "Xenon",          mass: "131.29",     group: "noble gases"},
  {symbol: "Cs", 	name: "Caesium",        mass: "132.905",    group: "alkali metals"},
  {symbol: "Ba", 	name: "Barium",         mass: "137.327",    group: "alkaline earth metals"},
  {symbol: "La", 	name: "Lanthanum",      mass: "138.906",    group: "rare earth metals"},
  {symbol: "Ce", 	name: "Cerium",         mass: "140.115",    group: "rare earth metals"},
  {symbol: "Pr", 	name: "Praseodymium",   mass: "140.908",    group: "rare earth metals"},
  {symbol: "Nd", 	name: "Neodymium",      mass: "144.24",     group: "rare earth metals"},
  {symbol: "Pm", 	name: "Promethium",     mass: "144.913",    group: "rare earth metals"},
  {symbol: "Sm", 	name: "Samarium",       mass: "150.36",     group: "rare earth metals"},
  {symbol: "Eu", 	name: "Europium",       mass: "161.966",    group: "rare earth metals"},
  {symbol: "Gd", 	name: "Gadolinium",     mass: "157.25",     group: "rare earth metals"},
  {symbol: "Tb", 	name: "Terbium",        mass: "158.925",    group: "rare earth metals"},
  {symbol: "Dy", 	name: "Dysprosium",     mass: "162.50",     group: "rare earth metals"},
  {symbol: "Ho", 	name: "Holmium",        mass: "164.930",    group: "rare earth metals"},
  {symbol: "Er", 	name: "Erbium",         mass: "167.26",     group: "rare earth metals"},
  {symbol: "Tm", 	name: "Thullium",       mass: "168.934",    group: "rare earth metals"},
  {symbol: "Yb", 	name: "Ytterbium",      mass: "173.04",     group: "rare earth metals"},
  {symbol: "Lu", 	name: "Lutetium",       mass: "174.967",    group: "rare earth metals"},
  {symbol: "Hf", 	name: "Hafnium",        mass: "178.49",     group: "transition metals"},
  {symbol: "Ta", 	name: "Tantalum",       mass: "180.948",    group: "transition metals"},
  {symbol: "W", 	name: "Tungsten",       mass: "183.85",     group: "transition metals"},
  {symbol: "Re", 	name: "Rhenium",        mass: "168.207",    group: "transition metals"},
  {symbol: "Os", 	name: "Osmium",         mass: "190.23",     group: "transition metals"},
  {symbol: "Ir", 	name: "Iridium",        mass: "192.22",     group: "transition metals"},
  {symbol: "Pt", 	name: "Platinum",       mass: "195.08",     group: "transition metals"},
  {symbol: "Au", 	name: "Gold",           mass: "196.967",    group: "transition metals"},
  {symbol: "Hg", 	name: "Mercury",        mass: "200.59",     group: "transition metals"},
  {symbol: "Tl", 	name: "Thallium",       mass: "204.383",    group: "other metals"},
  {symbol: "Pb", 	name: "Lead",           mass: "207.2",      group: "other metals"},
  {symbol: "Bi", 	name: "Bismuth",        mass: "208.980",    group: "other metals"},
  {symbol: "Po", 	name: "Polonium",       mass: "[208.982]",  group: "other metals"},
  {symbol: "At", 	name: "Astatine",       mass: "209.987",    group: "halogens"},
  {symbol: "Rn", 	name: "Radon",          mass: "222.018",    group: "noble gases"},
  {symbol: "Fr", 	name: "Francium",       mass: "223.020",    group: "alkali metals"},
  {symbol: "Ra", 	name: "Radium",         mass: "226.025",    group: "alkaline earth metals"},
  {symbol: "Ac", 	name: "Actinium",       mass: "227.028",    group: "rare earth metals"},
  {symbol: "Th", 	name: "Thorium",        mass: "232.038",    group: "rare earth metals"},
  {symbol: "Pa", 	name: "Protactinium",   mass: "231.036",    group: "rare earth metals"},
  {symbol: "U", 	name: "Uranium",        mass: "238.029",    group: "rare earth metals"},
  {symbol: "Np", 	name: "Neptunium",      mass: "237.048",    group: "rare earth metals"},
  {symbol: "Pu", 	name: "Plutonium",      mass: "244.064",    group: "rare earth metals"},
  {symbol: "Am", 	name: "Americium",      mass: "243.061",    group: "rare earth metals"},
  {symbol: "Cm", 	name: "Curium",         mass: "247.070",    group: "rare earth metals"},
  {symbol: "Bk", 	name: "Berkelium",      mass: "247.070",    group: "rare earth metals"},
  {symbol: "Cf", 	name: "Californium",    mass: "251.080",    group: "rare earth metals"},
  {symbol: "Es", 	name: "Einsteinium",    mass: "[254]",      group: "rare earth metals"},
  {symbol: "Fm", 	name: "Fermium",        mass: "257.095",    group: "rare earth metals"},
  {symbol: "Md", 	name: "Mendelevium",    mass: "258.1",      group: "rare earth metals"},
  {symbol: "No", 	name: "Nobelium",       mass: "259.101",    group: "rare earth metals"},
  {symbol: "Lr", 	name: "Lawrencium",     mass: "[262]",      group: "rare earth metals"},
  {symbol: "Rf", 	name: "Rutherfordium",  mass: "[261]",      group: "transition metals"},
  {symbol: "Db", 	name: "Dubnium",        mass: "[262]",      group: "transition metals"},
  {symbol: "Sg", 	name: "Seaborgium",     mass: "[266]",      group: "transition metals"},
  {symbol: "Bh", 	name: "Bohrium",        mass: "[264]",      group: "transition metals"},
  {symbol: "Hs", 	name: "Hassium",        mass: "[269]",      group: "transition metals"},
  {symbol: "Mt", 	name: "Meitnerium",     mass: "[268]",      group: "unknown"},
  {symbol: "Ds", 	name: "Darmstadtium",   mass: "[269]",      group: "unknown"},
  {symbol: "Rg", 	name: "Roentgenium",    mass: "[272]",      group: "unknown"},
  {symbol: "Cn", 	name: "Copernicium",    mass: "[277]",      group: "transition metals"},
  {symbol: "Nh", 	name: "Nihonium",       mass: "?",          group: "unknown"},
  {symbol: "Fl", 	name: "Flerovium",      mass: "[289]",      group: "unknown"},
  {symbol: "Mc", 	name: "Moscovium",      mass: "?",          group: "unknown"},
  {symbol: "Lv", 	name: "Livermorium",    mass: "[298]",      group: "unknown"},
  {symbol: "Ts", 	name: "Tennessine",     mass: "?",          group: "unknown"},
  {symbol: "Og", 	name: "Oganesson",      mass: "?",          group: "unknown"}
]

var boxcolor = {
	"alkali metals":         ["#62a73b", "#72bf44"],
	"alkaline earth metals": ["#009353", "#00a65d"],
	"rare earth metals":     ["#512480", "#5c2d91"],
	"transition metals":     ["#ccbe00", "#e3d200"],
	"other metals":          ["#1c3687", "#21409a"],
	"metalloids":            ["#d99116", "#faa61a"],
	"nonmetals":             ["#00599d", "#0066b3"],
	"halogens":              ["#ce181e", "#ed1c24"],
	"noble gases":           ["#8f187c", "#a3238e"],
	"unknown":               ["#7f8c8d", "#bdc3c7"]
};

var state = ["off", "on"];

//Element
var eh = document.getElementById("hour-element");
var em = document.getElementById("minute-element");
var es = document.getElementById("second-element");
var ep = document.getElementById("period-element");
//Element symbol
var sh = document.getElementById("hour-element-symbol");
var sm = document.getElementById("minute-element-symbol");
var ss = document.getElementById("second-element-symbol");
var sp = document.getElementById("period-element-symbol");
//Element atomic number
var ah = document.getElementById("hour-atomic-number");
var am = document.getElementById("minute-atomic-number");
var as = document.getElementById("second-atomic-number");
var ap = document.getElementById("period-atomic-number");
//Element name
var nh = document.getElementById("hour-element-name");
var nm = document.getElementById("minute-element-name");
var ns = document.getElementById("second-element-name");
var np = document.getElementById("period-element-name");
//Element atomic mass
var mh = document.getElementById("hour-element-mass");
var mm = document.getElementById("minute-element-mass");
var ms = document.getElementById("second-element-mass");
var mp = document.getElementById("period-element-mass");

//Setting values
var display_24_hour = false;
var display_element_name = false;
var display_element_mass = false;
var display_element_group = true;

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
var current_hour;
var current_minute;
var current_second;
var post;
//Displays
var clock = document.getElementById("clock");
var table = document.getElementById("table");

var table_elements = [null];//Table elements
var display = true;//Current display
var default_color = "transition metals";//Default clock color

function update(repeat) {
	var csymbol;
	var catomic;
  var current_date = new Date()

  current_hour = current_date.getHours();
  current_minute = current_date.getMinutes();
  current_second = current_date.getSeconds();

  if (display) {
		if (!display_24_hour) {
			ep.style.visibility = "visible";
			if (current_hour > 12) {
				current_hour -= 12;
				post = true;
			} else {
				post = false;
				if (current_hour === 0) {
					current_hour = 12;
				}
			}

			ap.innerHTML = 95 - 34 * Number(post);
			sp.innerHTML = elements[95 - 34 * Number(post)]["symbol"];
			np.innerHTML = elements[95 - 34 * Number(post)]["name"];
			mp.innerHTML = elements[95 - 34 * Number(post)]["mass"];

		} else {
			ep.style.visibility = "hidden";
		}
		sh.innerHTML = elements[current_hour]["symbol"];
		sm.innerHTML = elements[current_minute]["symbol"];
		ss.innerHTML = elements[current_second]["symbol"];
		ah.innerHTML = current_hour;
		am.innerHTML = current_minute;
		as.innerHTML = current_second;

		if (display_element_name) {
			nh.innerHTML = elements[current_hour]["name"];
			nm.innerHTML = elements[current_minute]["name"];
			ns.innerHTML = elements[current_second]["name"];
			showElements([nh, nm, ns]);
			display_24_hour ? np.style.visibility = "hidden" : np.style.visibility = "visible";
		} else {
			hideElements([nh, nm, ns, np]);
		}

		if (display_element_mass) {
			mh.innerHTML = elements[current_hour]["mass"];
			mm.innerHTML = elements[current_minute]["mass"];
			ms.innerHTML = elements[current_second]["mass"];
			showElements([mh, mm, ms])
			display_24_hour ? mp.style.visibility = "hidden" : mp.style.visibility = "visible";
		} else {
			hideElements([mh, mm, ms, mp]);
		}

		if (display_element_group) {
			groupUpdate(elements[current_hour]["group"], eh);
			groupUpdate(elements[current_minute]["group"], em);
			groupUpdate(elements[current_second]["group"], es);
			groupUpdate("rare earth metals", ep);
		} else {
			groupDefault(eh);
			groupDefault(em);
			groupDefault(es);
			groupDefault(ep);
		}
	} else {
		for (var e = 1; e <= 95; e++) {
			var ce = table_elements[e].childNodes;
			table_elements[e].style.borderColor = "#304457";
			table_elements[e].style.backgroundColor = "#34495e";
			ce[0].style.color = "#2c3e50";
			ce[1].style.color = "#2c3e50";
			if (e === 59) {
				e = 60
			} else if (e === 61) {
				e = 94
			}

		}

		if (!display_24_hour) {
			if (current_hour > 12) {
				current_hour -= 12;
				post = true;
				table_elements[61].style.borderColor = "#ce181e";
				table_elements[61].style.backgroundColor = "#ed1c24";
			} else {
				post = false;
				if (current_hour === 0) {
					current_hour = 12;
				}
				table_elements[95].style.borderColor = "#ce181e";
				table_elements[95].style.backgroundColor = "#ed1c24";
			}
		}

		if (current_hour > 0) {
			table_elements[current_hour].style.borderColor = "#00599d";
			table_elements[current_hour].style.backgroundColor = "#0066b3";
		}

		if (current_minute > 0) {
			if (current_minute !== current_hour) {
				table_elements[current_minute].style.borderColor = "#009353";
				table_elements[current_minute].style.backgroundColor = "#00a65d";
			} else {
				csymbol = table_elements[current_minute].childNodes[1];
				csymbol.style.color = "#009353";
			}
		}

		if (current_second > 0) {
			if (current_second !== current_hour && current_second !== current_minute) {
				table_elements[current_second].style.borderColor = "#ccbe00";
				table_elements[current_second].style.backgroundColor = "#e3d200";
			} else if (current_second === current_hour && current_second === current_minute) {
				catomic = table_elements[current_second].childNodes[0];
				catomic.style.color = "#ccbe00";
			} else {
				csymbol = table_elements[current_second].childNodes[1];
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
	box.style.backgroundColor = boxcolor[default_color][1];
	box.style.borderColor = boxcolor[default_color][0];
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

// Opens the wikipedia page for the selected element
function openWikiPage(selected_element) {
  var name = (selected_element === 0) ? "Periodic_table" : elements[selected_element]['name'];
  window.open(wiki + name);
}

function generatePeriodicTable() {
  var table_body = document.getElementById("table-body");

  // Encoding to easily store which squares of each row should be visible or invisible
  // Each row encoded as [A B C D]
  // Each row consists of, from left to right, A visible squares, followed by B invisible squares, then C visible, then D invisible
  rows = [
    [1, 16, 1, 0],
    [2, 10, 6, 0],
    [2, 10, 6, 0],
    [18, 0, 0, 0],
    [18, 0, 0, 0],
    [2, 1, 15, 0],
    [2, 1, 15, 0],
    [0, 0, 0, 18],
    [0, 2, 15, 1],
    [0, 2, 15, 1],
  ]

  current_element = 1;

  for (var current_row = 0; current_row < rows.length; current_row++) {
    var table_row = document.createElement("tr");

    for (var current_column = 0; current_column < 18; current_column++) {

      var table_data = document.createElement("td");
      var table_data_container = document.createElement("div");
      var table_data_atomic = document.createElement("p");
      var table_data_symbol = document.createElement("p");

      table_data_container.classList.add("telement");
      table_data_atomic.classList.add("tatomic");
      table_data_symbol.classList.add("tsymbol");

      if (current_column < rows[current_row][0] || (current_column >= rows[current_row][0] + rows[current_row][1] && current_column < 18 - rows[current_row][3])) {
        table_data_container.classList.add("show");
        table_data_container.id = "e" + String(current_element);
        table_data_atomic.innerHTML = String(current_element);
        table_data_symbol.innerHTML = elements[current_element]["symbol"];
        table_data_container.onclick = function() {openWikiPage(this.childNodes[0].innerHTML)};
        table_data_container.title = elements[current_element]["name"];
        table_elements.push(table_data_container);

        current_element++;
      } else {
        table_data_container.classList.add("hide");
      }

      table_data_container.appendChild(table_data_atomic);
      table_data_container.appendChild(table_data_symbol);
      table_data.appendChild(table_data_container);
      table_row.appendChild(table_data);
    }

    table_body.appendChild(table_row);

  }

}

generatePeriodicTable();

update(true);
