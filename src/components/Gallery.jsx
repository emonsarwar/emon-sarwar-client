import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"

export default function Gallery() {
  const images = [
    { src: "/profile.jpeg", alt: "Profile Image" },
    { src: "/im1.jpeg", alt: "Image 1" },
    { src: "/im2.jpeg", alt: "Image 2" },
    { src: "/im3.jpeg", alt: "Image 3" },
    { src: "/im4.jpeg", alt: "Image 4" },
  ]

  const [selectedImage, setSelectedImage] = useState(null)
  const [loadedImages, setLoadedImages] = useState(new Set())
  const [errorImages, setErrorImages] = useState(new Set())

  const openModal = (image) => setSelectedImage(image)
  const closeModal = () => setSelectedImage(null)

  const handleImageLoad = (src) => {
    setLoadedImages((prev) => new Set(prev).add(src))
  }

  const handleImageError = (src) => {
    setErrorImages((prev) => new Set(prev).add(src))
  }

  return (
    <section
      id="gallery"
      className="relative py-28 max-w-7xl mx-auto px-4 text-white overflow-hidden"
    >
      <div className="relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-center text-5xl md:text-6xl font-extrabold tracking-tight mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent italic">
            Visual Gallery
          </span>
        </motion.h2>

        {/* Masonry-style Grid */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openModal(image)}
              className="relative group p-[2px] rounded-[2.2rem] overflow-hidden cursor-pointer"
            >
              {/* --- INFINITE BORDER ANIMATION LAYER --- */}
              <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0ea5e9_0%,#2563eb_50%,#0ea5e9_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Main Content Container (The "Mask") */}
              <div className="relative h-full w-full bg-slate-900 rounded-[2.1rem] overflow-hidden z-10">
                {/* Skeleton */}
                {!loadedImages.has(image.src) && !errorImages.has(image.src) && (
                  <div className="absolute inset-0 animate-pulse bg-slate-800" />
                )}

                {/* Error State */}
                {errorImages.has(image.src) && (
                  <div className="flex h-64 items-center justify-center text-sm text-red-400 italic">
                    Image unreachable
                  </div>
                )}

                {/* Image Element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  onLoad={() => handleImageLoad(image.src)}
                  onError={() => handleImageError(image.src)}
                  className={`w-full object-cover transition-all duration-700 group-hover:scale-110
                    ${loadedImages.has(image.src) ? "opacity-100" : "opacity-0"}`}
                />

                {/* Subtle dark overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-60" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full border border-white/10 rounded-[3rem] overflow-hidden bg-black"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 z-20 rounded-full bg-black/50 backdrop-blur-md p-3 text-white hover:bg-white hover:text-black transition-all"
                >
                  <FaTimes />
                </button>

                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[85vh] object-contain shadow-2xl"
                />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}