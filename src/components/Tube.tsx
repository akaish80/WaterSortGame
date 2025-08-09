import './Tube.css';

interface TubeProps {
  tube: string[];
  index: number;
  onClick: (index: number) => void;
}

export default function Tube({ tube, index, onClick }: TubeProps) {
  return (
    <div className="tube" onClick={() => onClick(index)}>
      {Array(4).fill(null).map((_, i) => (
        <div
          key={i}
          className="liquid"
          style={{ backgroundColor: tube[3 - i] || "transparent" }}
        />
      ))}
    </div>
  );
}