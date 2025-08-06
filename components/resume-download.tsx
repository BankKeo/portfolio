"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, FileText, Check } from "lucide-react"

interface ResumeDownloadProps {
  className?: string
  size?: "sm" | "lg" | "default"
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  resumeUrl?: string
  fileName?: string
}

export function ResumeDownload({
  className,
  size = "lg",
  variant = "outline",
  resumeUrl = "/resume.pdf", // Default path - you can place your PDF in the public folder
  fileName = "John_Developer_Resume.pdf",
}: ResumeDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // Fetch the PDF file
      const response = await fetch(resumeUrl)

      if (!response.ok) {
        throw new Error("Resume file not found")
      }

      // Get the blob
      const blob = await response.blob()

      // Create download link
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = fileName
      link.style.display = "none"

      // Trigger download
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Clean up
      URL.revokeObjectURL(url)

      setIsDownloaded(true)
      setTimeout(() => {
        setIsDownloaded(false)
      }, 3000)
    } catch (error) {
      console.error("Download failed:", error)
      // You could add error state handling here
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={className}>
      <Button
        size={size}
        variant={variant}
        onClick={handleDownload}
        disabled={isDownloading}
        className={`${variant === "outline" ? "border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent" : ""} transition-all duration-300`}
      >
        {isDownloading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="mr-2"
            >
              <FileText className="h-4 w-4" />
            </motion.div>
            Downloading...
          </>
        ) : isDownloaded ? (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Check className="mr-2 h-4 w-4 text-green-500" />
            </motion.div>
            Downloaded!
          </>
        ) : (
          <>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </>
        )}
      </Button>
    </motion.div>
  )
}
