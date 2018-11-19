$(document).ready(function () {
	$.getJSON("assets/documentation/molang_math.json", function (data) {
		var math_data = '';
		$.each(data, function (key, value) {
			math_data += '<tr>';
			math_data += '<td>' + value.name + '</td>';
			math_data += '<td>' + value.description + '</td>';
			math_data += '<td>' + value.info + '</td>';
			math_data += '</tr>';
		});
		$('#math_table').append(math_data);
	});
});