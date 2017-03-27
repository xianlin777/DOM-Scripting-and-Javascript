function displayAbbrevations() {
	if(!document.createTextNode) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;

	var abbrevations = document.getElementsByTagName("abbr");
	if(abbrevations.length < 1) return false;
	var defs = new Array();

	for(var i = 0; i < abbrevations.length; i++) {
		var current_abbr = abbrevations[i];
		var defination = current_abbr.getAttribute('title');
		var key = current_abbr.lastChild.nodeValue;
		defs[key]=defination;
	}

	var dlist = document.createElement("dl");
	for(key in defs) {
		var defination = defs[key];
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);

		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(defination);
		ddesc.appendChild(ddesc_text);

		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);

	}
	var header = document.createElement("h2");
	var header_text = document.createTextNode("abbrevations");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(dlist);


}
addLoadEvent(displayAbbrevations);