const classCode = document.getElementById('classCode');

function checkClass() {
    if (classCode.value === 'root9') {
        window.location.replace('../Route-2/pages/class9.html');
    } else if (classCode.value === 'class10') {
        window.location.replace('../Route-2/pages/class10.html');
    } else if (classCode.value === '') {
        alert('Oops!!\nPlease enter the code to continue ....');
    } else {
        alert(
            'Oops!!\nYou entered wrong code...\nIf you need any help, please contact Route 2 Online Tutors ....'
        );
    }
}
