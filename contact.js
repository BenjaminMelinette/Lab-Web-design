document.getElementById("contactForm").addEventListener("submit", function (e) {

		const fullname = document.getElementById("full-name").value.trim();
		const namePattern = /^[A-Za-z\s]+$/;

		if (fullname.length < 5) {
			alert("Full name must contain at least 5 characters.");
			e.preventDefault();
			return;
		}

		if (!namePattern.test(fullname)) {
			alert("Full name must contain only letters and spaces.");
			e.preventDefault();
			return;
		}

		const email = document.getElementById("email").value.trim();
		const emailPattern = /^[a-zA-Z0-9._%+-]+@e-uvt.ro$/;

		if (!emailPattern.test(email)) {
			alert("Email must be valid and end with @e-uvt.ro");
			e.preventDefault();
			return;
		 }

		const phone = document.getElementById("phone").value.trim();
		const phonePattern = /^[0-9]+$/;

		if (!phonePattern.test(phone)) {
			alert("Phone number must be only numbers");
			e.preventDefault();
			return;
		}

        const dobValue = document.getElementById("dob").value;

        const birthDate = new Date(dobValue);
        const today = new Date();

        let ageFromDob = today.getFullYear() - birthDate.getFullYear();

        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            ageFromDob--;
        }
        
        if (ageFromDob < 18){
            alert("You must be 18 at least");
            e.preventDefault();
            return;
        }

        const age = document.getElementById("age").value.trim();

        if (age < 18 || age > 60){
            alert("You must be between 18 and 60 years old");
            e.preventDefault();
            return;
        }

        const website = document.getElementById("website").value.trim();
        let url = "";
        let validUrl = true;

        try{
            url = new URL(website);
        } catch {
            validUrl = false;
        }

        if (url.protocol != "https:"){
            alert("Your website should use the protocol https");
            e.preventDefault();
            return;
        }
        
        if (!validUrl){
            alert("Your website doesn't use a valid url");
            e.preventDefault();
            return;
        }

        const fileInput = document.getElementById("fileUpload");

        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];

            const allowedTypes = [
                "application/pdf",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            ];

            if (!allowedTypes.includes(file.type)) {
                alert("Only PDF or DOCX files are allowed");
                e.preventDefault();
                return;
            }

            if (file.size > 2 * 1024 * 1024) {
                alert("File must not exceed 2MB");
                e.preventDefault();
                return;
            }
        }

        const color = document.getElementById("color").value.trim();

        if (!color){
            alert("You must define a color");
            e.preventDefault();
            return;
        }

		let proceed = confirm("Do you want to proceed with the action?");
        alert(proceed ? "Message sent, we will answer you soon" : "The message hasn't been sent");
});