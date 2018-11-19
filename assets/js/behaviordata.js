$(document).ready(function () {
	$.getJSON("assets/documentation/behavior_entity_behaviors.json", function (data) {
		var behavior_data = '';
		$.each(data, function (key, value) {
			behavior_data += '<tr>';
			behavior_data += '<td>' + value.name + '</td>';
			behavior_data += '<td>' + value.description + '</td>';
			behavior_data += '<td>' + value.info + '</td>';
			behavior_data += '</tr>';
		});
		$('#behavior_table').append(behavior_data);
	});
});