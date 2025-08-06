Place your resume PDF file in this public folder.

To use your existing PDF:
1. Copy your PDF file to the public folder
2. Rename it to "resume.pdf" (or update the resumeUrl prop in the ResumeDownload component)
3. The download will work automatically

Example file structure:
public/
  ├── resume.pdf (your PDF file)
  ├── favicon.ico
  └── other assets...

You can also customize the file name and path by passing props to the ResumeDownload component:
<ResumeDownload 
  resumeUrl="/path/to/your/resume.pdf" 
  fileName="Your_Custom_Name.pdf" 
/>
