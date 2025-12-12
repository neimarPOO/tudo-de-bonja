import React, { useState, useEffect, useRef } from 'react';
import { Product } from '../types';

interface CarouselProps {
    products: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    useEffect(() => {
        if (isPaused) return;
        autoPlayRef.current = setInterval(nextSlide, 5000); // Auto-play every 5s
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [isPaused, products.length]);

    if (products.length === 0) return null;

    const getCardStyle = (index: number) => {
        const diff = (index - activeIndex + products.length) % products.length;
        // Adjust diff to be within -length/2 to length/2 for shortest path
        const adjustedDiff = diff > products.length / 2 ? diff - products.length : diff < -products.length / 2 ? diff + products.length : diff;

        const absDiff = Math.abs(adjustedDiff);
        const isVisible = absDiff <= 2; // Only show center + 2 on each side

        if (!isVisible) return { display: 'none' };

        const zIndex = 10 - absDiff;
        const scale = 1 - absDiff * 0.15;
        const translateX = adjustedDiff * 60; // Percent
        const rotateY = adjustedDiff * -25; // Degrees
        const opacity = 1 - absDiff * 0.3;
        const blur = absDiff * 2;

        return {
            transform: `translateX(${translateX}%) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
            zIndex: zIndex,
            opacity: opacity,
            filter: `blur(${blur}px)`,
        };
    };

    return (
        <div
            className="carousel-container relative w-full h-[600px] flex items-center justify-center overflow-hidden perspective-1000"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 z-50 p-3 rounded-full bg-midnight-gold/80 text-midnight-charcoal hover:bg-white transition-all shadow-lg backdrop-blur-sm"
            >
                <span className="material-symbols-outlined text-3xl">chevron_left</span>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 z-50 p-3 rounded-full bg-midnight-gold/80 text-midnight-charcoal hover:bg-white transition-all shadow-lg backdrop-blur-sm"
            >
                <span className="material-symbols-outlined text-3xl">chevron_right</span>
            </button>

            {/* Cards */}
            <div className="relative w-full max-w-lg h-[500px] flex items-center justify-center">
                {products.map((product, index) => {
                    // Calculate effective index for cyclic rendering logic if needed, 
                    // but for simple 3D effect, we just render all and transform them.
                    // Optimization: We could only render visible ones, but CSS 'display: none' handles it in getCardStyle.

                    return (
                        <div
                            key={product.id}
                            className="absolute w-full h-full transition-all duration-700 ease-out will-change-transform"
                            style={getCardStyle(index)}
                        >
                            <div className="w-full h-full relative rounded-2xl shadow-2xl overflow-hidden bg-midnight-charcoal border border-midnight-gold/20 group">
                                {/* Image Background */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url("${product.image}")` }}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-midnight-gold text-midnight-charcoal mb-3 w-fit">
                                        {product.category}
                                    </span>
                                    <h3 className="font-display text-4xl font-bold leading-tight mb-2 text-shadow-lg">
                                        {product.title}
                                    </h3>
                                    <p className="font-serif text-lg text-white/90 line-clamp-3 mb-6">
                                        {product.description}
                                    </p>

                                    <a
                                        href={product.link || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-4 bg-midnight-gold text-midnight-charcoal hover:bg-white rounded-xl font-sans text-lg font-bold tracking-widest uppercase transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                                    >
                                        <span className="material-symbols-outlined">storefront</span>
                                        Visitar Página
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 flex gap-2 z-50">
                {products.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-midnight-gold w-8' : 'bg-white/30 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
