"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImageGalleryCmp({ images }) {
  const productImages = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return <ImageGallery items={productImages} />;
}
