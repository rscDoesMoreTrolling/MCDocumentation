$(document).ready(function () {
	$.getJSON("assets/documentation/molang_query.json", function (data) {
		var query_data = '';
		$.each(data, function (key, value) {
			query_data += '<tr>';
			query_data += '<td>' + value.name + '</td>';
			query_data += '<td>' + value.description + '</td>';
			query_data += '<td>' + value.info + '</td>';
			query_data += '</tr>';
		});
		$('#query_table').append(query_data);
	});
});