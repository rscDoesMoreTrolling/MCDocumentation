$(document).ready(function () {
	$.getJSON("assets/documentation/entity/behavior_entity_components.json", function (data) {
		var component_data = '';
		$.each(data, function (key, value) {
			component_data += '<tr>';
			component_data += '<td>' + value.name + '</td>';
			component_data += '<td>' + value.description + '</td>';
			component_data += '<td>' + value.info + '</td>';
			component_data += '</tr>';
		});
		$('#component_table').append(component_data);
	});
});