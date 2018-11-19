$(document).ready(function () {
	$.getJSON("https://raw.githubusercontent.com/sprintermax/MCDocumentation/master/assets/documentation/behavior_entity_events.json", function (data) {
		var event_data = '';
		$.each(data, function (key, value) {
			event_data += '<tr>';
			event_data += '<td>' + value.name + '</td>';
			event_data += '<td>' + value.description + '</td>';
			event_data += '<td>' + value.info + '</td>';
			event_data += '</tr>';
		});
		$('#event_table').append(event_data);
	});
});