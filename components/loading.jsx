"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [videoEnded, setVideoEnded] = useState(false)
  const [pageLoaded, setPageLoaded] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    // This pattern is necessary for Next.js to avoid hydration mismatches
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)

    // ตรวจสอบว่า page โหลดเสร็จแล้วหรือยัง
    const handleLoad = () => {
      setPageLoaded(true)
    }

    if (document.readyState === "complete") {
      setPageLoaded(true)
    } else {
      window.addEventListener("load", handleLoad)

      // Fallback: ซ่อน loading หลังจาก 5 วินาทีถ้ายังไม่เสร็จ
      const fallbackTimer = setTimeout(() => {
        setPageLoaded(true)
      }, 5000)

      return () => {
        window.removeEventListener("load", handleLoad)
        clearTimeout(fallbackTimer)
      }
    }
  }, [])

  // เมื่อวิดีโอจบให้ transition ออก (รอให้ page โหลดเสร็จด้วย)
  useEffect(() => {
    if (videoEnded) {
      // รอให้ page โหลดเสร็จ หรือรอ 500ms หลังจากวิดีโอจบ
      const shouldWait = !pageLoaded
      const waitTime = shouldWait ? 1000 : 400

      const timer = setTimeout(() => {
        setIsLoading(false)
      }, waitTime)
      return () => clearTimeout(timer)
    }
  }, [videoEnded, pageLoaded])

  // Fallback: ถ้า page โหลดเสร็จแล้วแต่วิดีโอยังไม่จบ ให้รอเพิ่มอีกนิด
  useEffect(() => {
    if (pageLoaded && !videoEnded) {
      // รอเพิ่ม 3 วินาทีหลังจาก page โหลดเสร็จ เพื่อให้วิดีโอมีโอกาสจบ
      const fallbackTimer = setTimeout(() => {
        if (!videoEnded) {
          setVideoEnded(true)
        }
      }, 3000)
      return () => clearTimeout(fallbackTimer)
    }
  }, [pageLoaded, videoEnded])

  const handleVideoEnd = () => {
    setVideoEnded(true)
  }

  const handleVideoError = () => {
    // ถ้าวิดีโอโหลดไม่ได้ ให้ transition ออกเลย
    setVideoEnded(true)
  }

  if (!mounted) return null

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Video Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                onError={handleVideoError}
                onLoadedData={() => {
                  // วิดีโอเริ่มโหลดแล้ว
                  if (videoRef.current) {
                    videoRef.current.play().catch(console.error)
                  }
                }}
                className="w-full h-full object-cover"
                preload="auto"
              >
                <source src="/Logo-3-[remix].mp4" type="video/mp4" />
              </video>
            </motion.div>

            {/* Fallback text if video fails to load */}
            {/* {!videoRef.current && (
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl font-light tracking-tight text-foreground sm:text-3xl">
                  AROYÉ
                </h2>
                <p className="mt-2 text-sm font-light text-muted-foreground">
                  รสชาติแห่งความเป็นไทย
                </p>
              </div>
            )} */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
