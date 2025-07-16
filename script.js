let paymentDone = false;

function unlockDownload() {
  paymentDone = true;
  alert("✅ Payment confirmed manually. Now you can download the Bio-Data.");
}
function payAndDownload() {
  if (!paymentDone) {
    alert("⚠️ Please pay ₹5 first via QR code before downloading.");
    return;
  }

  // ... your jsPDF code continues here ...
}

function payAndDownload() {
  alert("✅ downloaded Successfully (Simulation)");

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const color = document.getElementById("theme-color").value;
  doc.setTextColor(color);

  const get = id => document.getElementById(id).value;
  const photoInput = document.getElementById("photo");
  const file = photoInput.files[0];

  const lines = [
    `BIO-DATA`,
    ``,
    `Name: ${get("name")}`,
    `Father Name: ${get("father")}`,
    `Mother Name: ${get("mother")}`,
    `D.O.B: ${get("dob")}`,
    `Height: ${get("height")}`,
    `Religion: ${get("religion")}`,
    `Caste: ${get("caste")}`,
    `Home God: ${get("homegod")}`,
    `Place of Birth: ${get("birthplace")}`,
    `Rashi: ${get("rashi")}`,
    `Nakshatra: ${get("nakshatra")}`,
    `Education: ${get("education")}`,
    `Job Description: ${get("job")}`,
    `Salary: ${get("salary")}`,
    `Siblings: ${get("siblings")}`,
    `Farm Land: ${get("farmland")}`,
    `Home Address: ${get("address")}`,
    `Phone: ${get("phone")}`
  ];

  doc.setFont("Times", "bold");
  doc.setFontSize(14);
  doc.text(lines, 20, 20);

  // If photo is uploaded
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imgData = e.target.result;

      // 🖼️ Add image in correct format
      doc.addImage(imgData, 'JPEG', 130, 20, 60, 60); // x, y, width, height
      doc.save(`${get("name")}-Biodata.pdf`);
    };
    reader.readAsDataURL(file);
  } else {
    doc.save(`${get("name")}-Biodata.pdf`);
  }
}


function generateBioData() {
  const get = id => document.getElementById(id).value;

  const preview = document.getElementById("biodata-preview");
  const color = document.getElementById("theme-color").value;

  preview.className = "preview-section";
  if (color === "#0d47a1") preview.classList.add("blue");
  else if (color === "#2e7d32") preview.classList.add("green");
  else if (color === "#c62828") preview.classList.add("red");
  else if (color === "#6a1b9a") preview.classList.add("purple");

  const data = `
                        BIO-DATA

Name: ${get("name")}
Father Name: ${get("father")}
Mother Name: ${get("mother")}
D.O.B: ${get("dob")}
Height: ${get("height")}
Religion: ${get("religion")}
Caste: ${get("caste")}
Home God: ${get("homegod")}
Place of Birth: ${get("birthplace")}
Rashi: ${get("rashi")}
Nakshatra: ${get("nakshatra")}
Education: ${get("education")}
Job Description: ${get("job")}
Salary: ${get("salary")}
Siblings: ${get("siblings")}
Farm Land: ${get("farmland")}
Home Address: ${get("address")}
Phone: ${get("phone")}
`;

  preview.innerText = data;
}

