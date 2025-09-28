function filterTable() {
    var input = document.getElementById("searchInput").value.toUpperCase();
    var table = document.getElementById("mahasiswaTable");
    var tr = table.getElementsByTagName("tr");

    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            var txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(input) > -1) {
                tr[i].style.display = "";
                if (i + 1 < tr.length && tr[i + 1].classList.contains('collapse')) {
                    tr[i + 1].style.display = "";
                }
            } else {
                tr[i].style.display = "none";
                if (i + 1 < tr.length && tr[i + 1].classList.contains('collapse')) {
                    tr[i + 1].style.display = "none";
                    tr[i + 1].classList.remove('show');
                }
            }
        }
    }
}

document.getElementById("searchInput").addEventListener("keyup", filterTable);

var detailButtons = document.querySelectorAll('[data-bs-toggle="collapse"]');
detailButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        var targetId = this.getAttribute('data-bs-target');
        var targetRow = document.querySelector(targetId);
        if (targetRow.classList.contains('show')) {
            targetRow.classList.remove('show');
        } else {
            targetRow.classList.add('show');
        }
    });
});