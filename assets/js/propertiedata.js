$(document).ready(function () {
	$.getJSON("https://raw.githubusercontent.com/sprintermax/MCDocumentation/master/assets/documentation/behavior_entity_properties.json", function (data) {
		var propertie_data = '';
		$.each(data, function (key, value) {
			propertie_data += '<tr>';
			propertie_data += '<td>' + value.name + '</td>';
			propertie_data += '<td>' + value.description + '</td>';
			propertie_data += '<td>' + value.info + '</td>';
			propertie_data += '</tr>';
		});
		$('#propertie_table').append(propertie_data);
	});
});