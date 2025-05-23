interface ProgressBarProps {
  current: number;
  total: number;
  showText?: boolean;
}

export function ProgressBar({ current, total, showText = true }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {showText && (
        <p className="mt-2 text-sm text-gray-500 text-right">
          Pregunta {current} de {total}
        </p>
      )}
    </div>
  );
} 