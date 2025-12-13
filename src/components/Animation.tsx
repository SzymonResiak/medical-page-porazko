interface AnimationProps {
  className?: string;
}

export const Animation = ({ className = "" }: AnimationProps) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-[72px] h-[72px]"
        aria-label="Scroll animation"
      >
        <source src="/images/animation.webm" type="video/webm" />
        <source src="/images/animation.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
