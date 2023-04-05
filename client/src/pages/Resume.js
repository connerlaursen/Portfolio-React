import React from 'react'
import ResumePDF from "../assets/images/resume.pdf"
function Resume() {
  return (
    <div className="resumeWrapper">
    <object className="resumeSection" data={ResumePDF} type="application/pdf" width="80%" height="80%">
      <p>Alternative text - include a link <a href={ResumePDF}>to the PDF!</a></p>
  </object>
  </div>
  )
}

export default Resume