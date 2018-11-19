$(document).ready(function () {
	$.getJSON("assets/documentation/molang_global.json", function (data) {
		var global_data = '';
		$.each(data, function (key, value) {
			global_data += '<tr>';
			global_data += '<td>' + value.name + '</td>';
			global_data += '<td>' + value.description + '</td>';
			global_data += '<td>' + value.info + '</td>';
			global_data += '</tr>';
		});
		$('#global_table').append(global_data);
	});
});