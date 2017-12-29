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

// First color is a darker box border color, second color is a lighter box background color
var box_colors = {
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

// Default clock element box color
var default_color = "transition metals";

var state = ["off", "on"];

// Clock display elements
var hour_element = document.getElementById("hour-element");
var minute_element = document.getElementById("minute-element");
var second_element = document.getElementById("second-element");
var period_element = document.getElementById("period-element");

// Clock display element symbols
var hour_element_symbol = document.getElementById("hour-element-symbol");
var minute_element_symbol = document.getElementById("minute-element-symbol");
var second_element_symbol = document.getElementById("second-element-symbol");
var period_element_symbol = document.getElementById("period-element-symbol");

// Clock display element atomic numbers
var hour_atomic_number = document.getElementById("hour-atomic-number");
var minute_atomic_number = document.getElementById("minute-atomic-number");
var second_atomic_number = document.getElementById("second-atomic-number");
var period_atomic_number = document.getElementById("period-atomic-number");

// Clock display element names
var hour_element_name = document.getElementById("hour-element-name");
var minute_element_name = document.getElementById("minute-element-name");
var second_element_name = document.getElementById("second-element-name");
var period_element_name = document.getElementById("period-element-name");

// Clock display element masses
var hour_element_mass = document.getElementById("hour-element-mass");
var minute_element_mass = document.getElementById("minute-element-mass");
var second_element_mass = document.getElementById("second-element-mass");
var period_element_mass = document.getElementById("period-element-mass");

// Display settings
var display_24_hour = false;
var display_element_name = false;
var display_element_mass = false;
var display_element_group = true;

// Buttons to toggle display settings
var button_24_hour = document.getElementById("button-24-hour");
var button_element_name = document.getElementById("button-element-name");
var button_element_mass = document.getElementById("button-element-mass");
var button_element_group = document.getElementById("button-element-group");

// Display information
var about_button = document.getElementById("about-button");
var legend_button = document.getElementById("legend-button");
var about_box = document.getElementById("about-box");

// Legend boxes for element groups
var legend_alkali = document.getElementById("legend-alkali");
var legend_alkaline = document.getElementById("legend-alkaline");
var legend_rare = document.getElementById("legend-rare");
var legend_transition = document.getElementById("legend-transition");
var legend_other = document.getElementById("legend-other");
var legend_metalloid = document.getElementById("legend-metalloid");
var legend_nonmetal = document.getElementById("legend-nonmetal");
var legend_halogen = document.getElementById("legend-halogen");
var legend_noble = document.getElementById("legend-noble");
var legend_groups = [legend_alkali, legend_alkaline, legend_rare, legend_transition, legend_other, legend_metalloid, legend_nonmetal, legend_halogen, legend_noble];

//Legend boxes for time units
var legend_hour = document.getElementById("legend-hour");
var legend_minute = document.getElementById("legend-minute");
var legend_second = document.getElementById("legend-second");
var legend_period = document.getElementById("legend-period");

// Current time
var current_hour;
var current_minute;
var current_second;
var post_meridiem;

// Displays
var clock = document.getElementById("clock");
var time_table = document.getElementById("time-table");

// Array of all element squares in the time table display
var table_elements = [null];
// Display clock if true, display time table if false
var display_clock = true;



function updateClockDisplay() {

  if (!display_24_hour) {
    period_element.style.visibility = "visible";

    if (current_hour > 12) {
      current_hour -= 12;
      post_meridiem = true;
    } else {
      post_meridiem = false;
      if (current_hour === 0) {
        current_hour = 12;
      }
    }

    var current_period_element = 95 - 34 * Number(post_meridiem);
    period_atomic_number.innerHTML = current_period_element;
    period_element_symbol.innerHTML = elements[current_period_element]["symbol"];
    period_element_name.innerHTML = elements[current_period_element]["name"];
    period_element_mass.innerHTML = elements[current_period_element]["mass"];
  } else {
    period_element.style.visibility = "hidden";
  }

  // Display the corresponding element symbols and atomic nummbers for the current time
  hour_element_symbol.innerHTML = elements[current_hour]["symbol"];
  minute_element_symbol.innerHTML = elements[current_minute]["symbol"];
  second_element_symbol.innerHTML = elements[current_second]["symbol"];
  hour_atomic_number.innerHTML = current_hour;
  minute_atomic_number.innerHTML = current_minute;
  second_atomic_number.innerHTML = current_second;

  // Display the corresponding element names for the current time
  if (display_element_name) {
    hour_element_name.innerHTML = elements[current_hour]["name"];
    minute_element_name.innerHTML = elements[current_minute]["name"];
    second_element_name.innerHTML = elements[current_second]["name"];
    showElements([hour_element_name, minute_element_name, second_element_name]);
    period_element_name.style.visibility = (display_24_hour ? "hidden" : "visible");
  } else {
    hideElements([hour_element_name, minute_element_name, second_element_name, period_element_name]);
  }

  // Display the corresponding element masses for the current time
  if (display_element_mass) {
    hour_element_mass.innerHTML = elements[current_hour]["mass"];
    minute_element_mass.innerHTML = elements[current_minute]["mass"];
    second_element_mass.innerHTML = elements[current_second]["mass"];
    showElements([hour_element_mass, minute_element_mass, second_element_mass]);
    period_element_mass.style.visibility = (display_24_hour ? "hidden" : "visible");
  } else {
    hideElements([hour_element_mass, minute_element_mass, second_element_mass, period_element_mass]);
  }

  // Display the corresponding element groups for the current time
  if (display_element_group) {

    updateGroup(elements[current_hour]["group"], hour_element);
    updateGroup(elements[current_minute]["group"], minute_element);
    updateGroup(elements[current_second]["group"], second_element);
    updateGroup("rare earth metals", period_element);

  } else {

    defaultGroup(hour_element);
    defaultGroup(minute_element);
    defaultGroup(second_element);
    defaultGroup(period_element);

  }

}

function updateTimeTableDisplay() {
  var current_element_symbol;
  var current_atomic_number;

  // Set all table elements colors to the default colors
  for (var e = 1; e <= 95; e++) {
    var current_table_element = table_elements[e];
    current_table_element.style.borderColor = "#304457";
    current_table_element.style.backgroundColor = "#34495e";
    current_table_element.childNodes[0].style.color = "#2c3e50";
    current_table_element.childNodes[1].style.color = "#2c3e50";
    if (e === 59) {
      e = 60;
    } else if (e === 61) {
      e = 94;
    }

  }

  if (!display_24_hour) {

    if (current_hour > 12) {

      current_hour -= 12;
      post_meridiem = true;
      table_elements[61].style.borderColor = "#ce181e";
      table_elements[61].style.backgroundColor = "#ed1c24";

    } else {

      post_meridiem = false;

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
      current_element_symbol = table_elements[current_minute].childNodes[1];
      current_element_symbol.style.color = "#009353";
    }
  }

  if (current_second > 0) {
    if (current_second !== current_hour && current_second !== current_minute) {
      table_elements[current_second].style.borderColor = "#ccbe00";
      table_elements[current_second].style.backgroundColor = "#e3d200";
    } else if (current_second === current_hour && current_second === current_minute) {
      current_atomic_number = table_elements[current_second].childNodes[0];
      current_atomic_number.style.color = "#ccbe00";
    } else {
      current_element_symbol = table_elements[current_second].childNodes[1];
      current_element_symbol.style.color = "#ccbe00";
    }
  }
}


// Updates the time displayed by the clock and time table displays
function updateTime(repeat) {
  var current_date = new Date()

  current_hour = current_date.getHours();
  current_minute = current_date.getMinutes();
  current_second = current_date.getSeconds();

  if (display_clock) {

    updateClockDisplay();

	} else {

    updateTimeTableDisplay();

	}

  // Repeats the clock update every second
	if (repeat) setTimeout(updateTime, 1000, true);
}

// Updates a display box's color to correspond to the current element's group
function updateGroup(element_group, box) {
	box.style.backgroundColor = box_colors[element_group][1];
	box.style.borderColor = box_colors[element_group][0];
}

// Sets a box's color to the default color
function defaultGroup(box) {
	box.style.backgroundColor = box_colors[default_color][1];
	box.style.borderColor = box_colors[default_color][0];
}

// Makes all elements in the list visible
function showElements(change_list) {
	var element;
	for (var i = 0; i < change_list.length; i++) {
		element = change_list[i];
		element.style.visibility = "visible";
	}
}

// Makes all elements in the list invisible
function hideElements(change_list) {
	var element;
	for (var i = 0; i < change_list.length; i++) {
		element = change_list[i];
		element.style.visibility = "hidden";
	}
}

// Switches between clock and time table display
function switchDisplay(button_text) {
	display_clock = !display_clock;

  if (display_clock) {

  	button_text.innerHTML = "Table";
		showElements([clock, button_element_name, button_element_mass, button_element_group, about_button]);
		hideElements([time_table, legend_button]);

  } else {

  	button_text.innerHTML = "Clock";
		showElements([time_table, legend_button]);
		hideElements([clock, period_element, hour_element_name, minute_element_name, second_element_name, period_element_name, hour_element_mass, minute_element_mass, second_element_mass, period_element_mass, button_element_name, button_element_mass, button_element_group, about_button, about_box]);

  }

  updateTime(false);
}

// Opens the wikipedia page for the selected element
function openWikiPage(selected_element) {
  var name = (selected_element === 0) ? "Periodic_table" : elements[selected_element]['name'];
  window.open(wiki + name);
}

// Generates the periodic table for the time table display when the page first loads
function generatePeriodicTable() {
  var time_table_body = document.getElementById("time-table-body");

  // Encoding to easily store which squares of each row should be visible or invisible
  // Each row encoded as [A B C D]
  // Each row consists of, from left to right, A visible squares, followed by B invisible squares, then C visible, then D invisible
  var rows = [
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

  var current_element = 1;

  // Create each table row
  for (var current_row = 0; current_row < rows.length; current_row++) {
    var table_row = document.createElement("tr");

    // Create each square of the current row, using the row encoding to determine if it is visible or invisible
    for (var current_column = 0; current_column < 18; current_column++) {

      // Create new HTML elements
      var table_data = document.createElement("td");
      var table_data_container = document.createElement("div");
      var table_data_atomic = document.createElement("p");
      var table_data_symbol = document.createElement("p");

      table_data_container.classList.add("table-element");
      table_data_atomic.classList.add("table-atomic-number");
      table_data_symbol.classList.add("table-element-symbol");

      // If the current square should be visible, according to the row encoding
      if (current_column < rows[current_row][0] || (current_column >= rows[current_row][0] + rows[current_row][1] && current_column < 18 - rows[current_row][3])) {

        // Makes square visible and fills in element symbol, atomic number, name, and click event for element wiki page
        table_data_container.classList.add("show");
        table_data_atomic.innerHTML = String(current_element);
        table_data_symbol.innerHTML = elements[current_element]["symbol"];
        table_data_container.onclick = function() {openWikiPage(this.childNodes[0].innerHTML)};
        table_data_container.title = elements[current_element]["name"];
        table_elements.push(table_data_container);

        current_element++;
      } else {
        // The current square shoud be invisible
        table_data_container.classList.add("hide");
      }

      // Append newly created elements to the current row
      table_data_container.appendChild(table_data_atomic);
      table_data_container.appendChild(table_data_symbol);
      table_data.appendChild(table_data_container);
      table_row.appendChild(table_data);
    }

    // Append row to the table body
    time_table_body.appendChild(table_row);

  }
}

// Toggle button between on and off state
function toggleButton(button) {
  if (button.classList.contains("on")) {
    button.classList.remove("on");
    button.classList.add("off");
  } else {
    button.classList.remove("off");
    button.classList.add("on");
  }
}

function toggle24Hour(button) {
  display_24_hour = !display_24_hour;
  toggleButton(button);
  updateTime(false);
}

function toggleElementName(button) {
  display_element_name = !display_element_name;
  toggleButton(button);
  updateTime(false);
}

function toggleElementMass(button) {
  display_element_mass = !display_element_mass;
  toggleButton(button);
  updateTime(false);
}

function toggleElementGroup(button) {
  display_element_group = !display_element_group;
  toggleButton(button);
  updateTime(false);
}


generatePeriodicTable();
updateTime(true);
