'use client'
import CountUp from "react-countup";

export default function Counter({
  className,
  start,
  end,
  duration,
}: {
  className: string;
  start: number;
  end: number;
  duration: number;
}) {
  return (
    <CountUp start={start} end={end} duration={duration} enableScrollSpy>
      {({ countUpRef }) => (
        <div className={className}>
          <span ref={countUpRef} />
        </div>
      )}
    </CountUp>
  );
}
