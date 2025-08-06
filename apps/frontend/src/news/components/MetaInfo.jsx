import { Calendar, EyeIcon } from "lucide-react";

function MetaInfo({ badge, date, readCount }) {
  return (
    <div className="flex mb-6 text-sm text-accent gap-2">
      <div className="badge badge-error">{badge}</div>
      <div className="flex items-center gap-1">
        <Calendar />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-1">
        <EyeIcon />
        <span>{readCount}</span>
      </div>
    </div>
  );
}

export default MetaInfo;
