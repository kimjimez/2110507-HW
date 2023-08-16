document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get form values
        const companyName = document.getElementById("companyName").value;
        const contactName = document.getElementById("contactName").value;
        const contactNumber = document.getElementById("contactNumber").value;
        const chairNumber = document.getElementById("chairNumber").value;

        // Validation
        if (!companyName || !contactName || !contactNumber) {
            alert("กรุณากรอกข้อมูลในช่อง: ชื่อบริษัท, ชื่อผู้ติดต่อ, เบอร์ผู้ติดต่อ");
            return;
        }

        if (chairNumber) {
            const chairInt = parseInt(chairNumber, 10);
            if (isNaN(chairInt) || chairInt < 1 || chairInt > 10) {
                alert("จำนวนเก้าอี้ต้องเป็นตัวเลขระหว่าง 1 ถึง 10 เท่านั้น");
                return;
            }
        }

        // If all validations pass, you can submit the form (or handle it accordingly)
        // This is just a demonstration, so we'll just alert a success message
        alert("ข้อมูลถูกต้อง! คุณสามารถเพิ่มรหัสสำหรับการส่งฟอร์มได้ที่นี่");
    });
});
