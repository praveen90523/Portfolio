import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

// Ensure public directory exists
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, bottom: 40, left: 50, right: 50 }
});

const outputFilePath = path.join(publicDir, 'Praveen_Resume.pdf');
const stream = fs.createWriteStream(outputFilePath);
doc.pipe(stream);

// Set standard font settings
const fontHeading = 'Helvetica-Bold';
const fontSubheading = 'Helvetica-Bold';
const fontBody = 'Helvetica';

// Title
doc.font(fontHeading).fontSize(18).text('PRAVEEN DODDI', { align: 'center' });
doc.moveDown(0.2);

// Contact Info
doc.font(fontBody).fontSize(9).text('Mobileno: 9052339291  |  Mail: d.praveen2026@gmail.com', { align: 'center' });
doc.moveDown(0.2);
doc.text('LinkedIn: http://www.linkedin.com/in/praveen-d2005  |  GitHub: https://github.com/praveen90523', { align: 'center' });
doc.moveDown(0.8);

// Helper function to draw a section header with line
function addSectionHeader(title) {
  doc.moveDown(0.5);
  doc.font(fontHeading).fontSize(11).text(title, { characterSpacing: 0.5 });
  doc.moveDown(0.1);
  const y = doc.y;
  doc.moveTo(50, y).lineTo(545, y).lineWidth(1).stroke('#333333');
  doc.moveDown(0.4);
}

// CAREER OBJECTIVE
addSectionHeader('CAREER OBJECTIVE:');
doc.font(fontBody).fontSize(9.5).text(
  'Aspiring Full Stack MERN Developer with hands-on experience in building responsive web applications using React.js, Node.js, Express.js, and MongoDB. Passionate about developing scalable web solutions, learning modern technologies, and contributing to innovative software projects while continuously enhancing technical expertise.',
  { align: 'justify', lineGap: 2 }
);

// EDUCATION
addSectionHeader('EDUCATION:');

// NSRIT
doc.font(fontHeading).fontSize(9.5).text('Nadimpalli Satyanarayana Raju Institute of Technology', { continued: true });
doc.font(fontBody).fontSize(9.5).text(' '.repeat(45) + 'March2023 - May2027', { align: 'right' });
doc.font(fontBody).fontSize(9).text('Bachelor of Technology ECE', { continued: true });
doc.font(fontHeading).fontSize(9).text(' '.repeat(85) + 'CGPA : 8.35/10', { align: 'right' });
doc.moveDown(0.4);

// Narayana Junior College
doc.font(fontHeading).fontSize(9.5).text('Narayana Junior College', { continued: true });
doc.font(fontBody).fontSize(9.5).text(' '.repeat(79) + 'March2021 - April2023', { align: 'right' });
doc.font(fontBody).fontSize(9).text('Intermediate', { continued: true });
doc.font(fontHeading).fontSize(9).text(' '.repeat(98) + 'MARKS : 830/1000', { align: 'right' });
doc.moveDown(0.4);

// Universal High School
doc.font(fontHeading).fontSize(9.5).text('Universal High School', { continued: true });
doc.font(fontBody).fontSize(9.5).text(' '.repeat(84) + 'March2020 - March2021', { align: 'right' });
doc.font(fontBody).fontSize(9).text('SSC', { continued: true });
doc.font(fontHeading).fontSize(9).text(' '.repeat(110) + 'CGPA : 9.20/10', { align: 'right' });

// TECHNICAL SKILLS
addSectionHeader('TECHNICAL SKILLS:');
const skillsData = [
  { label: 'Frontend Technologies', val: 'HTML, CSS, Java Script' },
  { label: 'Backend Technologies', val: 'Node JS, Express JS' },
  { label: 'Libraries and Frameworks', val: 'React, Bootstrap, Tailwind CSS' },
  { label: 'Developer Tools', val: 'Vs code, Git, GitHub' },
  { label: 'Programming Languages', val: 'Python, Java' },
  { label: 'Common Skills', val: 'MSWord Excel, Power Point, MS Office' }
];

skillsData.forEach(item => {
  doc.font(fontHeading).fontSize(9).text('  •  ' + item.label + ': ', { continued: true });
  doc.font(fontBody).fontSize(9).text(item.val);
  doc.moveDown(0.2);
});

// PROJECTS
addSectionHeader('PROJECTS:');

// Project 1
doc.font(fontHeading).fontSize(9.5).text('Praveen Events | LIVEVIEW | ', { continued: true });
doc.font(fontBody).fontSize(9.5).text('(React.js | Node.js | Express.js | MongoDB | Tailwind CSS)');
doc.moveDown(0.2);
const p1Points = [
  'Developed a premium event management platform with a modern user interface.',
  'Built backend APIs to manage event inquiries and bookings.',
  'Implemented responsive layouts and reusable React components.',
  'Deployed the application with separate frontend and backend services.'
];
p1Points.forEach(pt => {
  doc.font(fontBody).fontSize(9).text('  •  ' + pt);
  doc.moveDown(0.15);
});
doc.moveDown(0.3);

// Project 2
doc.font(fontHeading).fontSize(9.5).text('Praveen Stores | LIVEVIEW | ', { continued: true });
doc.font(fontBody).fontSize(9.5).text('(React.js | Node.js | Express.js | MongoDB | Tailwind CSS | JWT)');
doc.moveDown(0.2);
const p2Points = [
  'Developed a full-stack e-commerce platform with secure authentication.',
  'Implemented product management, shopping cart, and admin dashboard.',
  'Built REST APIs and integrated MongoDB for product and user management.',
  'Designed a responsive shopping experience for desktop and mobile devices.'
];
p2Points.forEach(pt => {
  doc.font(fontBody).fontSize(9).text('  •  ' + pt);
  doc.moveDown(0.15);
});
doc.moveDown(0.3);

// Project 3
doc.font(fontHeading).fontSize(9.5).text('Praveen Tech | ', { continued: true });
doc.font(fontBody).fontSize(9.5).text('(React.js | Node.js | Express.js | MongoDB | Tailwind CSS)');
doc.moveDown(0.2);
const p3Points = [
  'Developed a full-stack business website with a modern, responsive interface.',
  'Built RESTful APIs using Express.js and Node.js.',
  'Integrated MongoDB for dynamic data storage.',
  'Designed a responsive UI optimized for desktop and mobile devices.',
  'Deployed the frontend and backend independently.'
];
p3Points.forEach(pt => {
  doc.font(fontBody).fontSize(9).text('  •  ' + pt);
  doc.moveDown(0.15);
});

// SOFTSKILLS
addSectionHeader('SOFTSKILLS:');
doc.font(fontBody).fontSize(9.5).text(
  'Active Listening  |  Creativity  |  Good Communication Skills  |  Patience  |  Adaptability  |  Time Management',
  { align: 'center' }
);

doc.end();

stream.on('finish', () => {
  console.log('PDF generated successfully at public/Praveen_Resume.pdf');
});
