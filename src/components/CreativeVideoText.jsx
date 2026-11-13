import { useEffect, useRef, useState } from "react";
import "../styles/CreativeVideoText.css";

import video1 from "../assets/video/video1.mp4";
import video2 from "../assets/video/video2.mp4";
import video3 from "../assets/video/video3.mp4";
import video5 from "../assets/video/video5.mp4";
import video6 from "../assets/video/video6.mp4";
import video7 from "../assets/video/video7.mp4";
import video8 from "../assets/video/video8.mp4";

const videos = [
    video1,
    video2,
    video3,
    video5,
    video6,
    video7,
    video8,
];

export default function CreativeVideoText() {
    const canvasRef = useRef(null);
    const videoRef = useRef(null);

    const animationRef = useRef(null);
    const timerRef = useRef(null);

    const [currentVideo, setCurrentVideo] = useState(0);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        video.src = videos[currentVideo];
        video.load();

        const playVideo = async () => {
            try {
                await video.play();
            } catch {
                console.log("Autoplay blocked");
            }
        };

        video.addEventListener(
            "loadeddata",
            playVideo
        );

        timerRef.current = setTimeout(() => {
            setCurrentVideo(
                (prev) =>
                    (prev + 1) % videos.length
            );
        }, 5000);

        return () => {
            clearTimeout(timerRef.current);

            video.removeEventListener(
                "loadeddata",
                playVideo
            );
        };
    }, [currentVideo]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const video = videoRef.current;

        if (!canvas || !video) return;

        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            const rect =
                canvas.getBoundingClientRect();

            const dpr = Math.min(
                window.devicePixelRatio || 1,
                2
            );

            canvas.width =
                rect.width * dpr;

            canvas.height =
                rect.height * dpr;

            ctx.setTransform(
                dpr,
                0,
                0,
                dpr,
                0,
                0
            );
        };

        const draw = () => {
            const width =
                canvas.clientWidth;

            const height =
                canvas.clientHeight;

            if (!width || !height) {
                animationRef.current =
                    requestAnimationFrame(draw);
                return;
            }

            ctx.clearRect(
                0,
                0,
                width,
                height
            );

            let fontSize = Math.min(
                width * 0.22,
                330
            );

            if (width < 900) {
                fontSize =
                    width * 0.20;
            }

            if (width < 600) {
                fontSize =
                    width * 0.18;
            }

            const text = "TRAVEL";

            ctx.font = `
                900 ${fontSize}px
                Georgia,
                "Times New Roman",
                serif
            `;

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            const x = width / 2;
            const y = height / 2;

            /* 3D DEPTH */

            for (let i = 32; i > 0; i--) {
                ctx.save();

                ctx.fillStyle =
                    `rgba(
                        0,
                        0,
                        0,
                        ${0.012 +
                    (32 - i) * 0.00055
                    }
                    )`;

                ctx.fillText(
                    text,
                    x + i * 0.75,
                    y + i * 0.6
                );

                ctx.restore();
            }

            /* VIDEO MASK */

            ctx.save();

            ctx.fillStyle = "#ffffff";

            ctx.fillText(
                text,
                x,
                y
            );

            ctx.globalCompositeOperation =
                "source-in";

            if (
                video.readyState >= 2 &&
                video.videoWidth > 0
            ) {
                const videoRatio =
                    video.videoWidth /
                    video.videoHeight;

                const canvasRatio =
                    width / height;

                let drawWidth;
                let drawHeight;
                let drawX;
                let drawY;

                if (videoRatio > canvasRatio) {
                    drawHeight = height;

                    drawWidth =
                        height *
                        videoRatio;

                    drawX =
                        (width -
                            drawWidth) /
                        2;

                    drawY = 0;
                } else {
                    drawWidth = width;

                    drawHeight =
                        width /
                        videoRatio;

                    drawX = 0;

                    drawY =
                        (height -
                            drawHeight) /
                        2;
                }

                ctx.filter =
                    "brightness(1.35) " +
                    "contrast(1.22) " +
                    "saturate(1.5)";

                ctx.drawImage(
                    video,
                    drawX,
                    drawY,
                    drawWidth,
                    drawHeight
                );

                ctx.filter = "none";
            }

            ctx.restore();

            /* EDGE */

            ctx.save();

            ctx.font = `
                900 ${fontSize}px
                Georgia,
                "Times New Roman",
                serif
            `;

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            ctx.lineWidth = 1.5;

            ctx.strokeStyle =
                "rgba(255,255,255,0.4)";

            ctx.strokeText(
                text,
                x,
                y
            );

            ctx.restore();

            animationRef.current =
                requestAnimationFrame(draw);
        };

        resizeCanvas();

        window.addEventListener(
            "resize",
            resizeCanvas
        );

        draw();

        return () => {
            window.removeEventListener(
                "resize",
                resizeCanvas
            );

            cancelAnimationFrame(
                animationRef.current
            );
        };
    }, []);

    return (
        <section className="creative-video-text">

            <div className="creative-content">

                <div className="creative-title-wrapper">

                    <video
                        ref={videoRef}
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="creative-hidden-video"
                    />

                    <canvas
                        ref={canvasRef}
                        className="creative-video-canvas"
                    />

                </div>

                <div className="creative-subtitle">

                    <span className="subtitle-line"></span>

                    <p>
                        Journeys that stay with you.
                    </p>

                    <span className="subtitle-line"></span>

                </div>

            </div>

        </section>
    );
}