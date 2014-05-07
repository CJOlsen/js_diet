// Author: Christopher Olsen
// Copyright: 2014

// Data and storage **********************************************************

var nutrients = [["elements", ["element1", "element2", "element3"]],
		 ["vitamins", ["vitamin1", "vitamin2", "vitamin3"]]]
// yes this is a global, yes this could probably do with an interface in case
// the implementation changes.  which it might.

// var save_data = function () {
//    
// };
//
// var load_data = function () {
//    
// };
//
// // food datatype.....
// var food = {};


// build UI ******************************************************************

// this section is broken out the way it is so which nutrients are displayed can
// be changed later

var make_nutrient_label = function (nutr) {
    var new_label = document.createElement("label");
    new_label.innerHTML = nutr;
    return new_label;
};

var make_nutrient_val_box = function (nutr) {
    var new_text = document.createElement("input");
    new_text.type = "text";
    new_text.id = nutr + "_input_box"
    return new_text;
};

var make_nutrient_min_box = function (nutr) {
    
};

var make_nutrient_max_box = function (nutr) {
    
};


var make_nutrient_row = function (nutr, row_type) {
    if (row_type == "input") {
	// display each nutrient with a text box for data entry
	var new_li = document.createElement("li");
	new_li.id = nutr + "_val_row";
	new_li.className = "nutrient_val_row"
	new_li.appendChild(make_nutrient_label(nutr));
	new_li.appendChild(make_nutrient_val_box(nutr));
	return new_li;
    } else if (row_type == "minmax") {
	// display each nutrient with 3 text boxes: a min, max and actual value
    } else {
	// assume that all that was wanted was the simplest display
	var new_li = document.createElement("li");
	new_li.id = nutr + "_row";
	new_li.className = "nutrient_row"
	new_li.innerHTML = nutr;
	return new_li;
    }
};

var make_group_heading = function (group_name, row_type) {
    // for the future, this is where the title can be turned into a button
    var new_div = document.createElement("div");
    new_div.className = "group_heading";
    new_div.innerHTML = group_name;
    return new_div;
}

var make_nutrient_group = function (group_name, group_array, row_type) {
    var inner_div = document.createElement("div");
    inner_div.appendChild( make_group_heading(group_name) );
    
    var inner_ul = document.createElement("ul");
    inner_ul.id = group_name + "_group";
    inner_ul.className = "nutrient_group";
    var inner_ul_
    for (var i=0; i < group_array.length; i++) {
	inner_ul.appendChild( make_nutrient_row(group_array[i], row_type));
    }
    
    inner_div.appendChild(inner_ul);
    return inner_div;
};

var make_nutrient_list = function (row_type) { 
    outer_ul = document.getElementById("nutrients_list");
    for (var i=0; i < nutrients.length; i++) {
	outer_ul.appendChild( make_nutrient_group(nutrients[i][0],
						  nutrients[i][1],
						 row_type));
    }
};

var display_list_options = function (list_type) {
    if (list_type == "nutrients") {
	document.getElementById("list_options").innerHTML = "";
    } else if (list_type == "input") {
	// these are the options displayed for the "new" option on the nav-bar 
	var options = document.getElementById("list_options");
	options.innerHTML= "";

	var save_button = document.createElement("button");
	save_button.innerHTML = 'Save';
	save_button.onclick = function () { new_save_clicked() };
	options.appendChild(save_button);

	var clear_button = document.createElement("button");
	clear_button.innerHTML = 'Clear';
	clear_button.onclick = function () { new_clear_clicked() };
	options.appendChild(clear_button);
    } else if (list_type == "compare") {
	document.getElementById("list_options").innerHTML = "";
    }
}


// Program Logic *************************************************************

var nutrient_nav_clicked = function (e) {
    // display nutrient list, clear list options
    outer_ul = document.getElementById("nutrients_list");
    outer_ul.innerHTML = "";
    make_nutrient_list("list");
    display_list_options("nutrients");
}

var new_nav_clicked = function (e) {
    // display add new food page
    outer_ul = document.getElementById("nutrients_list");
    outer_ul.innerHTML = "";
    make_nutrient_list("input");
    display_list_options("input");

    // var new_options = document.getElementById("list_options");
    // new_options.innerHTML = "";
    
}

var view_nav_clicked = function (e) {
    // display food comparison page
    outer_ul = document.getElementById("nutrients_list");
    outer_ul.innerHTML = "";
    display_list_options("compare");
}


var new_save_clicked = function () {
    
}

var new_clear_clicked = function () {
    
}
