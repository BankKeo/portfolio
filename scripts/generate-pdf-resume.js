// This script demonstrates how you could generate a PDF resume
// Run this in the scripts folder to create a proper PDF version

import { jsPDF } from "jspdf"

function generatePDFResume() {
  const doc = new jsPDF()

  // Set font
  doc.setFont("helvetica")

  // Header
  doc.setFontSize(24)
  doc.setTextColor(88, 28, 135) // Purple color
  doc.text("JOHN DEVELOPER", 20, 30)

  doc.setFontSize(14)
  doc.setTextColor(100, 100, 100)
  doc.text("Full Stack Developer & UI/UX Enthusiast", 20, 40)

  // Contact Info
  doc.setFontSize(10)
  doc.setTextColor(60, 60, 60)
  doc.text("Email: john@example.com | Phone: (555) 123-4567", 20, 50)
  doc.text("LinkedIn: linkedin.com/in/johndeveloper | GitHub: github.com/johndeveloper", 20, 55)
  doc.text("Location: San Francisco, CA", 20, 60)

  // Line separator
  doc.setDrawColor(88, 28, 135)
  doc.line(20, 65, 190, 65)

  // Summary Section
  doc.setFontSize(16)
  doc.setTextColor(88, 28, 135)
  doc.text("SUMMARY", 20, 80)

  doc.setFontSize(10)
  doc.setTextColor(40, 40, 40)
  const summaryText =
    "Passionate Full Stack Developer with 5+ years of experience creating beautiful, functional, and user-centered digital experiences. Specialized in modern web technologies including React, Next.js, Node.js, and cloud platforms."
  const splitSummary = doc.splitTextToSize(summaryText, 170)
  doc.text(splitSummary, 20, 90)

  // Technical Skills
  doc.setFontSize(16)
  doc.setTextColor(88, 28, 135)
  doc.text("TECHNICAL SKILLS", 20, 115)

  doc.setFontSize(10)
  doc.setTextColor(40, 40, 40)
  doc.text("Frontend: React, Next.js, TypeScript, Tailwind CSS, Vue.js", 20, 125)
  doc.text("Backend: Node.js, Python, Express.js, FastAPI, GraphQL", 20, 132)
  doc.text("Databases: PostgreSQL, MongoDB, MySQL, Redis", 20, 139)
  doc.text("Cloud & Tools: AWS, Vercel, Docker, Git, Figma", 20, 146)

  // Experience
  doc.setFontSize(16)
  doc.setTextColor(88, 28, 135)
  doc.text("PROFESSIONAL EXPERIENCE", 20, 165)

  // Senior Full Stack Developer
  doc.setFontSize(12)
  doc.setTextColor(40, 40, 40)
  doc.text("Senior Full Stack Developer | TechCorp Inc. | 2022 - Present", 20, 175)

  doc.setFontSize(9)
  doc.text("• Led development of microservices architecture serving 100K+ daily active users", 25, 183)
  doc.text("• Mentored 5 junior developers and established code review best practices", 25, 189)
  doc.text("• Improved system performance by 40% through optimization strategies", 25, 195)

  // Frontend Developer
  doc.setFontSize(12)
  doc.setTextColor(40, 40, 40)
  doc.text("Frontend Developer | StartupXYZ | 2020 - 2022", 20, 210)

  doc.setFontSize(9)
  doc.text("• Built responsive web applications using React and TypeScript", 25, 218)
  doc.text("• Developed reusable component library used across 3 products", 25, 224)
  doc.text("• Optimized application performance resulting in 25% faster load times", 25, 230)

  // Projects
  doc.setFontSize(16)
  doc.setTextColor(88, 28, 135)
  doc.text("FEATURED PROJECTS", 20, 250)

  doc.setFontSize(11)
  doc.setTextColor(40, 40, 40)
  doc.text("E-Commerce Platform - Next.js, TypeScript, Stripe, PostgreSQL", 20, 260)
  doc.text("Task Management App - React, Node.js, Socket.io, MongoDB", 20, 268)
  doc.text("AI Chat Assistant - Python, FastAPI, OpenAI API, React", 20, 276)

  return doc
}

// Generate and save the PDF
const pdfDoc = generatePDFResume()
console.log("PDF Resume generated successfully!")

// In a real implementation, you would save this to a file or return it as a blob
// pdfDoc.save('John_Developer_Resume.pdf');
