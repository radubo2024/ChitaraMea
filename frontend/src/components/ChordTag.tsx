import { useNavigate } from 'react-router-dom';

interface ChordTagProps {
  name: string;
  onClick?: () => void;
  linkToChord?: boolean;
}

export default function ChordTag({ name, onClick, linkToChord = true }: ChordTagProps) {
  const navigate = useNavigate();

  const getTagClass = (): string => {
    const lower = name.toLowerCase();
    if (lower.includes('m') && !lower.includes('maj')) return 'chord-tag chord-tag-minor';
    if (lower.includes('7')) return 'chord-tag chord-tag-seventh';
    if (lower.includes('sus') || lower.includes('#') || lower.includes('b')) return 'chord-tag chord-tag-other';
    return 'chord-tag chord-tag-major';
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (linkToChord) {
      navigate(`/chords?highlight=${encodeURIComponent(name)}`);
    }
  };

  return (
    <span className={getTagClass()} onClick={handleClick} title={`Acord ${name}`}>
      {name}
    </span>
  );
}
